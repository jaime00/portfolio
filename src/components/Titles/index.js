export default function Titles({ title, subtitle }) {
  return (
    <h1 className="mx-auto mb-5">
      <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
        {title}
      </span>
      <span className="my-6 mx-auto block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
        {subtitle}
      </span>
    </h1>
  )
}
