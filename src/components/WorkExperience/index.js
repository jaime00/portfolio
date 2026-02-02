import Button from '../../components/Button'
import { getCurriculumUrl, getWorkExperience } from '../../services'

export default function WorkExperience() {
  const experiences = getWorkExperience()
  const url = getCurriculumUrl()
  return (
    <div className="mt-6 space-y-6 text-xl text-gray-600 dark:text-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Work experience
      </h2>
      <p>Here's a brief rundown of my most recent experiences.</p>
      <div className="space-y-2 text-xs md:text-sm">
        {experiences.map(({ company, position, year_initial, year_end }, i) => (
          <div
            className="group flex flex-none items-center space-x-1 truncate"
            key={i}
          >
            <span className="gover-hover:underline flex-none text-lg font-normal text-gray-700 dark:text-white">
              {company}
            </span>
            <span className="w-full shrink border-t border-dashed border-gray-300 dark:border-gray-700"></span>
            <span className="flex-none">{position}</span>
            <span className="flex-none truncate">
              ({year_initial} - {year_end})
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Button to="/experiences">Learn more</Button>
        <Button openUrl={url} isDark={false}>
          View my resume
        </Button>
      </div>
    </div>
  )
}
