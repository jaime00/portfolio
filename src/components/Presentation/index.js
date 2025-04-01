import { useEffect } from 'react';
import image_profile from '../../assets/images/profile_image.jpg';
import terminalText from '../../utils/terminalText';
import workIcon from '../../assets/icons/code-gray.png';

export default function Presentation() {
  useEffect(() => {
    terminalText(['React JS.', 'Next JS.', 'Svelte. ', 'Stencil JS.', 'Typescript.', 'Web Components.'], 'text');
  }, []);
  return (
    <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6 mb-5">
      <div className='col-span-5 mx-2'>
        <p className="text-gray-400 text-lg font-medium mb-5 text-left flex gap-3 items-center">
          <img className="w-[22px] h-[22px]" src={workIcon} alt="workIcon" /> Over 5 years of experience in web development
        </p>
        <div className='flex flex-col gap-2'>
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl md:order-1 sm:text-5xl">
            I'm <span className="text-teal-300">Jaime</span>
          </h2>
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
            I'm a{" "}
            <span className="text-teal-300"> Frontend Developer</span>
          </h2>
          <h2 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
             specialized in{" "}
            <div className='console-container inline-block text-teal-300'>
              <span id='text'></span>
            </div>
          </h2>
        </div>
      </div>
      <div className="mx-auto order-1 hidden md:block">
        <span>
          <img
            lazy="true"
            alt="Jaime Torres"
            src={image_profile}
            className="col-span-1 rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-110 hover:-rotate-1 hover:-translate-y-2"
          />
        </span>
      </div>
    </div>
  );
}
