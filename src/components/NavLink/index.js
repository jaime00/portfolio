import { motion } from 'motion/react'
import { Link, useLocation } from 'wouter'

import { useTilt } from '@/hooks/useTilt'

export default function NavLink(props) {
  const [location] = useLocation()
  const isActive =
    props.to === '/' ? location === props.to : location.includes(props.to)
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(4)

  return (
    <li className="list-none" style={{ perspective: 600 }}>
      <Link {...props}>
        <motion.span
          className={`relative block cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-center text-lg ${
            isActive ? '' : 'hover:bg-gray-900/5 dark:hover:bg-white/5'
          }`}
          style={{ rotateX, rotateY }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {isActive && (
            <motion.span
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 shadow-lg shadow-teal-500/25 dark:from-teal-400 dark:to-emerald-400 dark:shadow-teal-400/15"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
          <span
            className={`capsize relative z-10 ${
              isActive
                ? 'font-medium text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200'
            }`}
          >
            {props.children}
          </span>
        </motion.span>
      </Link>
    </li>
  )
}
