import { useRef } from 'react'
import { Link } from 'wouter'

import { ExternalLinkIcon } from '@/assets/animatedIcons/ExternalLinkIcon'

export function HyperLink({
  href,
  to,
  children,
  external = true,
  showIcon = true,
  styles,
  className,
  textClassName = 'font-semibold',
  showUnderline = true
}) {
  const iconRef = useRef(null)

  const underscoreColor = styles?.underscoreColor ?? 'currentColor'
  const textColor = styles?.textColor

  const sharedClass = `group inline-flex flex-col gap-0${className ? ` ${className}` : ''}`
  const sharedStyle = textColor ? { color: textColor } : undefined

  const inner = (
    <>
      <span className={`flex items-center gap-1 ${textClassName}`}>
        {showIcon && !to && (
          <ExternalLinkIcon ref={iconRef} size={14} className="text-current" />
        )}
        {children}
      </span>
      {showUnderline && (
        <span
          className="block h-[1.2px] -mt-[2px] origin-left transition-transform duration-300 group-hover:scale-x-0"
          style={{ backgroundColor: underscoreColor }}
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={sharedClass} style={sharedStyle}>
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={sharedClass}
      style={sharedStyle}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      {inner}
    </a>
  )
}
