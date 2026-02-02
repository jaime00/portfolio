import { ArrowRightIcon } from '../../assets/animatedIcons/ArrowRightIcon'

export default function ExperienceDescription({
  year_initial,
  year_end,
  position,
  items
}) {
  return (
    <div className="col-span-1 flex flex-col gap-2 self-center">
      <p className="font-medium italic text-gray-400">
        {year_initial} <span className="text-teal-500">-</span> {year_end}
      </p>
      <h3 className="mb-5 text-3xl font-medium">{position}</h3>
      {items.map((detail, index) => (
        <div className="flex gap-3" key={`experience-description-${index}`}>
          <ArrowRightIcon
            className="text-gray-500 dark:text-gray-300"
            size={25}
          />
          <p className="text-housplit-blue-color text-left text-sm">{detail}</p>
        </div>
      ))}
    </div>
  )
}
