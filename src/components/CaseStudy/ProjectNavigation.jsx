import { EASE_OUT_EXPO as ease } from '@/animations'
import { m } from 'motion/react'
import { Link } from 'wouter'

import { useTranslation } from '@/i18n'

export default function ProjectNavigation({ prev, next }) {
  const { t } = useTranslation()

  return (
    <section className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-700">
      <div className="flex flex-col gap-4 min-445:flex-row min-445:justify-between">
        {prev && (
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              to={`/side-projects/${prev.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-gray-200/80 bg-white/70 px-6 py-4 backdrop-blur-sm transition-[transform,box-shadow] hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/70 dark:hover:shadow-teal-500/10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400 transition-transform group-hover:-translate-x-1"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <div>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {t('projectDetail.previousProject')}
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {prev.title}
                </span>
              </div>
            </Link>
          </m.div>
        )}

        {next && (
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="min-445:ml-auto"
          >
            <Link
              to={`/side-projects/${next.slug}`}
              className="group flex items-center justify-end gap-3 rounded-xl border border-gray-200/80 bg-white/70 px-6 py-4 text-right backdrop-blur-sm transition-[transform,box-shadow] hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/70 dark:hover:shadow-teal-500/10"
            >
              <div>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {t('projectDetail.nextProject')}
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {next.title}
                </span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400 transition-transform group-hover:translate-x-1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </m.div>
        )}
      </div>
    </section>
  )
}
