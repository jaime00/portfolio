import DataSite from '../data/dataSite.json'

const getProjects = ({ limit } = { limit: null }) => {
	if (limit && limit > 0) {
		return DataSite.projects.slice(0, limit)
	} else {
		return DataSite.projects
	}
}

const getWorkExperience = ({ limit } = { limit: null }) => {
	if (limit && limit > 0) {
		return DataSite.work_experience.slice(0, limit)
	} else {
		return DataSite.work_experience
	}
}

const getStudyExperience = ({ limit } = { limit: null }) => {
	if (limit && limit > 0) {
		return DataSite.study_experience.slice(0, limit)
	} else {
		return DataSite.study_experience
	}
}

const getCurriculumUrl = () => DataSite.curriculum_url

const getStyleButton = ({ isDark }) => {
	let classes = `bg-gray-900 text-sm md:text-xl md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full text-white dark:bg-gray-200 dark:text-midnight items-center justify-center 
    hover:ring-4 hover:ring-gray-300 font-medium text-center mr-2 mb-2 dark:hover:ring-teal-500 dark:text-gray-900`
	if (!isDark)
		classes = `text-sm md:text-xl md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full bg-gray-200 dark:bg-gray-900 text-midnight dark:text-white items-center justify-center font-medium
    hover:ring-4 hover:ring-gray-700`
	return classes
}

export { getProjects, getWorkExperience, getStudyExperience, getCurriculumUrl, getStyleButton }
