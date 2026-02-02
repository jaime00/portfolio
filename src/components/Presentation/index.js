import workIcon from '../../assets/icons/code-gray.png'
import image_profile from '../../assets/images/personGPT5.png'
import terminalText from '../../utils/terminalText'
import { useEffect } from 'react'

export default function Presentation({ isDark }) {
  useEffect(() => {
    terminalText(
      [
        'React JS.',
        'Next JS.',
        'Svelte. ',
        'Stencil JS.',
        'Typescript.',
        'Web Components.'
      ],
      'text'
    )
  }, [])
  return (
    <div className="relative mt-12 mb-5 grid grid-cols-1 items-center text-center md:mt-24 md:grid-cols-6 md:text-left">
      <div className="col-span-5 mx-2">
        <p className="mb-5 flex items-center gap-3 text-left text-lg font-medium text-gray-400">
          <img className="h-[22px] w-[22px]" src={workIcon} alt="workIcon" />{' '}
          Over 5 years of experience in web development
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="order-2 text-left text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:order-1">
            I'm <span className="text-gradient-teal">Jaime</span>
          </h2>
          <h2 className="order-2 text-left text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl md:order-1">
            I'm a{' '}
            <span className="text-gradient-teal"> Frontend Developer</span>
          </h2>
          <h2 className="order-2 text-left text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl md:order-1">
            specialized in{' '}
            <div
              className={`console-container text-gradient-teal inline-block`}
            >
              <span id="text"></span>
            </div>
          </h2>
        </div>
      </div>

      <div className="mask-image pointer-events-none absolute bottom-[60px] top-0 right-0 z-[4] h-[415px] select-none justify-end opacity-0 transition-opacity duration-700 ease-in-out min-1045:opacity-100">
        <img
          width="310"
          height="415"
          alt="Jaime Torres"
          src={image_profile || '/placeholder.svg'}
          className="col-span-1 h-0 w-auto min-1045:h-[415px]"
        />
      </div>
    </div>
  )
}
