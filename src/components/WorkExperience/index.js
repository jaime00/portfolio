import Button from '../../components/Button'
import { getCurriculumUrl, getWorkExperience } from '../../services'

export default function WorkExperience() {
	const experiences = getWorkExperience()
	const url = getCurriculumUrl()
	return (
		<div className="mt-6 space-y-6 text-xl text-gray-600 dark:text-gray-300">
			<h2 className="text-gray-900 dark:text-white text-3xl font-bold">Work experience</h2>
			<p>Here's a brief rundown of my most recent experiences.</p>
			<div className="space-y-2">
				{experiences.map(({ company, position, year_initial, year_end }, i) => (
					<div className="flex items-center space-x-3 group" key={i}>
						<span className="flex-none text-gray-900 gover-hover:underline dark:text-white">{company}</span>
						<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
						<span className="flex-none">{position}</span>
						<span className="flex-none">
							({year_initial} - {year_end})
						</span>
					</div>
				))}
			</div>
			<Button openUrl={url}>View my resume</Button>
		</div>
	)
}
