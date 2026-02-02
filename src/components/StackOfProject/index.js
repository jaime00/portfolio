export default function StackOfProject({ stacks }) {
  return (
    <div className="flex min-h-[54px] flex-wrap items-baseline">
      {stacks.map((stack, i) => {
        return (
          <span
            key={i}
            className={`m-1 inline-block rounded-full bg-teal-400 px-2 text-xs font-semibold uppercase tracking-wide text-white opacity-50 transition-opacity duration-200 hover:opacity-70 dark:opacity-80 dark:hover:opacity-100`}
          >
            {stack}
          </span>
        )
      })}
    </div>
  )
}
