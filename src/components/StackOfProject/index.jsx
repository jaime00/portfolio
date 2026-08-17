export default function StackOfProject({ stacks }) {
  return (
    <div className="flex min-h-[54px] flex-wrap items-baseline">
      {stacks.map((stack) => {
        return (
          <span
            key={stack}
            className={`m-1 inline-block rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-teal-500/20 transition-[box-shadow,filter] duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:brightness-105 dark:from-teal-400 dark:to-emerald-400 dark:text-gray-900 dark:shadow-teal-400/10`}
          >
            {stack}
          </span>
        )
      })}
    </div>
  )
}
