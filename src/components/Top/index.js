import { ReactComponent as TopIcon } from '../../assets/images/icons/top.svg'

export default function Top() {
	const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	return (
		<div className="cursor-pointer animate-bounce text-gray-500 hover:text-black dark:hover:text-white" onClick={handleClick}>
			<TopIcon />
		</div>
	)
}
