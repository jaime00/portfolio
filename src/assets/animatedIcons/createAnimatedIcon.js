import { useAnimation } from 'motion/react'
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'

export function createAnimatedIcon(displayName, renderSVG, wrapperTag = 'div') {
  const Tag = wrapperTag
  const Icon = forwardRef(
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
          else onMouseEnter?.(e)
        },
        [controls, onMouseEnter]
      )

      const handleMouseLeave = useCallback(
        (e) => {
          if (!isControlledRef.current) controls.start('normal')
          else onMouseLeave?.(e)
        },
        [controls, onMouseLeave]
      )

      return (
        <Tag
          className={className}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {renderSVG(controls, size)}
        </Tag>
      )
    }
  )
  Icon.displayName = displayName
  return Icon
}
