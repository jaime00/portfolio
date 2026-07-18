import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(localStorage.isDark === 'true')

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleDark = () => {
    const next = !isDark
    const apply = () => {
      localStorage.isDark = next
      setIsDark(next)
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (!document.startViewTransition || isSafari) {
      apply()
    } else {
      document.startViewTransition(apply)
    }
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
