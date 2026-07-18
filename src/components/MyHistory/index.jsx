import useDarkMode from '@/contexts/DarkMode'
import { Poster } from 'smooth-components'

import AnimatedCounter from '@/components/AnimatedCounter'
import { renderRichText } from '@/components/CaseStudy/richText'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

import { getYearsOfExperience } from '@/services'

const image_profile =
  'https://res.cloudinary.com/personal-jaime00/image/upload/v1783718922/projects/portfolio/profile.png'

export default function MyHistory() {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const targetYears = getYearsOfExperience()
  return (
    <div className="">
      <Titles
        title={t('about.title')}
        subtitle={
          <ShinyText
            text={t('about.subtitle')}
            color={isDark ? '#d4d4d4' : '#262626'}
            shineColor={isDark ? '#ffffff' : '#d4d4d4'}
            spread={isDark ? 60 : 120}
            speed={3}
          />
        }
      />
      <section className="text-xl leading-8 text-gray-600 dark:text-gray-300">
        <br />
        <p>
          {t('about.systemsEngineer')}, {t('about.frontend')}.{' '}
          {t('about.yearsExperienceBefore')}{' '}
          <AnimatedCounter target={targetYears} />{' '}
          {t('about.yearsExperienceAfter')}
        </p>
        <br />
        <p>
          <b>
            <em>{t('home.frontendDeveloper')}</em>
          </b>
          , {t('about.technicalLead')}, {t('about.careerDescription')}
        </p>
        <br />

        <p>{renderRichText(t('about.technologies'))}</p>
        <div className="mt-5 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-10">
          <div className="col-span-1 self-center">
            <Poster
              alt="Jaime Torres"
              src={image_profile}
              hasGlintEffect={true}
              frameSize="sm"
              styles={{ minWidth: '250px', minHeight: '250px' }}
            />
          </div>
          <div className="col-span-3">
            <p className="mt-7">{t('about.skills')}</p>
            <br />
            <p>{renderRichText(t('about.findMe'))}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
