import { m } from 'motion/react'

import { ReactComponent as TopIcon } from '@/assets/icons/top.svg'

const handleClick = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

export default function Top() {
  return (
    <m.button
      type="button"
      aria-label="Scroll to top"
      className="animate-scroll-hint cursor-pointer text-gray-500 hover:text-black dark:hover:text-white"
      onClick={handleClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <TopIcon />
    </m.button>
  )
}
