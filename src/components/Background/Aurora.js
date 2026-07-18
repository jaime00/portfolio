export default function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none">
      <div className="fixed -left-[20vw] top-[-10vh] h-[55vw] w-[55vw] animate-aurora-slow rounded-full bg-aurora-teal opacity-[0.12] blur-3xl will-change-transform dark:opacity-[0.18]" />
      <div
        className="fixed right-[-15vw] top-[15vh] h-[45vw] w-[45vw] animate-aurora-slower rounded-full bg-aurora-teal opacity-[0.10] blur-3xl will-change-transform dark:opacity-[0.15]"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="fixed bottom-[-15vh] left-[10vw] h-[40vw] w-[40vw] animate-aurora-slow rounded-full bg-aurora-teal opacity-[0.08] blur-3xl will-change-transform dark:opacity-[0.12]"
        style={{ animationDelay: '-14s' }}
      />
    </div>
  )
}
