import { m } from 'motion/react'

const TOP_ICON =
  'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587274/projects/portfolio/top.svg'

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
      <img src={TOP_ICON} alt="" aria-hidden="true" width={24} height={24} />
    </m.button>
  )
}
