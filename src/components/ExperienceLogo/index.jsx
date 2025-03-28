export default function ExperienceLogo({ link, src, isRotate }) {
  const hoverClasses = isRotate ? 'hover:transform hover:rotate-3' : 'hover:scale-[102%]';
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        lazy="true"
        className={`col-span-1 rounded-xl ${hoverClasses} transition duration-500 ease-in-out cursor-pointer`}
        src={src}
        alt="ListIcon"
        width={300}
        height={240}
        style={{
          boxShadow: '0px 4px 6px -2px #00000025, 0px 12px 16px -4px #00000025',
        }}
      />
    </a>
  );
}
