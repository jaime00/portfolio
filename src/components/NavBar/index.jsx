import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'wouter'

import { ChevronLeftIcon } from '@/assets/animatedIcons/BackIcon'

import ButtonDarkMode from '@/components/ButtonDarkMode'
import LanguageSelector from '@/components/LanguageSelector'
import NavBarOptions from '@/components/NavBarOptions/'

import { useTranslation } from '@/i18n'

const image_profile =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597423/projects/portfolio/person-head.png'

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()
  const backRef = useRef(null)
  const { t } = useTranslation()

  const isProjectDetail = /^\/side-projects\/.+/.test(location)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const showBack = scrolled && isProjectDetail

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[999999] mx-auto w-[100vw] max-w-6xl animate-fade border-gray-200 px-4 pb-3 pt-3 transition-all duration-300 ${
        scrolled
          ? `bg-white/70 drop-shadow-md backdrop-blur-md dark:bg-gray-800/70 ${showBack ? 'rounded-t-2xl rounded-br-2xl' : 'rounded-2xl'}`
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto mt-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex shrink-0">
          <Link to="/">
            <img
              loading="lazy"
              width={48}
              height={48}
              alt="Jaime Torres Icono Navbar"
              src={image_profile}
              className="general-ring-state relative z-10 h-12 w-auto cursor-pointer select-none rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
            />
          </Link>
        </div>

        {/* Nav links - desktop */}
        <NavBarOptions menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSelector />
          <ButtonDarkMode />
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            data-collapse-toggle="navbar"
            type="button"
            className={`general-ring-state ml-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden ${menuIsOpen ? 'invisible pointer-events-none' : ''}`}
            aria-expanded={menuIsOpen}
            aria-label={t('nav.menu')}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Tab inferior izquierdo — extiende el navbar hacia abajo formando la forma irregular */}
      <AnimatePresence>
        {showBack && (
          <motion.div
            className="absolute left-0 top-full rounded-b-xl bg-white/70 backdrop-blur-md dark:bg-gray-800/70"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/side-projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-gray-500 transition-colors hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400"
              onMouseEnter={() => backRef.current?.startAnimation()}
              onMouseLeave={() => backRef.current?.stopAnimation()}
            >
              <ChevronLeftIcon ref={backRef} size={16} />
              {t('projectDetail.backToProjects')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
