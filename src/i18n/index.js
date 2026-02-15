import { createContext, useContext, useState, useEffect } from 'react'
import en from './en.json'
import es from './es.json'

const translations = { en, es }

const LanguageContext = createContext()

const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  return browserLang.startsWith('es') ? 'es' : 'en'
}

const getInitialLanguage = () => {
  const stored = localStorage.getItem('language')
  if (stored) return stored
  return getBrowserLanguage()
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
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
