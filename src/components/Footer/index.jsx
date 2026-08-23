import { m } from 'motion/react'
import { useRef } from 'react'
import { HyperLink } from 'smooth-components'
import { Link } from 'wouter'

import { ExternalLinkIcon } from '@/assets/animatedIcons/ExternalLinkIcon'

import Top from '@/components/Top'

import { useTranslation } from '@/i18n'

import { getCurriculumUrl } from '@/services'

export default function Footer() {
  const { t, language } = useTranslation()
  const curriculumUrl = getCurriculumUrl(language)
  const externalIconRef = useRef(null)
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex max-w-6xl animate-fade flex-col justify-center p-4 px-4 font-sans sm:p-6">
      <hr className="my-12 dark:border-gray-700" />
      <footer className="">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-20">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.general')}
              </h3>
              <ul>
                <li className="mb-4">
                  <HyperLink
                    as={Link}
                    to="/"
                    className="text-gray-700 dark:text-gray-200"
                    contentClassName="font-normal"
                    showUnderline={false}
                  >
                    {t('common.home')}
                  </HyperLink>
                </li>
                <li className="mb-4">
                  <HyperLink
                    as={Link}
                    to="/about"
                    className="text-gray-700 dark:text-gray-200"
                    contentClassName="font-normal"
                    showUnderline={false}
                  >
                    {t('common.about')}
                  </HyperLink>
                </li>
                <li className="mb-4">
                  <HyperLink
                    as={Link}
                    to="/side-projects"
                    className="text-gray-700 dark:text-gray-200"
                    contentClassName="font-normal"
                    showUnderline={false}
                  >
                    {t('common.projects')}
                  </HyperLink>
                </li>
              </ul>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.extra')}
              </h3>
              <ul>
                <li
                  className="mb-4"
                  onMouseEnter={() => externalIconRef.current?.startAnimation()}
                  onMouseLeave={() => externalIconRef.current?.stopAnimation()}
                >
                  <HyperLink
                    href={curriculumUrl}
                    showIcon={false}
                    className="text-gray-700 dark:text-gray-200"
                    contentClassName="font-normal"
                    showUnderline={false}
                  >
                    <span className="flex items-center gap-1.5">
                      <ExternalLinkIcon ref={externalIconRef} size={16} />
                      {t('footer.resume')}
                    </span>
                  </HyperLink>
                </li>
                <li className="mb-4">
                  <HyperLink
                    as={Link}
                    to="/contact"
                    className="text-gray-700 dark:text-gray-200"
                    contentClassName="font-normal"
                    showUnderline={false}
                  >
                    {t('common.contact')}
                  </HyperLink>
                </li>
              </ul>
            </m.div>
          </div>
          <div className="flex items-start justify-end">
            <Top />
          </div>
        </div>
      </footer>
    </div>
  )
}
