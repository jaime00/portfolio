import { useEffect } from 'react';
import image_profile from '../../assets/images/profile_image.jpeg';
import terminalText from '../../utils/terminalText';

export default function Presentation() {
  useEffect(() => {
    terminalText(['React JS.', 'Next JS.', 'Stencil JS.', 'Typescript.', 'Web Components.'], 'text');
  }, []);
  return (
    <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6 mb-5">
      <div className='col-span-5 mx-2'>
        <p className="text-gray-400 text-lg font-medium mb-5 text-left">
          +5 years of experience in web development
        </p>
        <h1 className="text-left order-2 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
          I'm <span className="text-teal-400 dark:text-teal-300">Jaime</span>. I'm a
          <span className="text-teal-400 dark:text-teal-300"> Frontend</span> Developer specialized in{" "}
          <div className='console-container inline-block text-teal-400 dark:text-teal-300'>
            <span id='text'></span>
          </div>
        </h1>
      </div>
      <div className="mx-auto order-1 hidden md:block">
        <span>
          <img
            loading="lazy"
            alt="Jaime Torres"
            src={image_profile}
            className="col-span-1 rounded-full opacity-100"
          />
        </span>
      </div>
    </div>
  );
}
