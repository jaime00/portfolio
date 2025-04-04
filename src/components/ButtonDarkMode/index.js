import { MoonIcon } from "../../assets/animatedIcons/Moon";
import { SunMoonIcon } from "../../assets/animatedIcons/SunMoonIcon";


export default function ButtonDarkMode({ changeMode, isDark }) {
	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-midnight general-ring-state
			hover:ring-4 hover:ring-gray-700"
			onClick={changeMode}
		>
			<div>{isDark ? <SunMoonIcon className='text-gray-600' /> : <MoonIcon className='text-gray-600' />}</div>
		</button>
	)
}
