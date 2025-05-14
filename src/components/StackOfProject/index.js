export default function StackOfProject({ stacks }) {
	return (
		<div className="flex items-baseline flex-wrap min-h-[54px]">
			{stacks.map((stack, i) => {
				return (
					<span
						key={i}
						className={`bg-teal-400 opacity-50 dark:opacity-80 text-white text-xs px-2 m-1 inline-block rounded-full font-semibold tracking-wide uppercase`}
					>
						{stack}
					</span>
				)
			})}
		</div>
	)
}
