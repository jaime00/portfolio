export default function ExperienceLogo({ link, src }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        className="col-span-1 rounded-xl hover:scale-[102%] transition duration-500 ease-in-out cursor-pointer"
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
