import { motion, useMotionValue, useSpring } from 'motion/react'
import { Link } from 'wouter'

import { getStyleButton } from '@/services'

const tapAndHover = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02 },
  transition: { type: 'spring', stiffness: 400, damping: 17 }
}

export default function Button({
  children,
  isDark = true,
  to = '/',
  openUrl = null,
  onClick = null,
  className = '',
  wrapperClassName = '',
  ariaLabel = 'button',
  size = 'default',
  onMouseLeave = null,
  magnetic = false
}) {
  const classes = `${getStyleButton({ isDark, size })} ${className}`

  const magX = useMotionValue(0)
  const magY = useMotionValue(0)
  const springX = useSpring(magX, { stiffness: 150, damping: 20 })
  const springY = useSpring(magY, { stiffness: 150, damping: 20 })

  const magneticStyle = magnetic ? { x: springX, y: springY } : {}

  const onMagMouseMove = magnetic
    ? (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        magX.set(Math.max(-6, Math.min(6, (e.clientX - cx) * 0.25)))
        magY.set(Math.max(-6, Math.min(6, (e.clientY - cy) * 0.25)))
      }
    : undefined

  const onMagMouseLeave = () => {
    if (magnetic) {
      magX.set(0)
      magY.set(0)
    }
    onMouseLeave?.()
  }

  if (openUrl) {
    return (
      <motion.button
        aria-label={ariaLabel}
        type="button"
        className={classes}
        onClick={() => window.open(openUrl)}
        style={magneticStyle}
        onMouseMove={onMagMouseMove}
        onMouseLeave={onMagMouseLeave}
        {...tapAndHover}
      >
        {children}
      </motion.button>
    )
  }

  if (onClick) {
    return (
      <motion.button
        aria-label={ariaLabel}
        type="button"
        className={classes}
        onClick={onClick}
        style={magneticStyle}
        onMouseMove={onMagMouseMove}
        onMouseLeave={onMagMouseLeave}
        {...tapAndHover}
      >
        {children}
      </motion.button>
    )
  }

  if (magnetic) {
    return (
      <motion.span
        className={`inline-block ${wrapperClassName}`}
        style={magneticStyle}
        onMouseMove={onMagMouseMove}
        onMouseLeave={onMagMouseLeave}
      >
        <Link to={to}>
          <motion.button
            aria-label={ariaLabel}
            type="button"
            className={classes}
            {...tapAndHover}
          >
            {children}
          </motion.button>
        </Link>
      </motion.span>
    )
  }

  return (
    <Link to={to}>
      <motion.button
        aria-label={ariaLabel}
        type="button"
        className={classes}
        {...tapAndHover}
      >
        {children}
      </motion.button>
    </Link>
  )
}
