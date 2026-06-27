import { motion } from 'motion/react'

import { createAnimatedIcon } from './createAnimatedIcon'

const VARIANTS = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.4, opacity: { duration: 0.1 } }
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.6, ease: 'linear', opacity: { duration: 0.1 } }
  }
}

export const LinkedinIcon = createAnimatedIcon(
  'LinkedinIcon',
  (controls, size) => (
    <svg
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={controls}
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        initial="normal"
        variants={VARIANTS}
      />
      <motion.rect
        animate={controls}
        height="12"
        initial="normal"
        variants={VARIANTS}
        width="4"
        x="2"
        y="9"
      />
      <motion.circle
        animate={controls}
        cx="4"
        cy="4"
        initial="normal"
        r="2"
        variants={VARIANTS}
      />
    </svg>
  )
)
