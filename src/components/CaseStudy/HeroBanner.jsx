import { EASE_OUT_EXPO as ease } from '@/animations'
import useDarkMode from '@/contexts/useDarkMode'
import { m } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'

import { ArrowSquareRightIcon } from '@/assets/animatedIcons/ArrowSquareRightIcon'
import { ChevronLeftIcon } from '@/assets/animatedIcons/ChevronLeftIcon'
import { EyeIcon } from '@/assets/animatedIcons/EyeIcon'
import { LinkIcon } from '@/assets/animatedIcons/LinkIcon'

import ShinyText from '@/components/ShinyText'

import { useTranslation } from '@/i18n'

import HeroSidebar from './HeroSidebar'
import { getReadingTime } from './readingTime'

export default function HeroBanner({ project }) {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const arrowRef = useRef(null)
  const backRef = useRef(null)
  const eyeRef = useRef(null)
  const linkRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const resetTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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

  const { title, img, caseStudy, urlPreview } = project
  const readingTime = getReadingTime(caseStudy.sections)

  return (
    <section className="mb-16">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <Link
          to="/side-projects"
          className={`mb-3 inline-flex items-center gap-1 text-sm text-gray-500 transition-all duration-300 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 ${scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          onMouseEnter={() => backRef.current?.startAnimation()}
          onMouseLeave={() => backRef.current?.stopAnimation()}
        >
          <ChevronLeftIcon ref={backRef} size={18} />
          {t('projectDetail.backToProjects')}
        </Link>
      </m.div>

      <m.div
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
      </m.div>

      <div className="grid gap-4 min-1045:grid-cols-3">
        <m.div
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
                    ? 'https://res.cloudinary.com/personal-jaime00/video/upload/q_auto/v1785377395/projects/portfolio/projects/smooth-components/smooth-components-dark.mp4'
                    : 'https://res.cloudinary.com/personal-jaime00/video/upload/q_auto/v1785377562/projects/portfolio/projects/smooth-components/smooth-components-light.mp4'
                }
                className="object-cover object-right min-1045:aspect-auto min-1045:h-full min-1045:min-h-[480px]"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <m.img
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
        </m.div>

        <HeroSidebar project={project} />
      </div>
    </section>
  )
}
