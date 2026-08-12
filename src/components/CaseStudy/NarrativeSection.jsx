import { EASE_OUT_EXPO as ease } from '@/animations'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

import ImageCarousel from './ImageCarousel'
import { renderRichText } from './richText'

export default function NarrativeSection({ section }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 1.2

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const isImageRight = section.imagePosition === 'right'
  const isImageBottom = section.imagePosition === 'bottom'

  const isCompact =
    !section.title && !section.image && !section.images && !section.highlights

  return (
    <section className={isCompact ? 'mb-8' : 'mb-16'}>
      {section.title && (
        <motion.h2
          className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
        >
          {section.title}{' '}
          <span className="inline-block scale-x-150 ml-2">—</span>
        </motion.h2>
      )}

      <div
        className={`flex flex-col gap-8 ${section.image && !isImageBottom ? 'min-1045:flex-row' : ''} ${!isImageRight && section.image && !isImageBottom ? 'min-1045:flex-row-reverse' : ''}`}
      >
        <div
          className={
            section.image && !isImageBottom ? 'min-1045:w-1/2' : 'w-full'
          }
        >
          <motion.p
            className="whitespace-pre-line text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {renderRichText(section.text)}
          </motion.p>

          {section.video && (
            <motion.div
              className="relative mt-8 overflow-hidden rounded-xl shadow-lg dark:shadow-teal-500/10"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              {section.videoLabel && (
                <span className="absolute left-0 top-0 z-10 select-none rounded-br-xl bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:bg-gray-800/70 dark:text-gray-300">
                  {section.videoLabel}
                </span>
              )}
              <video
                ref={videoRef}
                src={section.video}
                className="aspect-video w-full bg-gray-100 object-cover dark:bg-gray-900"
                loop
                muted
                playsInline
                preload="none"
              />
            </motion.div>
          )}
        </div>

        {section.image && !isImageBottom && (
          <motion.div
            className="min-1045:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full rounded-xl bg-gray-100 object-cover shadow-lg dark:bg-gray-900 dark:shadow-teal-500/10"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>

      {section.image && isImageBottom && (
        <motion.div
          className="relative mt-8 overflow-hidden rounded-xl shadow-lg dark:shadow-teal-500/10"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          {section.imageLabel && (
            <span className="absolute left-0 top-0 z-10 select-none rounded-br-xl bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:bg-gray-800/70 dark:text-gray-300">
              {section.imageLabel}
            </span>
          )}
          <img
            src={section.image}
            alt={section.title}
            className="w-full rounded-xl bg-gray-100 object-cover dark:bg-gray-900"
            loading="lazy"
          />
        </motion.div>
      )}

      {section.images && (
        <div className="mt-8">
          <ImageCarousel images={section.images} title={section.title} />
        </div>
      )}
    </section>
  )
}
