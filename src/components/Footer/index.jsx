import { motion } from 'motion/react'
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.general')}
              </h2>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/"
                    className="link-underline text-gray-800 dark:text-gray-300"
                  >
                    {t('common.home')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="link-underline text-gray-800 dark:text-gray-300"
                  >
                    {t('common.about')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/side-projects"
                    className="link-underline text-gray-800 dark:text-gray-300"
                  >
                    {t('common.projects')}
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.extra')}
              </h2>
              <ul>
                <li className="mb-4">
                  <a
                    href={curriculumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-gray-800 dark:text-gray-300"
                  >
                    {t('footer.resume')}
                  </a>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="link-underline text-gray-800 dark:text-gray-300"
                  >
                    {t('common.contact')}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="flex items-start justify-end">
            <Top />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/jaimetorresv"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/jaime00"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
