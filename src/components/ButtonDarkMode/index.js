import { MoonIcon } from '@/assets/animatedIcons/Moon'
import { SunIcon } from '@/assets/animatedIcons/SunIcon'

import IconButton from '@/components/IconButton'

export default function ButtonDarkMode({ changeMode, isDark }) {
  return (
    <IconButton ariaLabel="Toggle Dark Mode" onClick={changeMode}>
      {isDark ? (
        <SunIcon className="text-gray-500 dark:text-gray-300" />
      ) : (
        <MoonIcon className="text-gray-600" />
      )}
    </IconButton>
  )
}
