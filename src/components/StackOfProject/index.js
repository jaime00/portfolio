export default function StackOfProject({ stacks }) {
	return (
		<div className="flex items-baseline flex-wrap min-h-[54px]">
			{stacks.map((stack, i) => {
				return (
					<span
						key={i}
						className={`bg-teal-400 opacity-70 text-white text-xs px-2 m-1 inline-block rounded-full  uppercase font-semibold tracking-wide`}
					>
						{stack}
					</span>
				)
			})}
		</div>
	)
}
