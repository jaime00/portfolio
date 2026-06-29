import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Poster } from 'smooth-components'

const DEFAULT_CODE = `import { Poster } from "smooth-components"

// Available images: "./pulp-fiction.jpg" or "./taxi-driver.jpg"
// Try editing the props below!

<Poster
  alt="Pulp Fiction"
  src="./pulp-fiction.jpg"
  hasFrame={true}
  frameSize="md"
  hasGlintEffect={true}
  onClick={() => alert("Clicked!")}
  styles={{
    height: "600px",
  }}
/>`

const DEFAULT_PROPS = {
  alt: 'Pulp Fiction',
  hasGlintEffect: true,
  hasFrame: true,
  frameSize: 'md',
  onClick: () => alert('Clicked!'),
  styles: { height: '600px' },
  src: '/pulp-fiction.jpg'
}

function parseProps(code, prev) {
  const next = { ...prev, styles: { ...prev.styles } }

  const altMatch = code.match(/alt="([^"]*)"/)
  if (altMatch) next.alt = altMatch[1]

  const glintMatch = code.match(/hasGlintEffect=\{(true|false)\}/)
  if (glintMatch) next.hasGlintEffect = glintMatch[1] === 'true'

  const frameMatch = code.match(/hasFrame=\{(true|false)\}/)
  if (frameMatch) next.hasFrame = frameMatch[1] === 'true'

  const frameSizeMatch = code.match(/frameSize="(sm|md|lg)"/)
  if (frameSizeMatch) next.frameSize = frameSizeMatch[1]

  const heightMatch = code.match(/height:\s*"([^"]*)"/)
  if (heightMatch) next.styles.height = heightMatch[1]
  else delete next.styles.height

  const widthMatch = code.match(/width:\s*"([^"]*)"/)
  if (widthMatch) next.styles.width = widthMatch[1]
  else delete next.styles.width

  const opacityMatch = code.match(/opacity:\s*(\d+(?:\.\d+)?)/)
  if (opacityMatch) next.styles.opacity = parseFloat(opacityMatch[1])
  else delete next.styles.opacity

  const onClickMatch = code.match(/onClick=\{.*?\}/)
  if (onClickMatch) {
    const body = code.match(/onClick=\{\(\)\s*=>\s*alert\("([^"]*)"\)\}/)
    next.onClick = body ? () => alert(body[1]) : () => alert('Clicked!')
  } else {
    delete next.onClick
  }

  const srcMatch = code.match(/src="([^"]*)"/)
  if (srcMatch) {
    const raw = srcMatch[1]
    next.src = raw.startsWith('./') ? raw.replace('./', '/') : raw
  }

  return next
}

function highlightJsx(code) {
  const COMMENT_PH = '__COMMENT__'
  const comments = []

  let safe = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  safe = safe.replace(/^\/\/.*$/gm, (match) => {
    comments.push(
      `<span style="color:#565f89;font-style:italic">${match}</span>`
    )
    return COMMENT_PH + (comments.length - 1) + '__'
  })

  safe = safe
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span style="color:#a5d6a7">$1</span>')
    .replace(/\b(import|from)\b/g, '<span style="color:#bb9af7">$1</span>')
    .replace(/\b(true|false)\b/g, '<span style="color:#ce93d8">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color:#f48fb1">$1</span>')
    .replace(
      /(&lt;\/?)(Poster|[A-Z]\w*)/g,
      '$1<span style="color:#82b1ff">$2</span>'
    )
    .replace(
      /\b(alt|src|hasGlintEffect|hasFrame|frameSize|onClick|styles|height|width|opacity)(?==|\b(?=:))/g,
      '<span style="color:#80cbc4">$1</span>'
    )
    .replace(/(\{|\})/g, '<span style="color:#ffd54f">$1</span>')

  safe = safe.replace(/__COMMENT__(\d+)__/g, (_, i) => comments[parseInt(i)])

  return safe
}

