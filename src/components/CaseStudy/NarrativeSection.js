import { motion } from 'motion/react'

import { renderRichText } from './richText'

const ease = [0.16, 1, 0.3, 1]

export default function NarrativeSection({ section, index }) {
  const isImageRight = section.imagePosition === 'right'

  return (
    <section className="mb-20">
      {section.title && (
        <motion.h2
          className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
        >
          {section.title}
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

          {section.highlights && !section.hideHighlightsGrid && (
            <div className="mt-8 grid grid-cols-2 gap-4 min-445:grid-cols-3">
              {section.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-gray-200/80 bg-white/70 p-4 text-center backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/70"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease }}
                >
                  <span className="text-gradient-teal text-2xl font-bold md:text-3xl">
                    {h.value}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>
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
    </section>
  )
}
