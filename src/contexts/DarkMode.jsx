import { DarkModeContext } from '@/contexts/DarkModeContext'
import { useCallback, useEffect, useMemo, useState } from 'react'

export default function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(localStorage.isDark === 'true')

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleDark = useCallback(() => {
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
  }, [isDark])

  const value = useMemo(() => ({ isDark, toggleDark }), [isDark, toggleDark])

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}
