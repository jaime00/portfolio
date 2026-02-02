import ExperienceDescription from '../../components/ExperienceDescription'
import ExperienceLogo from '../../components/ExperienceLogo'
import Titles from '../../components/Titles'
import { getExperiences, getWorkExperience } from '../../services'

export default function Experiences() {
  const experiences = getExperiences()
  const workExperiences = getWorkExperience()
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative my-5 mx-auto mt-8 max-w-6xl animate-fade flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800 dark:text-white">
      <Titles
        className="text-center"
        title="Work Experiences"
        subtitle="Key moments in my career"
      />
      <div className="xxs:py-20 mt-14 flex flex-col justify-center gap-16 px-10">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="xxs:grid-cols-1 grid items-center justify-items-center gap-10 self-center md:grid-cols-2"
          >
            <ExperienceLogo
              link={experience.link}
              src={experience.src}
              isRotate={experience.rotate}
            />
            <ExperienceDescription
              year_initial={workExperiences[index].year_initial}
              year_end={workExperiences[index].year_end}
              position={workExperiences[index].position}
              items={experience.items}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
