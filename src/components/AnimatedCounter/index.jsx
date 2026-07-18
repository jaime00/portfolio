import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function AnimatedCounter({ target, duration = 1200 }) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const steps = target
    const interval = duration / steps
    let current = 1
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <span
      className="inline-block text-center"
      style={{ width: `${String(target).length}ch` }}
    >
      <motion.span
        key={count}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="inline-block"
      >
        {count}
      </motion.span>
    </span>
  )
}
