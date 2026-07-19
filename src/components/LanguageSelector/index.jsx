import { useState } from 'react'

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
  const [hovered, setHovered] = useState(false)
  const nextLang = language === 'en' ? 'es' : 'en'
  const label =
    nextLang === 'es' ? t('a11y.switchToSpanish') : t('a11y.switchToEnglish')

  const nextlabel =
    language === 'en' ? t('a11y.switchToSpanish') : t('a11y.switchToEnglish')

  return (
    <span className="relative">
      <IconButton
        onClick={() => changeLanguage(nextLang)}
        ariaLabel={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {flags[nextLang]}
      </IconButton>
      <span
        className={`pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 transition-all duration-150 ${hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <span className="relative flex items-center rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <span className="text-xs leading-none font-medium text-white/80">
            {nextlabel}
          </span>
          <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-neutral-900" />
        </span>
      </span>
    </span>
  )
}
