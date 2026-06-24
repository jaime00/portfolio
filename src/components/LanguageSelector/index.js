import { useTranslation } from '@/i18n'
import IconButton from '@/components/IconButton'

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
    <IconButton
      onClick={() => changeLanguage(nextLang)}
      ariaLabel={`Switch to ${nextLang === 'es' ? 'Spanish' : 'English'}`}
      title={nextLang === 'es' ? 'Cambiar a Español' : 'Switch to English'}
    >
      {flags[language]}
    </IconButton>
  )
}
