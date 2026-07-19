import useDarkMode from '@/contexts/DarkMode'
import { useState } from 'react'

import { MoonIcon } from '@/assets/animatedIcons/Moon'
import { SunIcon } from '@/assets/animatedIcons/SunIcon'

import IconButton from '@/components/IconButton'

import { useTranslation } from '@/i18n'

export default function ButtonDarkMode() {
  const { isDark, toggleDark } = useDarkMode()
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(false)
  const label = isDark ? t('a11y.disableDarkMode') : t('a11y.enableDarkMode')

  return (
    <span className="relative">
      <IconButton
        ariaLabel={label}
        aria-pressed={isDark}
        onClick={toggleDark}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isDark ? (
          <SunIcon className="text-gray-500 dark:text-gray-300" />
        ) : (
          <MoonIcon className="text-gray-600" />
        )}
      </IconButton>
      <span
        className={`pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 transition-all duration-150 ${hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <span className="relative flex items-center rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <span className="text-xs leading-none font-medium text-white/80">
            {label}
          </span>
          <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-neutral-900" />
        </span>
      </span>
    </span>
  )
}
