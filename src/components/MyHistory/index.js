import image_profile from '../../assets/images/profile_image.jpg'
import Titles from '../../components/Titles'
import { useTranslation } from '../../i18n'

export default function MyHistory() {
  const { t } = useTranslation()
  return (
    <div className="">
      <Titles title={t('about.title')} subtitle={t('about.subtitle')} />
      <section className="text-xl leading-8 text-gray-600 dark:text-gray-300">
        <br />
        <p>
          {t('about.systemsEngineer')}, {t('about.frontend')}.{' '}
          {t('about.yearsExperience')}
        </p>
        <br />
        <p>
          <b>
            <em>{t('home.frontendDeveloper')}</em>
          </b>
          , {t('about.technicalLead')}, {t('about.careerDescription')}
        </p>
        <br />

        <p>{t('about.technologies')}</p>
        <div className="mt-5 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-10">
          <div className="col-span-1 self-center">
            <span className="flex justify-center">
              <span></span>
              <img
                lazy="true"
                data-nimg="responsive"
                alt="Jaime Torres"
                src={image_profile}
                className="col-span-1 rounded-xl transition duration-500 ease-in-out hover:scale-[102%] group-hover:opacity-75"
                decoding="async"
                sizes="100vw"
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
