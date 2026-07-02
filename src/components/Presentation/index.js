import { motion } from 'motion/react'

import { FolderCodeIcon } from '@/assets/animatedIcons/FolderCode'

import AnimatedCounter from '@/components/AnimatedCounter'

import { useTypewriter } from '@/hooks/useTypewriter'

import { useTranslation } from '@/i18n'

import { getYearsOfExperience } from '@/services'

const image_profile =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597482/projects/portfolio/realCharacter.png'

export default function Presentation() {
  const { t } = useTranslation()
  const targetYears = getYearsOfExperience()

  const displayText = useTypewriter([
    'React JS.',
    'Next JS.',
    'Svelte.',
    'Stencil JS.',
    'Typescript.',
    'Web Components.'
  ])

  return (
    <div className="relative mb-5 mt-12 grid grid-cols-1 items-center text-center md:mt-24 md:grid-cols-6 md:text-left">
      <div className="col-span-5 mx-2">
        <p className="mb-5 flex items-center gap-3 text-left text-lg font-medium text-gray-500 dark:text-gray-400">
          <span className="inline-flex text-gray-500 transition-all duration-300 hover:rotate-12 hover:scale-125 hover:text-teal-500 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] dark:text-gray-400">
            <FolderCodeIcon size={22} />
          </span>
          <span>
            {t('home.yearsExperienceBefore')}{' '}
            <AnimatedCounter target={targetYears} />{' '}
            {t('home.yearsExperienceAfter')}
          </span>
        </p>
        <h1 className="flex flex-col gap-2 text-left text-3xl font-extrabold text-gray-900 dark:text-white min-445:text-4xl sm:text-5xl">
          <span>
            {t('home.iam')} <span className="text-gradient-teal">Jaime</span>
          </span>
          <span className="leading-tight">
            {t('home.iam')} {t('home.a')}{' '}
            <span className="text-gradient-teal whitespace-nowrap">
              {t('home.frontendDeveloper')}
            </span>
          </span>
          <span className="leading-tight">
            {t('home.specializedIn')}{' '}
            <span className="text-gradient-teal inline-block">
              <span>
                {displayText.visible}
                <span style={{ visibility: 'hidden' }}>
                  {displayText.hidden}
                </span>
              </span>
            </span>
          </span>
        </h1>
      </div>

      <motion.div
        className="mask-image pointer-events-none absolute bottom-[60px] right-0 top-0 z-[4] h-[415px] select-none justify-end"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          fetchPriority="high"
          alt="Jaime Torres"
          src={image_profile || '/placeholder.svg'}
          className="col-span-1 h-0 w-auto min-1045:h-[415px]"
        />
      </motion.div>
    </div>
  )
}
