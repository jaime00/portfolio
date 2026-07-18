import DataSite from '@/data/dataSite.json'

const getProjects = ({ limit, lang = 'en' } = { limit: null, lang: 'en' }) => {
  const projects = DataSite.projects[lang] || DataSite.projects.en
  if (limit && limit > 0) {
    return projects.slice(0, limit)
  } else {
    return projects
  }
}

const getWorkExperience = (
  { limit, lang = 'en' } = { limit: null, lang: 'en' }
) => {
  const workExp = DataSite.work_experience[lang] || DataSite.work_experience.en
  if (limit && limit > 0) {
    return workExp.slice(0, limit)
  } else {
    return workExp
  }
}

const getExperiences = (lang = 'en') =>
  DataSite.experiences[lang] || DataSite.experiences.en

const getCurriculumUrl = (lang = 'en') =>
  DataSite.curriculum_url[lang] || DataSite.curriculum_url.en

const parseMonthYear = (dateStr) => {
  if (dateStr === 'Now') return new Date()

  const parts = dateStr.trim().split(' ')
  const monthName = parts[0]
  const year = parseInt(parts[1], 10)

  const tempDate = new Date(`${monthName} 1, 2000`)
  const monthIndex = tempDate.getMonth()

  return new Date(year, monthIndex, 1)
}

const getYearsOfExperience = () => {
  // Always use .en because parseMonthYear relies on English month names (e.g. "January 2020")
  const jobs = DataSite.work_experience.en
  const intervals = jobs.map((job) => {
    const start = parseMonthYear(job.year_initial)
    const end = parseMonthYear(job.year_end)
    return { start, end }
  })

  intervals.sort((a, b) => a.start - b.start)

  const merged = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1]
    if (intervals[i].start <= last.end) {
      last.end = new Date(Math.max(last.end, intervals[i].end))
    } else {
      merged.push(intervals[i])
    }
  }

  const totalMonths = merged.reduce((sum, { start, end }) => {
    return (
      sum +
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())
    )
  }, 0)

  return Math.floor(totalMonths / 12)
}

const GRADIENT_CLASSES =
  'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/25 hover:brightness-105 dark:from-teal-400 dark:to-emerald-400 dark:shadow-teal-400/10 dark:text-gray-900'
const NEUTRAL_CLASSES =
  'bg-gray-200 text-gray-900 hover:ring-4 hover:ring-teal-500/30 dark:bg-gray-900 dark:text-white dark:hover:ring-teal-400/30'

const getStyleButton = ({ isDark, size } = {}) => {
  const base =
    size === 'icon'
      ? 'flex h-[65px] w-[65px] items-center justify-center rounded-full p-[15px] font-medium text-sm transition-all'
      : 'inline-flex py-3 px-8 md:px-12 rounded-full whitespace-nowrap items-center justify-center font-medium text-center transition-all'
  return `${base} ${isDark ? GRADIENT_CLASSES : NEUTRAL_CLASSES}`
}

const getProjectBySlug = (slug, lang = 'en') => {
  const projects = DataSite.projects[lang] || DataSite.projects.en
  return projects.find((p) => p.slug === slug) || null
}

const getAdjacentProjects = (slug, lang = 'en') => {
  const projects = DataSite.projects[lang] || DataSite.projects.en
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0]
  }
}

const getPlaylist = () => DataSite.playlist

export {
  getProjects,
  getExperiences,
  getWorkExperience,
  getCurriculumUrl,
  getStyleButton,
  getYearsOfExperience,
  getProjectBySlug,
  getAdjacentProjects,
  getPlaylist
}
