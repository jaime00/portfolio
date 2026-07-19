export default function IconButton({
  children,
  onClick,
  ariaLabel,
  title,
  className = '',
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`general-ring-state flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-md active:scale-95 dark:border-gray-500/30 dark:bg-white/10 dark:hover:border-gray-400/40 dark:hover:bg-white/20 dark:hover:shadow-none ${className}`}
    >
      {children}
    </button>
  )
}
