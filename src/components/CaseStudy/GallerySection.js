import { useState } from 'react'
import { motion } from 'motion/react'
import Lightbox from './Lightbox'

const ease = [0.16, 1, 0.3, 1]

export default function GallerySection({ section }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

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

      <div className="grid grid-cols-2 gap-4 min-445:grid-cols-2 min-1045:grid-cols-3">
        {section.images.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl dark:shadow-teal-500/10 dark:hover:shadow-teal-500/15"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
          >
            <img
              src={src}
              alt={`${section.title} ${i + 1}`}
              className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={section.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
