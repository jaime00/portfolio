import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import en from './en.json'
import es from './es.json'

const translations = { en, es }

const LanguageContext = createContext()

const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const getInitialLanguage = () => {
  const stored = localStorage.getItem('language')
  if (stored && translations[stored]) return stored
  return getBrowserLanguage()
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let value = translations[language]
      for (const k of keys) {
        value = value?.[k]
      }
      return value || key
    },
    [language]
  )

  const changeLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }, [])

  const value = useMemo(
    () => ({ language, t, changeLanguage }),
    [language, t, changeLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
