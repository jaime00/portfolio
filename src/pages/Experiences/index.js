import { motion } from 'motion/react'

import ExperienceDescription from '@/components/ExperienceDescription'
import ExperienceLogo from '@/components/ExperienceLogo'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import useDarkMode from '@/hooks/useDarkMode'

import { useTranslation } from '@/i18n'

import { getExperiences, getWorkExperience } from '@/services'

const ease = [0.16, 1, 0.3, 1]

export default function Experiences() {
  const { t, language } = useTranslation()
  const isDark = useDarkMode()
  const experiences = getExperiences(language)
  const workExperiences = getWorkExperience({ lang: language })
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto mb-5 mt-8 max-w-6xl animate-fade flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800 dark:text-white">
      <Titles
        className="text-center"
        title={t('experiences.title')}
        subtitle={
          <ShinyText
            text={t('experiences.subtitle')}
            color={isDark ? '#d4d4d4' : '#262626'}
            shineColor={isDark ? '#ffffff' : '#d4d4d4'}
            spread={isDark ? 60 : 120}
            speed={3}
          />
        }
      />
      <div className="xxs:py-20 mt-14 flex flex-col justify-center gap-16 px-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="xxs:grid-cols-1 grid items-center justify-items-center gap-10 self-center md:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease }}
          >
            <ExperienceLogo
              link={experience.link}
              src={experience.src}
              isRotate={experience.rotate}
              name={workExperiences[index]?.company}
            />
            <ExperienceDescription
              year_initial={workExperiences[index].year_initial}
              year_end={workExperiences[index].year_end}
              position={workExperiences[index].position}
              items={experience.items}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
