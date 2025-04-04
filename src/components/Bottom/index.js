import { ReactComponent as BottomIcon } from '../../assets/icons/bottom.svg'

export default function Bottom() {
	const handleClick = () => window.scrollTo({ behavior: 'smooth', top: document.getElementById('work-experience-container').offsetTop })
	return (
		<div className="flex justify-center cursor-pointer animate-bounce text-gray-500" onClick={handleClick}>
			<BottomIcon className='hover:text-black dark:hover:text-white rotate-180'/>
		</div>
	)
}
