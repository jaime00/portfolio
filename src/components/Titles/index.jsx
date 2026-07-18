export default function Titles({ title, subtitle, as: Tag = 'h1' }) {
  return (
    <Tag className="mx-auto mb-5">
      <span className="block bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-center text-base font-semibold uppercase tracking-wide text-transparent dark:from-teal-500 dark:to-teal-400">
        {title}
      </span>
      <span className="mx-auto my-6 block max-w-2xl text-center text-4xl font-bold leading-tight sm:text-5xl">
        {subtitle}
      </span>
    </Tag>
  )
}
