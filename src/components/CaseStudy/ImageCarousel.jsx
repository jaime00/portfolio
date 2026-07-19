import { EASE_OUT_EXPO as ease } from '@/animations'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

const INTERVAL = 4000

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir * 60, scale: 1.04 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir * -60, scale: 0.96 })
}

export default function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const go = useCallback(
    (index, direction) => {
      setDir(direction)
      setCurrent((index + images.length) % images.length)
      setProgressKey((k) => k + 1)
    },
    [images.length]
  )

  const advance = useCallback(() => go(current + 1, 1), [current, go])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(advance, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, advance])

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-teal-500/10"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.2, ease }}
    >
      <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-900">
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title || ''} ${current + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease }}
          />
        </AnimatePresence>

        {/* Left zone — 30% */}
        <button
          type="button"
          aria-label="Previous image"
          className="absolute inset-y-0 left-0 w-[30%] cursor-w-resize"
          onClick={() => go(current - 1, -1)}
        />

        {/* Middle zone — 40% — hold to pause */}
        <button
          type="button"
          aria-label="Pause slideshow"
          className="absolute inset-y-0 left-[30%] w-[40%] cursor-pointer"
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        />

        {/* Right zone — 30% */}
        <button
          type="button"
          aria-label="Next image"
          className="absolute inset-y-0 right-0 w-[30%] cursor-e-resize"
          onClick={() => go(current + 1, 1)}
        />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            className="h-0.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/30"
            onClick={() => go(i, i > current ? 1 : -1)}
          >
            {i === current && (
              <div
                key={progressKey}
                className="h-full rounded-full bg-white"
                style={{
                  animation: `progress-fill ${INTERVAL}ms linear forwards`,
                  animationPlayState: paused ? 'paused' : 'running'
                }}
              />
            )}
            {i < current && (
              <div className="h-full w-full rounded-full bg-white" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes progress-fill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </motion.div>
  )
}
