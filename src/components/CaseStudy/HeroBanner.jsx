import { EASE_OUT_EXPO as ease } from '@/animations'
import useDarkMode from '@/contexts/DarkMode'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { BundlephobiaWidget } from 'smooth-components'
import { Link } from 'wouter'

import { ArrowSquareRightIcon } from '@/assets/animatedIcons/ArrowSquareRightIcon'
import { ChevronLeftIcon } from '@/assets/animatedIcons/BackIcon'
import { BoxIcon } from '@/assets/animatedIcons/BoxIcon'
import { CartIcon } from '@/assets/animatedIcons/CartIcon'
import { ClapIcon } from '@/assets/animatedIcons/ClapIcon'
import { EyeIcon } from '@/assets/animatedIcons/EyeIcon'
import { GitMergeIcon } from '@/assets/animatedIcons/GitMergeIcon'

import ShinyText from '@/components/ShinyText'

import { useTranslation } from '@/i18n'

import { getReadingTime } from './readingTime'

const SLUG_ICONS = {
  'cinepolis-web': ClapIcon,
  'smooth-components': BoxIcon,
  negos: CartIcon,
  'eazy-git': GitMergeIcon
}

export default function HeroBanner({ project }) {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const arrowRef = useRef(null)
  const backRef = useRef(null)
  const eyeRef = useRef(null)
  const SlugIcon = SLUG_ICONS[project.slug]
  const { title, description, img, stack, caseStudy, urlPreview, urlCode } =
    project
  const lastHighlights =
    caseStudy.sections[caseStudy.sections.length - 1]?.highlights
  const readingTime = getReadingTime(caseStudy.sections)

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Link
          to="/side-projects"
          className="mb-3 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400"
          onMouseEnter={() => backRef.current?.startAnimation()}
          onMouseLeave={() => backRef.current?.stopAnimation()}
        >
          <ChevronLeftIcon ref={backRef} size={18} />
          {t('projectDetail.backToProjects')}
        </Link>
      </motion.div>

      <motion.div
        className="mb-6 flex flex-wrap items-end gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div>
          <h1 className="font-sans text-4xl font-bold md:text-5xl min-1045:text-6xl">
            <ShinyText
              text={title}
              color={isDark ? '#d4d4d4' : '#262626'}
              shineColor={isDark ? '#ffffff' : '#d4d4d4'}
              spread={isDark ? 60 : 120}
              speed={3}
            />
          </h1>
        </div>

        <div
          className="flex shrink-0 items-center gap-2 pb-1 text-sm text-gray-500 dark:text-gray-400"
          onMouseEnter={() => eyeRef.current?.startAnimation()}
          onMouseLeave={() => eyeRef.current?.stopAnimation()}
        >
          <EyeIcon ref={eyeRef} size={18} />
          <span className="whitespace-nowrap">
            {readingTime} {t('projectDetail.readingTime')}
          </span>
        </div>
      </motion.div>

      <div className="grid gap-4 min-1045:grid-cols-3">
        <motion.div
          className="group relative min-1045:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <motion.div
            className="relative h-full overflow-hidden rounded-2xl shadow-lg"
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.img
              src={img}
              alt={title}
              className={`${project.slug === 'smooth-components' ? 'object-cover' : ''} ${project.slug === 'eazy-git' ? 'object-cover object-left' : ''} min-1045:aspect-auto min-1045:h-full min-1045:min-h-[480px]`}
              loading="eager"
            />
            {urlPreview && (
              <a
                href={urlPreview}
                target="_blank"
                rel="noreferrer"
                aria-label={t('projectDetail.viewLive')}
                className="absolute bottom-10 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-white"
                onMouseEnter={() => arrowRef.current?.startAnimation()}
                onMouseLeave={() => arrowRef.current?.stopAnimation()}
              >
                <ArrowSquareRightIcon ref={arrowRef} size={22} />
              </a>
            )}
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            className="relative rounded-3xl bg-gray-100 p-6 shadow-lg dark:bg-gray-900 min-445:p-8"
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {SlugIcon && (
              <SlugIcon
                size={80}
                autoAnimate
                className="absolute -right-5 -top-10 z-10 text-gray-400 dark:text-gray-500"
              />
            )}
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
              {description}
            </p>

            {stack?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-500/20 dark:from-teal-400 dark:to-emerald-400 dark:text-gray-900 dark:shadow-teal-400/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <dl className="mt-6 space-y-3 border-t border-gray-200 pt-5 dark:border-gray-800">
              {caseStudy.role && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {t('projectDetail.role')}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {caseStudy.role}
                  </dd>
                </div>
              )}
              {caseStudy.duration && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {t('projectDetail.duration')}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {caseStudy.duration}
                  </dd>
                </div>
              )}
              {caseStudy.team && (
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {t('projectDetail.team')}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {caseStudy.team}
                  </dd>
                </div>
              )}
            </dl>

            {urlCode && (
              <a
                href={urlCode}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {t('projectDetail.viewCode')}
              </a>
            )}
          </motion.div>

          {project.slug === 'smooth-components' ? (
            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <BundlephobiaWidget
                pkg="smooth-components@1.1.18"
                isDarkMode={isDark}
                size="sm"
                repository="https://github.com/jaime00/smooth-components"
              />
            </motion.div>
          ) : project.slug === 'eazy-git' ? (
            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <BundlephobiaWidget
                pkg="eazy-git@0.2.3"
                isDarkMode={isDark}
                size="sm"
              />
            </motion.div>
          ) : (
            lastHighlights && (
              <motion.div
                className="flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 shadow-lg dark:from-teal-400/10 dark:to-emerald-400/10"
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="grid grid-cols-2 gap-4 min-1045:grid-cols-1">
                  {lastHighlights.map((h, i) => (
                    <div key={i} className="min-1045:text-center">
                      <span className="text-gradient-teal text-3xl font-bold">
                        {h.value}
                      </span>
                      <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
