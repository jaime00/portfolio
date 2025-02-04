import Titles from '../../components/Titles';
import { getExperiences, getWorkExperience } from '../../services';
import ExperienceLogo from '../../components/ExperienceLogo';
import ExperienceDescription from '../../components/ExperienceDescription';

export default function Experiences() {
  const experiences = getExperiences();
  const workExperiences = getWorkExperience();
  return (
    <div className="mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
      <Titles
        className="text-center"
        title="Work Experiences"
        subtitle="Key moments in my career"
      />
      <div className="flex flex-col justify-center px-10 gap-16 xxs:py-20 mt-14">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="grid xxs:grid-cols-1 md:grid-cols-2 gap-10 self-center items-center justify-items-center"
          >
            <ExperienceLogo link={experience.link} src={experience.src} />
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
  );
}
