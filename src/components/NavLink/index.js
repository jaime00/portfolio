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
        className="nav-bar-item block cursor-pointer rounded-full px-4 py-1 transition-all hover:scale-105 hover:rotate-3 hover:transform hover:bg-gray-300 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:bg-transparent"
      >
        <span className="capsize">{props.children}</span>
      </li>
    </Link>
  )
}