export default function Showroom() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [props, setProps] = useState(DEFAULT_PROPS)
  const [copied, setCopied] = useState(false)
  const [resetting, setResetting] = useState(false)
  const textareaRef = useRef(null)
  const preRef = useRef(null)
  const editorRef = useRef(null)

  const isMac =
    typeof navigator !== 'undefined' &&
    /Mac|iPhone|iPad/.test(navigator.userAgent)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [code])

  const handleReset = useCallback(() => {
    if (code === DEFAULT_CODE) return
    setResetting(true)
    setTimeout(() => {
      setCode(DEFAULT_CODE)
      setProps(DEFAULT_PROPS)
      setResetting(false)
    }, 400)
  }, [code])

  useEffect(() => {
    const el = editorRef.current
    if (!el) return
    const onKeyDown = (e) => {
      const mod = isMac ? e.metaKey : e.ctrlKey
      if (mod && !e.shiftKey && e.code === 'KeyC') {
        e.preventDefault()
        handleCopy()
      }
      if (mod && !e.shiftKey && e.code === 'KeyD') {
        e.preventDefault()
        handleReset()
      }
    }
    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [handleCopy, handleReset, isMac])

  const handleChange = (e) => {
    const ta = e.target
    const value = ta.value
    const cursor = ta.selectionStart
    setCode(value)
    setProps((prev) => parseProps(value, prev))
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = cursor
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const ta = e.target
      const start = ta.selectionStart
      const end = ta.selectionEnd
      const newValue = code.substring(0, start) + '  ' + code.substring(end)
      setCode(newValue)
      setProps((prev) => parseProps(newValue, prev))
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2
      })
    }
  }

  const handleScroll = () => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop
      preRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }

  const highlightedLines = useMemo(() => {
    const lines = highlightJsx(code).split('\n')
    return lines
      .map(
        (line, i) =>
          `<div class="editor-line" data-line="${i + 1}">${line || ' '}</div>`
      )
      .join('')
  }, [code])

  const propsKey = JSON.stringify(props)

  return (
    <div className="flex min-h-[32rem] flex-col items-stretch gap-4 p-3 lg:min-h-[36rem] lg:flex-row lg:gap-6 lg:p-6">
      {/* Editor */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div
          ref={editorRef}
          className="flex h-[24rem] flex-col overflow-hidden rounded-lg border border-white/10 bg-[#1a1b26] lg:h-auto lg:min-h-0 lg:flex-1"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 bg-[#13141c] px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-2 font-mono text-xs text-[#a9b1d6]">
              example.tsx
            </span>
            <div
              className="group ml-auto flex cursor-pointer items-center gap-2"
              onClick={handleCopy}
              title="Copy code"
            >
              <span className="hidden font-mono text-xs text-[#565a6e] transition-colors group-hover:text-[#a9b1d6] md:inline">
                {isMac ? '⌘' : 'Ctrl'}+C to copy
              </span>
              <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.92 }}>
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-[#28c840]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    className="stroke-[#565a6e] transition-colors group-hover:stroke-[#a9b1d6]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </motion.div>
            </div>
          </div>

          {/* Editor body */}
          <div className="relative min-h-0 flex-1">
            <pre
              ref={preRef}
              className="pointer-events-none absolute inset-0 overflow-hidden py-3 pr-3 pl-8 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words text-[#a9b1d6] md:py-4 md:pr-4 md:pl-10 md:text-sm"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: highlightedLines }}
            />
            <textarea
              ref={textareaRef}
              className="absolute inset-0 w-full resize-none bg-transparent py-3 pr-3 pl-8 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words text-transparent caret-white focus:outline-none md:py-4 md:pr-4 md:pl-10 md:text-sm"
              value={code}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              onScroll={handleScroll}
              spellCheck={false}
            />
          </div>

          {/* Footer bar */}
          <AnimatePresence>
            {code !== DEFAULT_CODE && (
              <motion.button
                initial={{ opacity: 0, x: -12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -12, filter: 'blur(4px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleReset}
                className="flex cursor-pointer items-center gap-1.5 px-4 py-2 font-mono text-xs text-[#565a6e] transition-colors hover:text-[#a9b1d6]"
              >
                <motion.svg
                  animate={resetting ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </motion.svg>
                Reset
                <span className="ml-1 hidden md:inline">
                  {isMac ? '⌘' : 'Ctrl'}+D
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Preview */}
      <div className="flex flex-1 items-center justify-center py-6 lg:py-0">
        <Poster
          key={propsKey}
          alt={props.alt}
          src={props.src || '/pulp-fiction.jpg'}
          hasGlintEffect={props.hasGlintEffect}
          hasFrame={props.hasFrame}
          frameSize={props.frameSize}
          onClick={props.onClick}
          styles={props.styles}
        />
      </div>
    </div>
  )
}
