// Estimates reading time (in minutes) from a case study's sections.
// Average adult reading speed is ~200 words per minute.
const WORDS_PER_MINUTE = 200

function countWords(text) {
  if (!text) return 0
  // Drop markdown markers (`code`, **bold**) and newlines before counting.
  const clean = text.replace(/[`*]/g, ' ')
  return clean.trim().split(/\s+/).filter(Boolean).length
}

export function getReadingTime(sections = []) {
  let words = 0

  for (const section of sections) {
    words += countWords(section.title)
    words += countWords(section.text)
    words += countWords(section.footer)

    if (Array.isArray(section.items)) {
      for (const item of section.items) {
        words += countWords(item)
      }
    }

    if (Array.isArray(section.commands)) {
      for (const cmd of section.commands) {
        words += countWords(cmd.name)
        words += countWords(cmd.command)
        words += countWords(cmd.description)
      }
    }
  }

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
