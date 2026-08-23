import {
  EASE_OUT_EXPO,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  staggerItemVariants
} from '@/animations'
import { m } from 'motion/react'
import { useRef, useState } from 'react'

import { ExternalLinkIcon } from '@/assets/animatedIcons/ExternalLinkIcon'

import Button from '@/components/Button'

import { useTranslation } from '@/i18n'

import { getCurriculumUrl, getWorkExperience } from '@/services'

export default function WorkExperience() {
  const { t, language } = useTranslation()
  const experiences = getWorkExperience({ lang: language })
  const url = getCurriculumUrl(language)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const externalIconRef = useRef(null)
  return (
    <div className="mt-6 space-y-6 text-xl text-gray-700 dark:text-gray-300">
      <m.h2
        className="text-3xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        {t('home.workExperience')}
      </m.h2>
      <m.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        {t('home.workExperienceSubtitle')}
      </m.p>
      <m.div
        key={language}
        className="space-y-2 text-xs md:text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainerVariants}
      >
        {experiences.map(
          ({ company, logo, position, year_initial, year_end }, i) => (
            <m.div
              key={`${company}-${year_initial}`}
              className={`group flex flex-none items-center space-x-1 truncate transition-opacity duration-200 ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40' : 'opacity-100'}`}
              variants={staggerItemVariants}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={logo}
                alt={company}
                className="size-6 flex-none rounded-md object-cover"
                loading="lazy"
              />
              <span className="flex-none text-lg font-normal text-gray-800 dark:text-white">
                {company}
              </span>
              <span className="relative w-full shrink">
                <m.span
                  className="block border-t border-dashed border-gray-300 dark:border-gray-700"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.08,
                    ease: EASE_OUT_EXPO
                  }}
                  style={{ originX: 0 }}
                />
                <m.span
                  className="absolute inset-0 block border-t border-dashed border-teal-500 dark:border-teal-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  style={{ originX: 0 }}
                />
              </span>
              <span className="flex-none">{position}</span>
              <span className="flex-none truncate">
                ({year_initial} - {year_end})
              </span>
            </m.div>
          )
        )}
      </m.div>
      <div
        className="mt-4 flex gap-2"
        onMouseEnter={() => externalIconRef.current?.startAnimation()}
        onMouseLeave={() => externalIconRef.current?.stopAnimation()}
      >
        <Button
          openUrl={url}
          isDark={false}
          className="flex items-center gap-2"
        >
          <ExternalLinkIcon ref={externalIconRef} size={18} />
          {t('home.viewResume')}
        </Button>
      </div>
    </div>
  )
}
