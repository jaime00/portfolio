import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

export default function VideoSection({ section }) {
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

      <motion.div
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
      </motion.div>

      {section.text && (
        <motion.p
          className="mt-4 text-base text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
        >
          {section.text}
        </motion.p>
      )}
    </section>
  )
}
