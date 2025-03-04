import { Link } from 'wouter'
import { getStyleButton } from '../../services'

export default function Button({ children, isDark = true, to = '/', openUrl = false, type = false, style = {} }) {
	const classes = getStyleButton({ isDark })
	const handleClick = () => openUrl && window.open(openUrl)
	if (openUrl) {
		return (
			<button style={style} aria-label="button" type="button" className={classes} onClick={handleClick}>
				{children}
			</button>
		)
	} else {
		if (type) {
			return (
				<a href="mailto:imjaimetorresv@gmail.com">
					<button style={style} aria-label="button" type="button" className={classes}>
						{children}
					</button>
				</a>
			)
		} else {
			return (
				<Link to={to}>
					<button style={style} aria-label="button" type="button" className={classes}>
						{children}
					</button>
				</Link>
			)
		}
	}
}
