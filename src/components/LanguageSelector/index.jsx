import IconButton from '@/components/IconButton'

import { useTranslation } from '@/i18n'

const flags = {
  en: (
    <img
      src="/US.svg"
      alt="US flag"
      className="h-4 w-6 rounded-sm"
      aria-hidden="true"
    />
  ),
  es: (
    <img
      src="/CO.svg"
      alt="Colombia flag"
      className="h-4 w-6 rounded-sm"
      aria-hidden="true"
    />
  )
}

export default function LanguageSelector() {
  const { language, changeLanguage, t } = useTranslation()
  const nextLang = language === 'en' ? 'es' : 'en'
  const switchLabel = t(
    nextLang === 'es' ? 'common.switchToSpanish' : 'common.switchToEnglish'
  )

  return (
    <IconButton
      onClick={() => changeLanguage(nextLang)}
      ariaLabel={switchLabel}
      title={switchLabel}
    >
      {flags[language]}
    </IconButton>
  )
}
