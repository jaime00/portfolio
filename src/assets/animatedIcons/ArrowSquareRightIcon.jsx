import { motion, useAnimation } from 'motion/react'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'

const ARROW_VARIANTS = {
  normal: {
    x: 0,
    y: 0
  },
  animate: {
    x: [0, 3, 0],
    y: [0, -3, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const ArrowSquareRightIcon = forwardRef(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation()
    const isControlledRef = useRef(false)

    useImperativeHandle(ref, () => {
      isControlledRef.current = true
      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal')
      }
    })

    const handleMouseEnter = useCallback(
      (e) => {
        if (!isControlledRef.current) controls.start('animate')
        onMouseEnter?.(e)
      },
      [controls, onMouseEnter]
    )

    const handleMouseLeave = useCallback(
      (e) => {
        if (!isControlledRef.current) controls.start('normal')
        onMouseLeave?.(e)
      },
      [controls, onMouseLeave]
    )

    return (
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M7 7H17"
            animate={controls}
            variants={ARROW_VARIANTS}
          />
          <motion.path
            d="M17 7V17"
            animate={controls}
            variants={ARROW_VARIANTS}
          />
          <motion.path
            d="M7 17L17 7"
            animate={controls}
            variants={ARROW_VARIANTS}
          />
        </svg>
      </div>
    )
  }
)

ArrowSquareRightIcon.displayName = 'ArrowSquareRightIcon'

export { ArrowSquareRightIcon }
