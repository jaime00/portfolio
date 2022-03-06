export default function GoToOption({ url, title, icon, id }) {
	return (
		<>
			<div
				id={`tooltip-${id}`}
				role="tooltip"
				className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip bg-gray-700 text-white"
			>
				{title}
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
			<a className="mr-4" href={url} target="_blank" rel="noreferrer" data-tooltip-target={`tooltip-${id}`} data-tooltip-placement="bottom">
				{icon}
			</a>
		</>
	)
}
