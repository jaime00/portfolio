export default function ExperienceLogo({ link, src, isRotate, name }) {
  const hoverClasses = isRotate
    ? 'hover:transform hover:rotate-3'
    : 'hover:scale-[102%]'
  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={name}>
      <img
        loading="lazy"
        className={`col-span-1 rounded-xl bg-gray-100 shadow-lg dark:bg-gray-900 dark:shadow-teal-500/10 ${hoverClasses} cursor-pointer transition duration-500 ease-in-out`}
        src={src}
        alt={name || 'Company logo'}
        width={300}
        height={240}
      />
    </a>
  )
}
