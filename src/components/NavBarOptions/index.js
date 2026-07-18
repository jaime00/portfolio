import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'wouter'

import NavLink from '@/components/NavLink'

import { useTranslation } from '@/i18n'

export default function NavBarOptions({ menuIsOpen, setMenuIsOpen }) {
  const [location] = useLocation()
  const { t } = useTranslation()

  const collapseNavbar = () => {
    setMenuIsOpen(false)
  }

  useEffect(() => {
    if (!menuIsOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuIsOpen, setMenuIsOpen])

  const menuItems = [
    { to: '/', label: t('common.home') },
    { to: '/about', label: t('common.about') },
    { to: '/experiences', label: t('common.experiences') },
    { to: '/side-projects', label: t('common.projects') },
    { to: '/contact', label: t('common.contact') }
  ]

  // Modal de pantalla completa en mobile (renderizado fuera del navbar usando Portal)
  const mobileModal = createPortal(
    <AnimatePresence>
      {menuIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-white/95 backdrop-blur-md dark:bg-gray-900/95 md:hidden"
          style={{
            boxShadow: 'inset 0 0 150px rgba(20, 184, 166, 0.15)'
          }}
          onClick={() => setMenuIsOpen(false)}
        >
          <button
            onClick={() => setMenuIsOpen(false)}
            className="general-ring-state absolute right-6 top-6 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
            {menuItems.map((item, i) => {
              const isActive = location === item.to
              return (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                    duration: 0.4
                  }}
                >
                  <Link to={item.to} onClick={collapseNavbar}>
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
                </motion.div>
              )
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )

  // Vista desktop (solo visible en pantallas md+)
  return (
    <>
      {mobileModal}
      <div className="hidden select-none items-center md:flex" id="navbar">
        <LayoutGroup>
          <ul className="flex items-center gap-2 text-lg">
            {menuItems.map((item) => (
              <NavLink key={item.to} onClick={collapseNavbar} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </LayoutGroup>
      </div>
    </>
  )
}
