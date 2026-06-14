import { useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'wouter'
import { Toaster } from 'sonner'
import { MotionConfig } from 'motion/react'

import Background from './components/Background'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { LanguageProvider } from './i18n'

import './styles/general.css'
import './styles/output.css'

function App() {
  const [isDarkState, setIsDarkState] = useState(localStorage.isDark === 'true')

  useEffect(() => {
    if (isDarkState) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkState])

  const changeMode = () => {
    const toggleTheme = () => {
      localStorage.isDark = !isDarkState
      setIsDarkState(!isDarkState)
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (!document.startViewTransition || isSafari) {
      toggleTheme()
    } else {
      document.startViewTransition(toggleTheme)
    }
  }
  return (
    <MotionConfig reducedMotion="never">
      <LanguageProvider>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(20, 184, 166, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(20, 184, 166, 0.05)',
              borderRadius: '16px',
              color: '#1f2937'
            },
            className:
              'dark:!bg-gray-800/80 dark:!text-white dark:!border-teal-400/10'
          }}
        />
        <div className="pt-2 dark:bg-gray-800">
          <Background />
          <NavBar changeMode={changeMode} isDark={isDarkState} />
          <div className="mt-28">
            <ScrollToTop>
              <Switch>
                <Route path="/">
                  <Home isDark={isDarkState} />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/side-projects">
                  <Projects />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/experiences">
                  <Experiences />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </ScrollToTop>
          </div>
          <Footer />
          <MusicPlayer />
        </div>
      </LanguageProvider>
    </MotionConfig>
  )
}

export default App
