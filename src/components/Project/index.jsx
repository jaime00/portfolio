import { motion } from 'motion/react'
import { useState } from 'react'
import { useLocation } from 'wouter'

import { getReadingTime } from '@/components/CaseStudy/readingTime'
import DetailOfProject from '@/components/DetailOfProject'
import StackOfProject from '@/components/StackOfProject'

import { useTilt } from '@/hooks/useTilt'

export default function Project({
  urlPreview,
  urlCode,
  title,
  description,
  img,
  stack,
  id,
  slug,
  caseStudy
}) {
  const readingTime = caseStudy ? getReadingTime(caseStudy.sections) : null
  const [loaded, setLoaded] = useState(false)
  const [, navigate] = useLocation()
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  const handleCardClick = (e) => {
    if (e.target.closest('a')) return
    navigate(`/side-projects/${slug}`)
  }

  return (
    <>
      <div className="wrapper group min-w-[350px] max-w-[405px] pb-6 text-gray-900 antialiased">
        <div style={{ perspective: 800 }}>
          <motion.div
            role="link"
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleCardClick(e)
              }
            }}
            className="cursor-pointer"
            style={{ rotateX, rotateY }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="rounded-lg bg-gray-100 dark:bg-gray-900">
              <img
                loading="lazy"
                width={405}
                height={260}
                src={img}
                alt={title}
                onLoad={() => setLoaded(true)}
                className={`h-[260px] w-full rounded-lg object-cover object-top shadow-md transition-transform duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <div className="relative -mt-16 px-4">
              <div className="min-h-[20rem] rounded-lg bg-white p-5 shadow-lg transition-shadow duration-300 group-hover:shadow-xl dark:bg-gray-900 dark:text-white dark:shadow-teal-500/10 dark:group-hover:shadow-teal-500/15 sm:pb-5">
                <StackOfProject stacks={stack} />
                <DetailOfProject
                  urlPreview={urlPreview}
                  urlCode={urlCode}
                  title={title}
                  description={description}
                  id={id}
                  readingTime={readingTime}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
