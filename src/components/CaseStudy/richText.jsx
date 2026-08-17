import { HyperLink } from 'smooth-components'

// Renders inline `code` spans (backticks) and **bold** spans inside
// case-study text. `extraPropsByHref` maps a link href to props that get
// spread onto that link's HyperLink (e.g. previewConfig).
export function renderRichText(text, extraPropsByHref = {}) {
  if (!text) return text

  const parts = text.split(
    /(`[^`]+`|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
  )
  let offset = 0
  return parts.map((part) => {
    const key = offset
    offset += part.length
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className="whitespace-nowrap rounded bg-teal-500/10 px-1.5 py-0.5 font-mono text-[0.9em] text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('***') && part.endsWith('***')) {
      return (
        <strong key={key} className="font-bold italic">
          {part.slice(3, -3)}
        </strong>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong
          key={key}
          className="font-semibold italic text-gray-700 dark:text-gray-200"
        >
          {part.slice(2, -2)}
        </strong>
      )
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const label = linkMatch[1].replace(/^\*\*(.+)\*\*$/, '$1')
      const isBold = linkMatch[1] !== label
      const link = (
        <HyperLink
          key={key}
          href={linkMatch[2]}
          className="ml-1 text-gray-700 dark:text-gray-300"
          styles={{ underscoreColor: 'var(--color-primary)' }}
          {...extraPropsByHref[linkMatch[2]]}
        >
          {label}
        </HyperLink>
      )
      return isBold ? (
        <strong
          key={key}
          className="font-semibold text-gray-900 dark:text-white"
        >
          {link}
        </strong>
      ) : (
        link
      )
    }
    return part
  })
}
