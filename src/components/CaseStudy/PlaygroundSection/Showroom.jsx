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
  followCursor={true}
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
  followCursor: true,
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

  const followCursorMatch = code.match(/followCursor=\{(true|false)\}/)
  if (followCursorMatch) next.followCursor = followCursorMatch[1] === 'true'
  else delete next.followCursor

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

/* eslint-disable no-control-regex */
function highlightJsx(code) {
  const placeholders = []
  const ph = (html) => {
    placeholders.push(html)
    return `\x00P${placeholders.length - 1}\x00`
  }

  let safe = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  safe = safe.replace(/^\/\/.*$/gm, (m) =>
    ph(`<span style="color:#565f89;font-style:italic">${m}</span>`)
  )

  safe = safe.replace(/("(?:[^"\\]|\\.)*")/g, (m) =>
    ph(`<span style="color:#a5d6a7">${m}</span>`)
  )

  safe = safe.replace(
    /\b(import|from|const|let|function|return|export)\b/g,
    (m) => ph(`<span style="color:#bb9af7">${m}</span>`)
  )

  safe = safe.replace(/\b(true|false|null|undefined)\b/g, (m) =>
    ph(`<span style="color:#ce93d8">${m}</span>`)
  )

  safe = safe.replace(/\b(\d+(?:\.\d+)?)\b/g, (m) =>
    ph(`<span style="color:#f48fb1">${m}</span>`)
  )

  safe = safe.replace(
    /(&lt;\/?)\s*([A-Z]\w*)/g,
    (_, tag, name) =>
      `${tag}${ph(`<span style="color:#82b1ff">${name}</span>`)}`
  )

  safe = safe.replace(/\b([a-z]\w*)(?=\s*[=:])/g, (m) =>
    ph(`<span style="color:#80cbc4">${m}</span>`)
  )

  safe = safe.replace(/(\{|\})/g, (m) =>
    ph(`<span style="color:#ffd54f">${m}</span>`)
  )

  safe = safe.replace(/\x00P(\d+)\x00/g, (_, i) => placeholders[parseInt(i)])

  return safe
}

const SUGGESTIONS = [
  { name: 'alt', snippet: 'alt=""', type: 'string' },
  { name: 'src', snippet: 'src="./"', type: 'string' },
  {
    name: 'hasFrame',
    snippet: 'hasFrame={true}',
    type: 'boolean',
    defaultValue: 'true'
  },
  {
    name: 'frameSize',
    snippet: 'frameSize="md"',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'"
  },
  {
    name: 'hasGlintEffect',
    snippet: 'hasGlintEffect={true}',
    type: 'boolean',
    defaultValue: 'false'
  },
  {
    name: 'followCursor',
    snippet: 'followCursor={true}',
    type: 'boolean',
    defaultValue: 'false'
  },
  {
    name: 'onClick',
    snippet: 'onClick={() => alert("Clicked!")}',
    type: '() => void'
  },
  {
    name: 'styles',
    snippet: 'styles={{ height: "600px" }}',
    type: 'PosterStyles'
  }
]

