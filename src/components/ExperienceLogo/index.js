export default function ExperienceLogo({ link, src, isRotate }) {
  const hoverClasses = isRotate
    ? 'hover:transform hover:rotate-3'
    : 'hover:scale-[102%]'
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        loading="lazy"
        className={`col-span-1 rounded-xl shadow-md ${hoverClasses} cursor-pointer transition duration-500 ease-in-out`}
        src={src}
        alt="ListIcon"
        width={300}
        height={240}
      />
    </a>
  )
}
