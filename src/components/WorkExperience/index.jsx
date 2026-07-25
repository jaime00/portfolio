import {
  EASE_OUT_EXPO,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  staggerItemVariants
} from '@/animations'
import { motion } from 'motion/react'
import { useState } from 'react'

import Button from '@/components/Button'

import { useTranslation } from '@/i18n'

import { getCurriculumUrl, getWorkExperience } from '@/services'

export default function WorkExperience() {
  const { t, language } = useTranslation()
  const experiences = getWorkExperience({ lang: language })
  const url = getCurriculumUrl(language)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="mt-6 space-y-6 text-xl text-gray-700 dark:text-gray-300">
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        {t('home.workExperience')}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        {t('home.workExperienceSubtitle')}
      </motion.p>
      <motion.div
        className="space-y-2 text-xs md:text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={staggerContainerVariants}
      >
        {experiences.map(({ company, position, year_initial, year_end }, i) => (
          <motion.div
            key={i}
            className={`group flex flex-none items-center space-x-1 truncate transition-opacity duration-200 ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40' : 'opacity-100'}`}
            variants={staggerItemVariants}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="flex-none text-lg font-normal text-gray-800 dark:text-white">
              {company}
            </span>
            <span className="relative w-full shrink">
              <motion.span
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
              <motion.span
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
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-4 flex gap-2">
        <Button to="/experiences">{t('home.learnMore')}</Button>
        <Button openUrl={url} isDark={false}>
          {t('home.viewResume')}
        </Button>
      </div>
    </div>
  )
}
