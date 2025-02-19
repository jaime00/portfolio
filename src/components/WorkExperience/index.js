import Button from '../../components/Button'
import { getCurriculumUrl, getWorkExperience } from '../../services'

export default function WorkExperience() {
	const experiences = getWorkExperience()
	const url = getCurriculumUrl()
	return (
		<div className="mt-6 space-y-6 text-xl text-gray-600 dark:text-gray-300">
			<h2 className="text-gray-900 dark:text-white text-3xl font-bold">Work experience</h2>
			<p>Here's a brief rundown of my most recent experiences.</p>
			<div className="space-y-2 text-xs md:text-sm">
				{experiences.map(({ company, position, year_initial, year_end }, i) => (
					<div className="flex items-center space-x-1 group flex-none truncate" key={i}>
						<span className="flex-none text-gray-700 gover-hover:underline dark:text-white font-normal text-lg">{company}</span>
						<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
						<span className="flex-none">{position}</span>
						<span className="flex-none truncate">
							({year_initial} - {year_end})
						</span>
					</div>
				))}
			</div>
			<div className='flex gap-2 mt-4'>
				<Button to='/experiences'>Learn more</Button>
				<Button openUrl={url} isDark={false}>View my resume</Button>
			</div>
		</div>
	)
}
