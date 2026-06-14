'use client'

import { motion } from 'motion/react'
import { createAnimatedIcon } from './createAnimatedIcon'

const variants = {
  normal: { rotate: 0 },
  animate: { rotate: [0, -10, 10, -5, 5, 0] }
}
const transition = { duration: 1.2, ease: 'easeInOut' }

export const MoonIcon = createAnimatedIcon('MoonIcon', (controls, size) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    variants={variants}
    animate={controls}
    transition={transition}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </motion.svg>
))
