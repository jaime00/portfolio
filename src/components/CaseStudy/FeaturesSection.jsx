import { EASE_OUT_EXPO as ease } from '@/animations'
import { m } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import ArrowRightIcon from '@/assets/animatedIcons/ArrowRightIcon'

import { renderRichText } from './richText'

export default function FeaturesSection({ section }) {
  const arrowRefs = useRef([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    if (hoveredIndex === null) return
    const ref = arrowRefs.current[hoveredIndex]
    if (!ref) return
    ref.startAnimation()
    const id = setInterval(() => ref.startAnimation(), 800)
    return () => {
      clearInterval(id)
      ref.stopAnimation()
    }
  }, [hoveredIndex])

  return (
    <section className="mb-16">
      <m.h2
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease }}
      >
        {section.title} <span className="inline-block scale-x-150 ml-2">—</span>
      </m.h2>

      {section.text && (
        <m.p
          className="mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {section.text}
        </m.p>
      )}

      <div className="flex flex-col gap-2">
        {section.items.map((item, i) => (
          <m.div
            key={item}
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ArrowRightIcon
              ref={(el) => (arrowRefs.current[i] = el)}
              className="mt-[6.8px] shrink-0 text-gray-500 dark:text-gray-300"
              size={20}
            />
            <p className="text-left text-sm leading-[28px] text-gray-600 dark:text-gray-300">
              {renderRichText(item)}
            </p>
          </m.div>
        ))}
      </div>

      {section.footer && (
        <m.p
          className="mt-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {renderRichText(section.footer)}
        </m.p>
      )}
    </section>
  )
}
