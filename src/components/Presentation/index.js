import { FolderCodeIcon } from '../../assets/animatedIcons/FolderCode'
import image_profile from '../../assets/images/personGPT5.png'
import terminalText from '../../utils/terminalText'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../i18n'

export default function Presentation({ isDark }) {
  const { t } = useTranslation()
  const targetYears = 6
  const [count, setCount] = useState(1)

  useEffect(() => {
    const duration = 1200
    const steps = targetYears
    const interval = duration / steps
    let current = 1
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= targetYears) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [])

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
          <span className="inline-flex text-gray-400 transition-all duration-300 hover:rotate-12 hover:scale-125 hover:text-teal-500 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
            <FolderCodeIcon size={22} />
          </span>
          <span>
            {t('home.yearsExperienceBefore')}{' '}
            <motion.span
              key={count}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="inline font-bold"
            >
              {count}
            </motion.span>{' '}
            {t('home.yearsExperienceAfter')}
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="order-2 text-left text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:order-1 min-445:text-4xl">
            {t('home.iam')} <span className="text-gradient-teal">Jaime</span>
          </h2>
          <h2 className="order-2 text-left text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl md:order-1 min-445:text-4xl">
            {t('home.iam')} {t('home.a')}{' '}
            <span className="text-gradient-teal whitespace-nowrap">
              {t('home.frontendDeveloper')}
            </span>
          </h2>
          <h2 className="order-2 text-left text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl md:order-1 min-445:text-4xl">
            {t('home.specializedIn')}{' '}
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
