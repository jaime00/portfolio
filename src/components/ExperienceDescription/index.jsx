import { useCallback, useRef } from 'react'

import ArrowRightIcon from '@/assets/animatedIcons/ArrowRightIcon'

import { renderRichText } from '@/components/CaseStudy/richText'

export default function ExperienceDescription({
  year_initial,
  year_end,
  position,
  items
}) {
  const arrowRefs = useRef([])
  const intervalRefs = useRef([])

  const handleMouseEnter = useCallback((index) => {
    const ref = arrowRefs.current[index]
    if (!ref) return
    ref.startAnimation()
    intervalRefs.current[index] = setInterval(() => {
      ref.startAnimation()
    }, 800)
  }, [])

  const handleMouseLeave = useCallback((index) => {
    clearInterval(intervalRefs.current[index])
    arrowRefs.current[index]?.stopAnimation()
  }, [])

  return (
    <div className="col-span-1 flex flex-col gap-2 self-center">
      <p className="font-medium italic text-gray-400">
        {year_initial} <span className="text-teal-500">-</span> {year_end}
      </p>
      <h3 className="mb-5 text-3xl font-medium">{position}</h3>
      {items.map((detail, index) => (
        <div
          className="flex items-start gap-3"
          key={`experience-description-${index}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <ArrowRightIcon
            ref={(el) => (arrowRefs.current[index] = el)}
            className="mt-[6.8px] shrink-0 text-gray-500 dark:text-gray-300"
            size={20}
          />
          <p className="text-left text-sm leading-[28px] text-gray-600 dark:text-gray-300">
            {renderRichText(detail)}
          </p>
        </div>
      ))}
    </div>
  )
}
