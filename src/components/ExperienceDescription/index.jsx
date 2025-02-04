import RelumeIcon from '../../assets/icons/relume-icon.svg';

export default function ExperienceDescription({
  year_initial,
  year_end,
  position,
  items,
}) {
  return (
    <div className="col-span-1 self-center flex flex-col gap-2">
      <p class="italic text-gray-400 font-medium">
        {year_initial} <span className="text-teal-500">-</span> {year_end}
      </p>
      <h3 className="mb-5 text-3xl font-medium">{position}</h3>
      {items.map((detail, index) => (
        <div className="flex gap-3" key={index}>
          <img src={RelumeIcon} alt="" />
          <p className="text-housplit-blue-color text-sm text-left" key={index}>
            {detail}
          </p>
        </div>
      ))}
    </div>
  );
}
