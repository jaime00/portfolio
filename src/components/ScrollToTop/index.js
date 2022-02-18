import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function ScrollToTop({ children }) {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [location])

	return <>{children}</>
}
