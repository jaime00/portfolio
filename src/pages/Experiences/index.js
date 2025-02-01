import Titles from '../../components/Titles';
import { getExperiences, getWorkExperience } from '../../services';
import RelumeIcon from '../../assets/icons/relume-icon.svg';

export default function Experiences() {
  const experiences = getExperiences();
  const workExperiences = getWorkExperience();
  return (
    <div className="mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
      <Titles
        className="float-left"
        title="Work Experiences"
        subtitle="Key moments in my career"
      />
      <div className="flex flex-col justify-center px-10 gap-16 xxs:py-20 mt-14">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="grid xxs:grid-cols-1 md:grid-cols-2 gap-10 self-center items-center justify-items-center"
          >
            <a href={experience.link} target="_blank" rel="noreferrer">
              <img
                className="col-span-1 rounded-xl hover:scale-[102%] transition duration-500 ease-in-out cursor-pointer"
                src={experience.src}
                alt="ListIcon"
                width={300}
                height={240}
                style={{
                  boxShadow: '0px 4px 6px -2px #00000025, 0px 12px 16px -4px #00000025',
                }}
              />
            </a>
            <div className="col-span-1 self-center flex flex-col gap-2">
              <p class="italic text-gray-400 font-medium">
                {workExperiences[index].year_initial}{' '}
                <span className="text-teal-500">-</span> {workExperiences[index].year_end}
              </p>
              <h3 className="mb-5 text-3xl font-medium">{workExperiences[index].position}</h3>
              {experience.items.map((detail, index) => (
                <div className="flex gap-3" key={index}>
                  <img src={RelumeIcon} alt="" />
                  <p className="text-housplit-blue-color text-sm text-left" key={index}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
