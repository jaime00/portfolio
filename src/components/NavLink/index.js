import { Link, useLocation } from 'wouter'

export default function NavLink(props) {
  const [location] = useLocation()
  const isActive =
    props.to === '/' ? location === props.to : location.includes(props.to)

  return (
    <li className="list-none">
      <Link {...props}>
        <span
          className={`block cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-center text-lg transition-all hover:rotate-3 hover:scale-105 ${
            isActive
              ? 'bg-gradient-to-r from-teal-500 to-teal-400 font-medium text-white shadow-lg shadow-teal-500/25 dark:from-teal-400 dark:to-emerald-400 dark:shadow-teal-400/15'
              : 'text-gray-500 hover:bg-gray-900/5 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-white/5 dark:hover:text-gray-200'
          }`}
        >
          <span className="capsize">{props.children}</span>
        </span>
      </Link>
    </li>
  )
}
