import React from 'react'
import { Link } from 'wouter'
import { getStyleButton } from '../../services'

export default function Button({ children, isDark = true, to = '/', openUrl = false, type = false }) {
	const classes = getStyleButton({ isDark })
	const handleClick = () => openUrl && window.open(openUrl)
	if (openUrl) {
		return (
			<button aria-label="button" type="button" className={classes} onClick={handleClick}>
				{children}
			</button>
		)
	} else {
		if (type) {
			return (
				<a href="mailto:jtorres6100@gmail.com">
					<button aria-label="button" type="button" className={classes}>
						{children}
					</button>
				</a>
			)
		} else {
			return (
				<Link to={to}>
					<button aria-label="button" type="button" className={classes}>
						{children}
					</button>
				</Link>
			)
		}
	}
}
