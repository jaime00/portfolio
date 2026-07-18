const grainUrl =
  "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23noise)'/></svg>\")"

export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] dark:opacity-[0.045]"
      style={{
        backgroundImage: grainUrl,
        backgroundSize: '180px 180px'
      }}
    />
  )
}
