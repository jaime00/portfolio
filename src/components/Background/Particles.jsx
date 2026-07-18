const PARTICLES = [
  { top: '15%', left: '8%', delay: '0s', size: 3 },
  { top: '35%', left: '92%', delay: '-3s', size: 2 },
  { top: '55%', left: '5%', delay: '-6s', size: 2 },
  { top: '25%', left: '85%', delay: '-9s', size: 3 },
  { top: '70%', left: '15%', delay: '-2s', size: 2 },
  { top: '45%', left: '78%', delay: '-7s', size: 3 },
  { top: '80%', left: '60%', delay: '-11s', size: 2 },
  { top: '10%', left: '55%', delay: '-4s', size: 2 }
]

export default function Particles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute animate-particle rounded-full bg-teal-400 opacity-0"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  )
}
