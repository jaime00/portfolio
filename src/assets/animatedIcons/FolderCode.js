import { motion } from 'motion/react'
import { createAnimatedIcon } from './createAnimatedIcon'

const CODE_VARIANTS = {
  normal: { x: 0, rotate: 0, opacity: 1 },
  animate: (direction) => ({
    x: [0, direction * 2, 0],
    rotate: [0, direction * -8, 0],
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  })
}

export const FolderCodeIcon = createAnimatedIcon(
  'FolderCodeIcon',
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
      <motion.path
        animate={controls}
        custom={-1}
        d="M10 10.5 8 13l2 2.5"
        initial="normal"
        variants={CODE_VARIANTS}
      />
      <motion.path
        animate={controls}
        custom={1}
        d="m14 10.5 2 2.5-2 2.5"
        initial="normal"
        variants={CODE_VARIANTS}
      />
    </svg>
  ),
  'span'
)
