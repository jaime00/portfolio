import DataSite from '../data/dataSite.json'

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

const getStyleButton = ({ isDark }) => {
  const base = `text-sm md:text-xl md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full items-center justify-center font-medium text-center mr-2 transition-all`
  if (isDark)
    return `${base} bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/25 hover:brightness-105 dark:from-teal-400 dark:to-emerald-400 dark:shadow-teal-400/10 dark:text-gray-900`
  return `${base} bg-gray-200 text-gray-900 hover:ring-4 hover:ring-teal-500/30 dark:bg-gray-900 dark:text-white dark:hover:ring-teal-400/30`
}

export {
  getProjects,
  getExperiences,
  getWorkExperience,
  getCurriculumUrl,
  getStyleButton
}
