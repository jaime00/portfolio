import { Link } from 'wouter'

import { getStyleButton } from '@/services'

export default function Button({
  children,
  isDark = true,
  to = '/',
  openUrl = null,
  onClick = null,
  className = '',
  ariaLabel = 'button',
  size = 'default',
  onMouseLeave = null
}) {
  const classes = `${getStyleButton({ isDark, size })} ${className}`

  const renderButton = (content) => (
    <button aria-label={ariaLabel} type="button" className={classes}>
      {content}
    </button>
  )

  if (openUrl) {
    return (
      <button
        aria-label={ariaLabel}
        type="button"
        className={classes}
        onClick={() => window.open(openUrl)}
      >
        {children}
      </button>
    )
  }

  if (onClick) {
    return (
      <button
        aria-label={ariaLabel}
        type="button"
        className={classes}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
    )
  }

  return <Link to={to}>{renderButton(children)}</Link>
}
