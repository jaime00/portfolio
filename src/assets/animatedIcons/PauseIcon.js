import { motion } from 'motion/react'

import { createAnimatedIcon } from './createAnimatedIcon'

const transition = {
  times: [0, 0.2, 0.5, 1],
  duration: 0.5,
  stiffness: 260,
  damping: 20
}

const LEFT_RECT_VARIANTS = {
  normal: { y: 0 },
  animate: { y: [0, 2, 0, 0], transition }
}

const RIGHT_RECT_VARIANTS = {
  normal: { y: 0 },
  animate: { y: [0, 0, 2, 0], transition }
}

export const PauseIcon = createAnimatedIcon('PauseIcon', (controls, size) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.rect
      animate={controls}
      height="16"
      rx="1"
      variants={LEFT_RECT_VARIANTS}
      width="4"
      x="6"
      y="4"
    />
    <motion.rect
      animate={controls}
      height="16"
      rx="1"
      variants={RIGHT_RECT_VARIANTS}
      width="4"
      x="14"
      y="4"
    />
  </svg>
))
