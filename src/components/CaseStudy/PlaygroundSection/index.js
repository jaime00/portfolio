import { EASE_OUT_EXPO as ease } from '@/animations'
import { motion } from 'motion/react'

import { renderRichText } from '@/components/CaseStudy/richText'

import Showroom from './Showroom'

export default function PlaygroundSection({ section }) {
  return (
    <section className="mb-20">
      <motion.h2
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
      >
        {section.title} <span className="inline-block scale-x-150 ml-2">—</span>
      </motion.h2>
      {section.subtitle && (
        <motion.p
          className="mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {renderRichText(section.subtitle)}
        </motion.p>
      )}
      <motion.div
        className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/70"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
      >
        <div
          className="animate-ambient-glow pointer-events-none absolute inset-0 !opacity-[0.07]"
          style={{
            background:
              'radial-gradient(ellipse at center, hsl(167, 80%, 52%), transparent 70%)'
          }}
        />
        <Showroom />
      </motion.div>
    </section>
  )
}
