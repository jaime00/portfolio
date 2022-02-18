import React from 'react'
import { Link } from 'wouter'

export default function NavBarOptions() {
	const collapseNavbar = () => window.toggleCollapse('navbar', false)
	return (
		<div className="mt-5 text-2xl hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar">
			<ul className="space-x-8 text-lg flex flex-col md:flex-row text-center">
				<li className="hidden">
					<span className="capsize">Home</span>
				</li>
				<Link onClick={collapseNavbar} to="/" aria-current="page">
					<li className="cursor-pointer nav-bar-item block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400">
						<span className="capsize">Home</span>
					</li>
				</Link>
				<Link onClick={collapseNavbar} to="/about" aria-current="page">
					<li className="cursor-pointer nav-bar-item block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400">
						<span className="capsize">About</span>
					</li>
				</Link>
				<Link onClick={collapseNavbar} to="/projects" aria-current="page">
					<li className="cursor-pointer nav-bar-item block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400">
						<span className="capsize">Projects</span>
					</li>
				</Link>
				<Link onClick={collapseNavbar} to="/contact">
					<li className="cursor-pointer nav-bar-item block px-4 py-1 rounded-full md:bg-transparent transition-all dark:text-gray-400">
						<span className="capsize">Contact</span>
					</li>
				</Link>
			</ul>
		</div>
	)
}
