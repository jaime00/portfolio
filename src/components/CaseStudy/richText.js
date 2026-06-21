// Renders inline `code` spans (backticks) and **bold** spans inside
// case-study text.
export function renderRichText(text) {
  if (!text) return text

  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
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
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}
