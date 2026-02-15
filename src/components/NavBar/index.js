import image_profile from '../../assets/images/person-head.png'
import ButtonDarkMode from '../ButtonDarkMode'
import LanguageSelector from '../LanguageSelector'
import NavBarOptions from '../NavBarOptions/'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'

export default function NavBar({ changeMode, isDark }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
        <Link to="/" className="flex shrink-0">
          <img
            loading="lazy"
            alt="Jaime Torres"
            src={image_profile}
            className="dark:bg-midnight general-ring-state h-12 w-auto cursor-pointer select-none rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
          />
        </Link>

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
