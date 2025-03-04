import { ReactComponent as BottomIcon } from '../../assets/icons/bottom.svg'

export default function Bottom() {
	const handleClick = () => window.scrollTo({ behavior: 'smooth', top: document.getElementById('work-experience-container').offsetTop })
	return (
		<div className="flex justify-center rotate-180 cursor-pointer animate-bounce text-gray-500 hover:text-black dark:hover:text-white" onClick={handleClick}>
			<BottomIcon />
		</div>
	)
}