function EditorTitleBar({ isMac, copied, handleCopy }) {
  return (
    <div className="flex items-center gap-2 bg-[#13141c] px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <span className="ml-2 font-mono text-xs text-[#a9b1d6]">example.tsx</span>
      <button
        type="button"
        className="group ml-auto flex cursor-pointer items-center gap-2 bg-transparent border-0 p-0"
        onClick={handleCopy}
        aria-label="Copy code"
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
      </button>
    </div>
  )
}

function AutocompleteDropdown({ autocomplete, applySuggestion }) {
  return (
    <AnimatePresence>
      {autocomplete && (
        <motion.div
          role="listbox"
          aria-label="Autocomplete suggestions"
          initial={{ opacity: 0, y: -4, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.97 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          style={{ top: autocomplete.top, left: autocomplete.left }}
          className="absolute z-50 max-w-xs min-w-52 overflow-hidden rounded-md border border-white/10 bg-[#13141c] shadow-2xl"
        >
          {autocomplete.suggestions.map((s, i) => {
            const active = i === autocomplete.index
            return (
              <div
                key={s.name}
                role="option"
                aria-selected={active}
                tabIndex={-1}
                className={`flex cursor-pointer items-baseline gap-1.5 px-3 py-1.5 font-mono text-xs ${
                  active ? 'bg-white/10' : 'text-[#a9b1d6] hover:bg-white/5'
                }`}
                onMouseDown={(e) => {
                  e.preventDefault()
                  applySuggestion(s)
                }}
              >
                <span
                  className="shrink-0 text-[10px]"
                  style={{ color: active ? '#80cbc480' : '#7aa2f7' }}
                >
                  prop
                </span>
                <span
                  className="font-semibold"
                  style={{ color: active ? '#80cbc4' : '#a9b1d6' }}
                >
                  {s.name}
                  {s.defaultValue && (
                    <span
                      style={{
                        color: active ? '#80cbc4b3' : '#565a6e'
                      }}
                    >
                      ?
                    </span>
                  )}
                </span>
                <span
                  className="text-[10px]"
                  style={{ color: active ? '#80cbc480' : '#565a6e' }}
                >
                  : {s.type}
                </span>
                {s.defaultValue && (
                  <span
                    className="text-[10px]"
                    style={{ color: active ? '#80cbc466' : '#565a6e' }}
                  >
                    = {s.defaultValue}
                  </span>
                )}
              </div>
            )
          })}
          <div className="border-t border-white/5 px-3 py-1 font-mono text-[10px] text-[#565a6e]">
            {'↑↓'} navigate &middot; {'↵'} insert &middot; esc close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Showroom() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [props, setProps] = useState(DEFAULT_PROPS)
  const [copied, setCopied] = useState(false)
  const [resetting, setResetting] = useState(false)
  const [autocomplete, setAutocomplete] = useState(null)
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
      setAutocomplete(null)
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

  function computeAutocomplete(value, cursor) {
    const before = value.slice(0, cursor)
    const match = before.match(/\n[ \t]+([a-zA-Z]\w*)$/)
    if (!match) {
      setAutocomplete(null)
      return
    }
    const typed = match[1]
    const usedProps = new Set(
      SUGGESTIONS.filter((s) => code.includes(s.name + '=')).map((s) => s.name)
    )
    const filtered = SUGGESTIONS.filter(
      (s) =>
        s.name.toLowerCase().startsWith(typed.toLowerCase()) &&
        s.name !== typed &&
        !usedProps.has(s.name)
    ).slice(0, 6)
    if (!filtered.length) {
      setAutocomplete(null)
      return
    }
    const ta = textareaRef.current
    const pre = preRef.current
    if (!ta || !pre) return
    const lines = before.split('\n')
    const lineIndex = lines.length - 1
    const colIndex = lines[lineIndex].length
    const preStyle = window.getComputedStyle(pre)
    const fontSize = parseFloat(preStyle.fontSize) || 12
    const paddingLeft = parseFloat(preStyle.paddingLeft) || 32
    const charWidth = fontSize * 0.601
    const lineEl = pre.querySelector(`[data-line="${lineIndex + 1}"]`)
    const top = lineEl
      ? lineEl.offsetTop + lineEl.offsetHeight - ta.scrollTop
      : parseFloat(preStyle.paddingTop || '12') +
        (lineIndex + 1) * (parseFloat(preStyle.lineHeight) || 20) -
        ta.scrollTop
    const left = paddingLeft + (colIndex - typed.length) * charWidth
    setAutocomplete({ suggestions: filtered, index: 0, top, left })
  }

  function applySuggestion(suggestion) {
    const ta = textareaRef.current
    if (!ta) return
    const cursor = ta.selectionStart
    const before = code.slice(0, cursor)
    const after = code.slice(cursor)
    const match = before.match(/([a-zA-Z]\w*)$/)
    if (!match) return
    const typedLen = match[1].length
    const newCode = before.slice(0, -typedLen) + suggestion.snippet + after
    const newCursor = cursor - typedLen + suggestion.snippet.length
    setCode(newCode)
    setProps((prev) => parseProps(newCode, prev))
    setAutocomplete(null)
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = newCursor
      ta.focus()
    })
  }

  const handleChange = (e) => {
    const ta = e.target
    const value = ta.value
    const cursor = ta.selectionStart
    setCode(value)
    setProps((prev) => parseProps(value, prev))
    computeAutocomplete(value, cursor)
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = cursor
    })
  }

  const handleKeyDown = (e) => {
    if (autocomplete) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setAutocomplete((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.suggestions.length }
            : null
        )
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setAutocomplete((prev) =>
          prev
            ? {
                ...prev,
                index:
                  (prev.index - 1 + prev.suggestions.length) %
                  prev.suggestions.length
              }
            : null
        )
        return
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault()
        applySuggestion(autocomplete.suggestions[autocomplete.index])
        return
      }
      if (e.key === 'Escape') {
        setAutocomplete(null)
        return
      }
    }
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
    setAutocomplete(null)
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
          <EditorTitleBar
            isMac={isMac}
            copied={copied}
            handleCopy={handleCopy}
          />

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
              aria-label="Code editor"
              className="absolute inset-0 w-full resize-none bg-transparent py-3 pr-3 pl-8 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words text-transparent caret-white focus:outline-none md:py-4 md:pr-4 md:pl-10 md:text-sm"
              value={code}
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              onScroll={handleScroll}
              spellCheck={false}
            />

            <AutocompleteDropdown
              autocomplete={autocomplete}
              applySuggestion={applySuggestion}
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
          followCursor={props.followCursor}
          onClick={props.onClick}
          styles={props.styles}
        />
      </div>
    </div>
  )
}
