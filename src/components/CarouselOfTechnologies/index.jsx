import useDarkMode from '@/contexts/DarkMode'

const BASE_TECHNOLOGIES = [
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587273/projects/portfolio/react.png',
    alt: 'React Logo'
  },
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587272/projects/portfolio/next.png',
    alt: 'Next.js Logo'
  },
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587273/projects/portfolio/svelte.png',
    alt: 'Svelte Logo'
  },
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587274/projects/portfolio/ts.png',
    alt: 'TypeScript Logo'
  },
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587271/projects/portfolio/angular.png',
    alt: 'Angular Logo'
  },
  {
    src: 'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587272/projects/portfolio/js.png',
    alt: 'JavaScript Logo'
  }
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
            className="min-h-[40px] min-w-[40px]"
            src={tech.src}
            alt={tech.alt}
          />
        </div>
      ))}
    </div>
  )
}
