import { useState } from 'react'
import './styles/output.css'
import './styles/general.css'
import { Route, Redirect } from 'wouter'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Background from './components/Background'
import Experiences from './pages/Experiences';

function App() {
	const [isDark, setIsDark] = useState(false)
	const changeMode = () => {
		if (isDark) {
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}
		setIsDark(!isDark)
	}
	return (
		<div className="dark:bg-gray-800 pt-2">
			<Background />
			<NavBar changeMode={changeMode} isDark={isDark} />
			<ScrollToTop>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/experiences">
					<Experiences />
				</Route>
			</ScrollToTop>
			<Footer />
			<Redirect to="/" />
		</div>
	)
}

export default App
