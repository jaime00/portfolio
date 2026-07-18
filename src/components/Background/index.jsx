import { motion, useScroll, useTransform } from 'motion/react'

import BackOne from '@/assets/images/background_one.avif'
import BackTwo from '@/assets/images/background_two.avif'

import Aurora from './Aurora'
import Grain from './Grain'
import Particles from './Particles'

export default function Background() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 110])
  const opacity = useTransform(scrollY, [0, 600], [1, 0.35])

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden"
      >
        <motion.div
          className="flex w-[108rem] flex-none justify-end"
          style={{ y, opacity }}
        >
          <picture>
            <source srcSet={BackOne} type="image/avif" />
            <img
              src={BackOne}
              alt=""
              fetchPriority="high"
              className="w-[71.75rem] max-w-none flex-none dark:hidden"
            />
          </picture>
          <picture>
            <source srcSet={BackTwo} type="image/avif" />
            <img
              src={BackTwo}
              alt=""
              fetchPriority="high"
              className="hidden w-[90rem] max-w-none flex-none dark:block"
            />
          </picture>
        </motion.div>
      </div>
      <Aurora />
      <Grain />
      <Particles />
    </>
  )
}
