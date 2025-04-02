import reactIcon from '../../assets/icons/react.png';
import angularIcon from '../../assets/icons/angular.png';
import typescriptIcon from '../../assets/icons/ts.png';
import javascriptIcon from '../../assets/icons/js.png';
import nextIcon from '../../assets/icons/next.png';
import svelteIcon from '../../assets/icons/svelte.png';
import React from 'react';

export default function CarouselOfTechnologies({ isDark }) {
  const technologies = [
    { src: reactIcon, alt: 'React Logo' },
    { src: nextIcon, alt: 'Next.js Logo' },
    { src: svelteIcon, alt: 'Svelte Logo' },
    { src: typescriptIcon, alt: 'TypeScript Logo' },
    { src: angularIcon, alt: 'Angular Logo' },
    { src: javascriptIcon, alt: 'JavaScript Logo' },
  ];

  return (
    <div
      className={`select-none pointer-events-none font-lato text-lg leading-6 flex justify-center items-center mx-auto my-6 overflow-hidden rounded-md relative w-2/4 before:left-0 before:bg-gradient-to-r ${
        isDark ? 'before:from-[#1f2a37]' : 'before:from-white'
      } to-transparent before:z-10 before:absolute before:top-0 before:bottom-0 before:w-[190px] after:right-0 after:bg-gradient-to-l ${
        isDark ? 'after:from-[#1f2a37]' : 'after:from-white'
      } to-transparent after:z-10 after:absolute after:top-0 after:bottom-0 after:w-[190px]`}
    >
      {[...Array(25)].flatMap(() =>
        technologies.map((tech, index) => (
          <div key={index} className="animate-carousel-item px-1">
            <img className="min-w-[40px] min-h-[40px]" src={tech.src} alt={tech.alt} />
          </div>
        ))
      )}
    </div>
  );
}
