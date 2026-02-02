import { Link, useLocation } from 'wouter'

export default function NavLink(props) {
  const [location] = useLocation()
  const styles =
    location === props.to
      ? {
          fontWeight: '',
          backgroundColor: 'rgb(20 184 166 / 0.7)',
          color: 'white'
        }
      : {}
  return (
    <Link {...props}>
      <li
        style={styles}
        className="nav-bar-item block cursor-pointer rounded-full px-4 py-1 transition-all hover:rotate-3 hover:transform hover:bg-gray-200 dark:text-gray-400 md:bg-transparent"
      >
        <span className="capsize">{props.children}</span>
      </li>
    </Link>
  )
}
