import { EASE_OUT_EXPO as ease } from '@/animations'
import useDarkMode from '@/contexts/DarkMode'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { BundlephobiaWidget } from 'smooth-components'
import { Link } from 'wouter'

import { ArrowSquareRightIcon } from '@/assets/animatedIcons/ArrowSquareRightIcon'
import { ChevronLeftIcon } from '@/assets/animatedIcons/BackIcon'
import { BoxIcon } from '@/assets/animatedIcons/BoxIcon'
import { CartIcon } from '@/assets/animatedIcons/CartIcon'
import { ClapIcon } from '@/assets/animatedIcons/ClapIcon'
import { EyeIcon } from '@/assets/animatedIcons/EyeIcon'
import { GitMergeIcon } from '@/assets/animatedIcons/GitMergeIcon'
import { LinkIcon } from '@/assets/animatedIcons/LinkIcon'

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
  const linkRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(resetTimerRef.current)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true)
        clearTimeout(resetTimerRef.current)
        resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }
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
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
      >
        <div className="flex items-baseline gap-3">
          <h1 className="font-sans text-4xl font-bold md:text-5xl min-1045:text-6xl">
            <ShinyText
              text={title}
              color={isDark ? '#d4d4d4' : '#262626'}
              shineColor={isDark ? '#ffffff' : '#d4d4d4'}
              spread={isDark ? 60 : 120}
              speed={3}
            />
          </h1>
          <span className="relative inline-block">
            <button
              type="button"
              onClick={handleCopyLink}
              onMouseEnter={() => linkRef.current?.startAnimation()}
              onMouseLeave={() => linkRef.current?.stopAnimation()}
              className="shrink-0 text-gray-400 transition-colors hover:text-teal-500 dark:text-gray-500 dark:hover:text-teal-400"
              aria-label="Copy link to project"
            >
              <LinkIcon ref={linkRef} size={22} />
            </button>
            <span
              className={`pointer-events-none absolute top-1/2 left-full ml-2 -translate-y-1/2 transition-all duration-150 ${copied ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
              <span className="relative flex items-center rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="text-xs leading-none font-medium text-white/80">
                  {t('contact.emailCopied')}
                </span>
                <span className="absolute -left-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-white/10 bg-neutral-900" />
              </span>
            </span>
          </span>
        </div>
        <div
          className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
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
          <div className="relative h-full overflow-hidden rounded-2xl shadow-lg">
            {project.slug === 'smooth-components' ? (
              <video
                src={
                  isDark
                    ? 'https://res.cloudinary.com/personal-jaime00/video/upload/v1785377395/projects/portfolio/projects/smooth-components/smooth-components-dark.mov'
                    : 'https://res.cloudinary.com/personal-jaime00/video/upload/v1785377562/projects/portfolio/projects/smooth-components/smooth-components-light.mov'
                }
                className="object-cover object-right min-1045:aspect-auto min-1045:h-full min-1045:min-h-[480px]"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <motion.img
                src={img}
                alt={title}
                className={`${project.slug === 'eazy-git' ? 'object-cover object-left' : ''} min-1045:aspect-auto min-1045:h-full min-1045:min-h-[480px]`}
                loading="eager"
              />
            )}
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
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <div className="relative rounded-3xl bg-gray-100 p-6 shadow-lg dark:bg-gray-900 min-445:p-8">
            {SlugIcon && (
              <SlugIcon
                size={80}
                autoAnimate
                className="absolute -right-5 -top-10 z-10 text-gray-400 dark:text-gray-500"
                style={
                  project.slug === 'smooth-components'
                    ? { color: 'hsl(167 80% 52%)' }
                    : undefined
                }
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
          </div>

          {project.slug === 'smooth-components' ? (
            <BundlephobiaWidget
              pkg="smooth-components@1.1.18"
              isDarkMode={isDark}
              hasHoverEffect={false}
              size="sm"
              repository="https://github.com/jaime00/smooth-components"
            />
          ) : project.slug === 'eazy-git' ? (
            <BundlephobiaWidget
              pkg="eazy-git@0.2.3"
              isDarkMode={isDark}
              size="sm"
              hasHoverEffect={false}
            />
          ) : (
            lastHighlights && (
              <div className="flex flex-1 flex-col justify-center rounded-3xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 shadow-lg dark:from-teal-400/10 dark:to-emerald-400/10">
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
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
