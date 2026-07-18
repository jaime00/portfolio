import useDarkMode from '@/contexts/DarkMode'

import angularIcon from '@/assets/icons/angular.png'
import javascriptIcon from '@/assets/icons/js.png'
import nextIcon from '@/assets/icons/next.png'
import reactIcon from '@/assets/icons/react.png'
import svelteIcon from '@/assets/icons/svelte.png'
import typescriptIcon from '@/assets/icons/ts.png'

const BASE_TECHNOLOGIES = [
  { src: reactIcon, alt: 'React Logo' },
  { src: nextIcon, alt: 'Next.js Logo' },
  { src: svelteIcon, alt: 'Svelte Logo' },
  { src: typescriptIcon, alt: 'TypeScript Logo' },
  { src: angularIcon, alt: 'Angular Logo' },
  { src: javascriptIcon, alt: 'JavaScript Logo' }
]

// Repeated ×5 to create an infinite-loop carousel
const technologies = Array.from({ length: 5 }).flatMap(() => BASE_TECHNOLOGIES)

export default function CarouselOfTechnologies() {
  const { isDark } = useDarkMode()
  return (
    <div
      className={`font-lato carousel-pause relative mx-auto my-6 flex w-2/4 select-none items-center justify-center overflow-hidden rounded-md text-lg leading-6 before:left-0 before:bg-gradient-to-r ${
        isDark ? 'before:from-[#1f2a37]' : 'before:from-white'
      } to-transparent before:absolute before:bottom-0 before:top-0 before:z-10 before:w-[190px] after:right-0 after:bg-gradient-to-l ${
        isDark ? 'after:from-[#1f2a37]' : 'after:from-white'
      } to-transparent after:absolute after:bottom-0 after:top-0 after:z-10 after:w-[190px]`}
    >
      {technologies.map((tech, index) => (
        <div key={index} className="animate-carousel-item px-1">
          <img
            className="min-h-[40px] min-w-[40px] transition-transform duration-300 hover:-translate-y-1 hover:scale-125"
            src={tech.src}
            alt={tech.alt}
          />
        </div>
      ))}
    </div>
  )
}
