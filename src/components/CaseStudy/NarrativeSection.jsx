import { EASE_OUT_EXPO as ease } from '@/animations'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

import ImageCarousel from './ImageCarousel'
import { renderRichText } from './richText'

export default function NarrativeSection({ section }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2
    }
  }, [])

  const isImageRight = section.imagePosition === 'right'

  const isCompact =
    !section.title && !section.image && !section.images && !section.highlights

  return (
    <section className={isCompact ? 'mb-8' : 'mb-20'}>
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
        className={`flex flex-col gap-8 ${section.image ? 'min-1045:flex-row' : ''} ${!isImageRight && section.image ? 'min-1045:flex-row-reverse' : ''}`}
      >
        <div className={section.image ? 'min-1045:w-1/2' : 'w-full'}>
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
              className="mt-8 overflow-hidden rounded-xl shadow-lg dark:shadow-teal-500/10"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <video
                ref={videoRef}
                src={section.video}
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          )}
        </div>

        {section.image && (
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

      {section.images && (
        <div className="mt-8">
          <ImageCarousel images={section.images} title={section.title} />
        </div>
      )}
    </section>
  )
}
