import { motion } from 'motion/react'
import { createAnimatedIcon } from './createAnimatedIcon'

const lineVariants = {
  normal: { d: 'M5 12h14' },
  animate: {
    d: ['M5 12h14', 'M5 12h9', 'M5 12h14'],
    transition: { duration: 0.4 }
  }
}

const arrowVariants = {
  normal: { d: 'm12 5 7 7-7 7', translateX: 0 },
  animate: {
    d: 'm12 5 7 7-7 7',
    translateX: [0, -3, 0],
    transition: { duration: 0.4 }
  }
}

const ArrowRightIcon = createAnimatedIcon(
  'ArrowRightIcon',
  (controls, size) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path d="M5 12h14" variants={lineVariants} animate={controls} />
      <motion.path
        d="m12 5 7 7-7 7"
        variants={arrowVariants}
        animate={controls}
      />
    </svg>
  )
)

export default ArrowRightIcon
