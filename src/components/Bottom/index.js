import { ReactComponent as BottomIcon } from '../../assets/icons/bottom.svg'

export default function Bottom() {
  const handleClick = () =>
    window.scrollTo({
      behavior: 'smooth',
      top: document.getElementById('work-experience-container').offsetTop
    })
  return (
    <div
      className="flex animate-bounce cursor-pointer justify-center text-gray-500"
      onClick={handleClick}
    >
      <BottomIcon className="rotate-180 hover:text-black dark:hover:text-white" />
    </div>
  )
}
