import { motion, useScroll, useSpring } from 'motion/react'

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999999] h-[3px] origin-left bg-gradient-to-r from-teal-500 to-teal-400"
      style={{ scaleX }}
    />
  )
}
