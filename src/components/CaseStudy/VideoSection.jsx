import { EASE_OUT_EXPO as ease } from '@/animations'
import { m } from 'motion/react'

export default function VideoSection({ section }) {
  return (
    <section className="mb-20">
      <m.h2
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
      >
        {section.title} <span className="inline-block scale-x-150 ml-2">—</span>
      </m.h2>

      <m.div
        className="overflow-hidden rounded-xl shadow-lg dark:shadow-teal-500/10"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
      >
        <iframe
          src={section.videoUrl}
          title={section.title}
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </m.div>

      {section.text && (
        <m.p
          className="mt-4 text-base text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
        >
          {section.text}
        </m.p>
      )}
    </section>
  )
}
