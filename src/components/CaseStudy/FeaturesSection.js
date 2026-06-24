import { motion } from 'motion/react'
import ArrowRightIcon from '@/assets/animatedIcons/ArrowRightIcon'
import { renderRichText } from './richText'

const ease = [0.16, 1, 0.3, 1]

export default function FeaturesSection({ section }) {
  return (
    <section className="mb-20">
      <motion.h2
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
      >
        {section.title}
      </motion.h2>

      {section.text && (
        <motion.p
          className="mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {section.text}
        </motion.p>
      )}

      <div className="flex flex-col gap-2">
        {section.items.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease }}
          >
            <ArrowRightIcon
              className="mt-[6.8px] shrink-0 text-gray-500 dark:text-gray-300"
              size={20}
            />
            <p className="text-left text-sm leading-[28px] text-gray-600 dark:text-gray-300">
              {renderRichText(item)}
            </p>
          </motion.div>
        ))}
      </div>

      {section.footer && (
        <motion.p
          className="mt-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {renderRichText(section.footer)}
        </motion.p>
      )}
    </section>
  )
}
