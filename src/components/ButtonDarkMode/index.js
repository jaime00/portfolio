import { MoonIcon } from '../../assets/animatedIcons/Moon'
import { SunIcon } from '../../assets/animatedIcons/SunIcon'

export default function ButtonDarkMode({ changeMode, isDark }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="dark:bg-midnight general-ring-state flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 hover:ring-4 hover:ring-gray-700"
      onClick={changeMode}
    >
      <div>
        {isDark ? (
          <SunIcon className="text-gray-600" />
        ) : (
          <MoonIcon className="text-gray-600" />
        )}
      </div>
    </button>
  )
}
