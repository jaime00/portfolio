import image_profile from '../../assets/images/person-head.png'
import ButtonDarkMode from '../ButtonDarkMode'
import LanguageSelector from '../LanguageSelector'
import NavBarOptions from '../NavBarOptions/'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { useTranslation } from '../../i18n'

export default function NavBar({ changeMode, isDark }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={`fixed left-0 top-0 right-0 z-[999999] mx-auto w-[100vw] max-w-6xl animate-fade rounded border-gray-200 px-4 py-3 transition-colors duration-300 ${
        scrolled ? 'bg-white/20 dark:bg-gray-800/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto mt-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="relative flex shrink-0"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Link to="/">
            <img
              loading="lazy"
              alt="Jaime Torres Icono Navbar"
              src={image_profile}
              className="dark:bg-midnight general-ring-state relative z-10 h-12 w-auto cursor-pointer select-none rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
            />
          </Link>
          <span
            className={`pointer-events-none absolute top-full left-0 mt-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-2 text-left shadow-md shadow-teal-500/20 transition-all duration-300 dark:from-teal-400 dark:to-emerald-400 ${
              showTooltip
                ? 'translate-y-0 opacity-100'
                : '-translate-y-2 opacity-0'
            }`}
          >
            <span className="absolute -top-2 left-[18px] h-0 w-0 border-x-[6px] border-b-[8px] border-x-transparent border-b-teal-500 dark:border-b-teal-400" />
            <span className="block text-sm font-bold text-gray-900 dark:text-gray-900">
              {t('nav.tooltip_line1')}
            </span>
            <span className="block text-xs font-medium text-gray-800/80 dark:text-gray-800/70">
              {t('nav.tooltip_line2')}{' '}
              <span className="text-white">&#9825;</span>
            </span>
          </span>
        </div>

        {/* Nav links - desktop */}
        <NavBarOptions menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSelector />
          <ButtonDarkMode changeMode={changeMode} isDark={isDark} />
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            data-collapse-toggle="navbar"
            type="button"
            className={`ml-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden ${menuIsOpen ? 'pointer-events-none opacity-0' : ''}`}
            aria-expanded={menuIsOpen}
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
