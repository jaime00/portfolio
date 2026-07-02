import { Link } from 'wouter'

import { GithubIcon } from '@/assets/animatedIcons/GithubIcon'
import { LinkedinIcon } from '@/assets/animatedIcons/LinkedinIcon'

import Top from '@/components/Top'

import { useTranslation } from '@/i18n'

import { getCurriculumUrl } from '@/services'

export default function Footer() {
  const { t, language } = useTranslation()
  const curriculumUrl = getCurriculumUrl(language)
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex max-w-6xl animate-fade flex-col justify-center p-4 px-4 font-sans sm:p-6">
      <hr className="my-12 dark:border-gray-700" />
      <footer className="">
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-20">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.general')}
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/"
                    className="text-gray-800 hover:underline dark:text-gray-300"
                  >
                    {t('common.home')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="text-gray-800 hover:underline dark:text-gray-300"
                  >
                    {t('common.about')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/side-projects"
                    className="text-gray-800 hover:underline dark:text-gray-300"
                  >
                    {t('common.projects')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.extra')}
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href={curriculumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 hover:underline dark:text-gray-300"
                  >
                    {t('footer.resume')}
                  </a>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-gray-800 hover:underline dark:text-gray-300"
                  >
                    {t('common.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start justify-end">
            <Top />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-gray-700 dark:text-gray-300">
            {t('footer.copyright')}
          </span>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/jaimetorresv"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <LinkedinIcon />{' '}
            </a>
            <a
              href="https://github.com/jaime00"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
