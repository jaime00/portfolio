import { MoonIcon } from '../../assets/animatedIcons/Moon'
import { SunIcon } from '../../assets/animatedIcons/SunIcon'

export default function ButtonDarkMode({ changeMode, isDark }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="general-ring-state flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-md active:scale-95 dark:border-gray-500/30 dark:bg-white/10 dark:hover:border-gray-400/40 dark:hover:bg-white/20 dark:hover:shadow-none"
      onClick={changeMode}
    >
      <div>
        {isDark ? (
          <SunIcon className="text-gray-500 dark:text-gray-300" />
        ) : (
          <MoonIcon className="text-gray-600" />
        )}
      </div>
    </button>
  )
}
