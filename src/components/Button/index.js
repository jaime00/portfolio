import { Link } from 'wouter'

import { getStyleButton } from '../../services'

export default function Button({
  children,
  isDark = true,
  to = '/',
  openUrl = null,
  onClick = null,
  className = ''
}) {
  const classes = `${getStyleButton({ isDark })} ${className}`

  const renderButton = (content) => (
    <button aria-label="button" type="button" className={classes}>
      {content}
    </button>
  )

  if (openUrl) {
    return (
      <button
        aria-label="button"
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
        aria-label="button"
        type="button"
        className={classes}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return <Link to={to}>{renderButton(children)}</Link>
}
