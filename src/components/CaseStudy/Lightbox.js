import { useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const goNext = useCallback(() => {
    onNavigate(index < images.length - 1 ? index + 1 : 0)
  }, [index, images.length, onNavigate])

  const goPrev = useCallback(() => {
    onNavigate(index > 0 ? index - 1 : images.length - 1)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goNext, goPrev])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
          className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <motion.img
          key={index}
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
          className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-4 text-sm text-white/70">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
