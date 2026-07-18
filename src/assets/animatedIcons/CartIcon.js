import { motion, useAnimation } from 'motion/react'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'

const CART_VARIANTS = {
  normal: { scale: 1 },
  animate: {
    scale: 1.1,
    y: [0, -5, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      y: { repeat: 1, delay: 0.1, duration: 0.4 }
    }
  }
}

const CartIcon = forwardRef(
  (
    {
      onMouseEnter,
      onMouseLeave,
      className,
      size = 28,
      autoAnimate = false,
      ...props
    },
    ref
  ) => {
    const controls = useAnimation()
    const isControlledRef = useRef(false)

    useEffect(() => {
      if (autoAnimate) controls.start('animate')
    }, [autoAnimate, controls])

    useImperativeHandle(ref, () => {
      isControlledRef.current = true

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal')
      }
    })

    const handleMouseEnter = useCallback(
      (e) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e)
        } else {
          controls.start('animate')
        }
      },
      [controls, onMouseEnter]
    )

    const handleMouseLeave = useCallback(
      (e) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e)
        } else {
          controls.start('normal')
        }
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
        <motion.svg
          animate={controls}
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transition={{ duration: 0.2 }}
          variants={CART_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.3 5H21L19 12H7.38M20 16H8L6 3H3M9 20C9 20.55 8.55 21 8 21C7.45 21 7 20.55 7 20C7 19.45 7.45 19 8 19C8.55 19 9 19.45 9 20ZM20 20C20 20.55 19.55 21 19 21C18.45 21 18 20.55 18 20C18 19.45 18.45 19 19 19C19.55 19 20 19.45 20 20Z" />
        </motion.svg>
      </div>
    )
  }
)

CartIcon.displayName = 'CartIcon'

export { CartIcon }
