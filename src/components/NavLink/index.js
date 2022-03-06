import { Link, useLocation } from 'wouter'

export default function NavLink(props) {
	const [location] = useLocation()
	const isBold = location === props.to ? { fontWeight: 'bold' } : {}
	return (
		<Link {...props}>
			<li style={isBold} className="cursor-pointer nav-bar-item block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400">
				<span className="capsize">{props.children}</span>
			</li>
		</Link>
	)
}
