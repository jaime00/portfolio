import AnimatedCounter from '@/components/AnimatedCounter'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

import { getYearsOfExperience } from '@/services'

const image_profile =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597546/projects/portfolio/profile_image.jpg'

export default function MyHistory() {
  const { t } = useTranslation()
  const targetYears = getYearsOfExperience()
  return (
    <div className="">
      <Titles title={t('about.title')} subtitle={t('about.subtitle')} />
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

        <p dangerouslySetInnerHTML={{ __html: t('about.technologies') }} />
        <div className="mt-5 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-10">
          <div className="col-span-1 self-center">
            <span className="flex justify-center">
              <span></span>
              <img
                loading="lazy"
                width={300}
                height={300}
                alt="Jaime Torres"
                src={image_profile}
                className="col-span-1 rounded-xl transition duration-500 ease-in-out hover:scale-[102%] group-hover:opacity-75"
                decoding="async"
              />
            </span>
          </div>
          <div className="col-span-3">
            <p className="mt-7">{t('about.skills')}</p>
            <br />
            <p>
              {t('about.findMe')}{' '}
              <b>
                <a
                  href="https://linkedin.com/in/jaimetorresv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-current underline-offset-2 transition-opacity hover:opacity-70"
                >
                  {t('about.linkedin')}
                </a>
              </b>{' '}
              {t('about.openSource')}{' '}
              <b>
                <a
                  href="https://github.com/jaime00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-current underline-offset-2 transition-opacity hover:opacity-70"
                >
                  {t('about.github')}
                </a>
              </b>{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
