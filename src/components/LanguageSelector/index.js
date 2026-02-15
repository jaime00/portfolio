import { useTranslation } from '../../i18n'

const flags = {
  en: (
    <svg viewBox="0 0 36 36" className="h-5 w-5" aria-hidden="true">
      <rect fill="#00247D" width="36" height="36" rx="4" />
      <path d="M0 0L36 36M36 0L0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L36 36M36 0L0 36" stroke="#CF142B" strokeWidth="2" />
      <path d="M18 0V36M0 18H36" stroke="#fff" strokeWidth="10" />
      <path d="M18 0V36M0 18H36" stroke="#CF142B" strokeWidth="6" />
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
      className="dark:bg-midnight general-ring-state flex h-12 w-[4.5rem] items-center justify-center rounded-full bg-gray-200 transition-shadow duration-200 hover:ring-4 hover:ring-gray-700"
      aria-label={`Switch to ${nextLang === 'es' ? 'Spanish' : 'English'}`}
      title={nextLang === 'es' ? 'Cambiar a Espanol' : 'Switch to English'}
    >
      <span className="flex items-center gap-1.5">
        {flags[nextLang]}
        <span className="text-xs font-semibold uppercase text-gray-700">
          {nextLang}
        </span>
      </span>
    </button>
  )
}
