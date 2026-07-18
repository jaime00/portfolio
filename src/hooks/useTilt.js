import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { useCallback } from 'react'

const canHover =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

export function useTilt(maxAngle = 5) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateXRaw = useTransform(mouseY, [-0.5, 0.5], [maxAngle, -maxAngle])
  const rotateYRaw = useTransform(mouseX, [-0.5, 0.5], [-maxAngle, maxAngle])

  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 20 })

  const handleMouseMove = useCallback(
    (e) => {
      if (!canHover) return
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    [mouseX, mouseY]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave }
}
