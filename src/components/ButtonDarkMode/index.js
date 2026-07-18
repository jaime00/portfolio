import useDarkMode from '@/contexts/DarkMode'

import { MoonIcon } from '@/assets/animatedIcons/Moon'
import { SunIcon } from '@/assets/animatedIcons/SunIcon'

import IconButton from '@/components/IconButton'

import { useTranslation } from '@/i18n'

export default function ButtonDarkMode() {
  const { isDark, toggleDark } = useDarkMode()
  const { t } = useTranslation()
  return (
    <IconButton
      ariaLabel={isDark ? t('a11y.disableDarkMode') : t('a11y.enableDarkMode')}
      aria-pressed={isDark}
      onClick={toggleDark}
    >
      {isDark ? (
        <SunIcon className="text-gray-500 dark:text-gray-300" />
      ) : (
        <MoonIcon className="text-gray-600" />
      )}
    </IconButton>
  )
}
