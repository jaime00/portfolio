import { motion } from 'motion/react'

import { renderRichText } from './richText'

const ease = [0.16, 1, 0.3, 1]

export default function NarrativeSection({ section, index }) {
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
              className="w-full rounded-xl object-cover shadow-lg dark:shadow-teal-500/10"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>

      {section.images && (
        <div className="mt-8 grid grid-cols-1 gap-6 min-445:grid-cols-5">
          {section.images.map((src, i) => (
            <motion.div
              key={i}
              className={i === 0 ? 'min-445:col-span-3' : 'min-445:col-span-2'}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease }}
            >
              <img
                src={src}
                alt={`${section.title || ''} ${i + 1}`}
                className="h-full w-full rounded-xl object-cover shadow-lg dark:shadow-teal-500/10"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
