const CUSTOM_FAVICONS = {
  'smooth-components.netlify.app':
    'https://res.cloudinary.com/personal-jaime00/image/upload/v1782770148/projects/smooth-components/favicon_otcbmz.ico',
  'posteritati.com': 'https://a.favicon.im/posteritati.com?larger=true'
}

// Renders inline `code` spans (backticks) and **bold** spans inside
// case-study text.
export function renderRichText(text) {
  if (!text) return text

  return text
    .split(/(`[^`]+`|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={i}
            className="whitespace-nowrap rounded bg-teal-500/10 px-1.5 py-0.5 font-mono text-[0.9em] text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
          >
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('***') && part.endsWith('***')) {
        return (
          <strong key={i} className="font-bold italic">
            {part.slice(3, -3)}
          </strong>
        )
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={i}
            className="font-semibold text-gray-900 dark:text-white"
          >
            {part.slice(2, -2)}
          </strong>
        )
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (linkMatch) {
        const label = linkMatch[1].replace(/^\*\*(.+)\*\*$/, '$1')
        const isBold = linkMatch[1] !== label
        const url = linkMatch[2]
        let faviconUrl = null
        try {
          const domain = new URL(url).hostname
          if (domain in CUSTOM_FAVICONS) {
            faviconUrl = CUSTOM_FAVICONS[domain]
          } else {
            faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
          }
        } catch {}
        const link = (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 text-teal-600 underline decoration-teal-600/30 underline-offset-2 hover:decoration-teal-600 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:decoration-teal-400"
          >
            {faviconUrl && (
              <img
                src={faviconUrl}
                alt=""
                width={16}
                height={16}
                className="inline-block shrink-0"
                loading="lazy"
              />
            )}
            {label}
          </a>
        )
        return isBold ? (
          <strong
            key={i}
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
