import React from 'react'
import { Link } from 'wouter'
import { getClasses } from '../../services'

export default function Button({ children, isDark = true, to = '/', download = false, type = false }) {
	let classes = getClasses({ isDark })
	const handleClick = () => download && window.open(download)
	if (download) {
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
