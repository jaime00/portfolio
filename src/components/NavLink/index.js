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
        className="hover:transform hover:rotate-3 cursor-pointer nav-bar-item hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400"
      >
        <span className="capsize">{props.children}</span>
      </li>
    </Link>
  )
}
