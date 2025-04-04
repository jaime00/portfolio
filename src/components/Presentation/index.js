import { useEffect } from 'react';
// import image_profile from '../../assets/images/profile_image.jpg';
import image_profile from '../../assets/images/personGPT3.png';
import terminalText from '../../utils/terminalText';
import workIcon from '../../assets/icons/code-gray.png';

export default function Presentation({ isDark }) {
  useEffect(() => {
    terminalText(
      [
        'React JS.',
        'Next JS.',
        'Svelte. ',
        'Stencil JS.',
        'Typescript.',
        'Web Components.',
      ],
      'text'
    );
  }, []);
  return (
    <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6 mb-5 relative">
      <div className="col-span-5 mx-2">
        <p className="text-gray-400 text-lg font-medium mb-5 text-left flex gap-3 items-center">
          <img className="w-[22px] h-[22px]" src={workIcon} alt="workIcon" /> Over 5 years
          of experience in web development
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl md:order-1 sm:text-5xl">
            I'm <span className="text-gradient-teal">Jaime</span>
          </h2>
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
            I'm a <span className="text-gradient-teal"> Frontend Developer</span>
          </h2>
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
            specialized in{' '}
            <div className={`console-container inline-block text-gradient-teal`}>
              <span id="text"></span>
            </div>
          </h2>
        </div>
      </div>

      <div className="pointer-events-none select-none z-[4] bottom-[60px] justify-end top-0 right-0 h-[415px] absolute min-1045:opacity-100 opacity-0 transition-opacity duration-700 ease-in-out mask-image">
        <img
          width="310"
          height="415"
          alt="Jaime Torres"
          src={image_profile || '/placeholder.svg'}
          className="col-span-1 w-[310px] min-1045:h-[415px] h-0"
        />
      </div>
    </div>
  );
}
