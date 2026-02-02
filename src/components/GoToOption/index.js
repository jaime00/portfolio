export default function GoToOption({ url, title, icon, id }) {
  return (
    <>
      <div
        id={`tooltip-${id}`}
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-700 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <a
        className="mr-4"
        href={url}
        target="_blank"
        rel="noreferrer"
        data-tooltip-target={`tooltip-${id}`}
        data-tooltip-placement="bottom"
      >
        {icon}
      </a>
    </>
  )
}
