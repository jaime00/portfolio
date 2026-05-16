import { useTranslation } from '../../i18n'

const flags = {
  en: (
    <svg viewBox="0 0 36 36" className="h-5 w-5" aria-hidden="true">
      <rect fill="#B22234" width="36" height="36" rx="4" />
      <rect fill="#fff" y="3" width="36" height="2.77" />
      <rect fill="#fff" y="8.54" width="36" height="2.77" />
      <rect fill="#fff" y="14.08" width="36" height="2.77" />
      <rect fill="#fff" y="19.62" width="36" height="2.77" />
      <rect fill="#fff" y="25.15" width="36" height="2.77" />
      <rect fill="#fff" y="30.69" width="36" height="2.77" />
      <rect fill="#3C3B6E" width="16" height="19.38" rx="2" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 36 36" className="h-5 w-5" aria-hidden="true">
      <rect fill="#C60A1D" width="36" height="36" rx="4" />
      <rect fill="#FFC400" y="9" width="36" height="18" />
    </svg>
  )
}

export default function LanguageSelector() {
  const { language, changeLanguage } = useTranslation()
  const nextLang = language === 'en' ? 'es' : 'en'

  return (
    <button
      onClick={() => changeLanguage(nextLang)}
      className="general-ring-state flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-md active:scale-95 dark:border-gray-500/30 dark:bg-white/10 dark:hover:border-gray-400/40 dark:hover:bg-white/20 dark:hover:shadow-none"
      aria-label={`Switch to ${nextLang === 'es' ? 'Spanish' : 'English'}`}
      title={nextLang === 'es' ? 'Cambiar a Español' : 'Switch to English'}
    >
      {flags[language]}
    </button>
  )
}
