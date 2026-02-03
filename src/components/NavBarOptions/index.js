import { createPortal } from 'react-dom'
import { Link, useLocation } from 'wouter'
import NavLink from '../NavLink'

export default function NavBarOptions({ menuIsOpen, setMenuIsOpen }) {
  const [location] = useLocation()

  const collapseNavbar = () => {
    setMenuIsOpen(false)
  }

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/side-projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ]

  // Modal de pantalla completa en mobile (renderizado fuera del navbar usando Portal)
  const mobileModal =
    menuIsOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999999] flex items-center justify-center bg-white/95 backdrop-blur-md dark:bg-gray-900/95 md:hidden"
        onClick={() => setMenuIsOpen(false)}
      >
        <button
          onClick={() => setMenuIsOpen(false)}
          className="absolute right-6 top-6 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav
          className="flex flex-col items-center space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item) => {
            const isActive = location === item.to
            return (
              <Link key={item.to} to={item.to} onClick={collapseNavbar}>
                <div
                  className={`cursor-pointer rounded-full px-8 py-3 text-3xl font-medium transition-all hover:scale-105 ${
                    isActive
                      ? 'bg-teal-500/70 text-white'
                      : 'text-gray-900 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>,
      document.body
    )

  // Vista desktop (solo visible en pantallas md+)
  return (
    <>
      {mobileModal}
      <div
        className="hidden w-full select-none items-center justify-between text-2xl md:order-1 md:flex md:w-auto"
        id="navbar"
      >
        <ul className="flex flex-row space-x-8 text-center text-lg">
          <NavLink onClick={collapseNavbar} to="/">
            Home
          </NavLink>
          <NavLink onClick={collapseNavbar} to="/about">
            About
          </NavLink>
          <NavLink onClick={collapseNavbar} to="/experiences">
            Experiences
          </NavLink>
          <NavLink onClick={collapseNavbar} to="/side-projects">
            Projects
          </NavLink>
          <NavLink onClick={collapseNavbar} to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  )
}
