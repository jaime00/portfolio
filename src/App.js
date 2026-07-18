import { MotionConfig } from 'motion/react'
import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import { Redirect, Route, Switch } from 'wouter'

import Background from '@/components/Background'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'

import { LanguageProvider } from '@/i18n'

import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Experiences from '@/pages/Experiences'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'
import Projects from '@/pages/Projects'

import '@/styles/general.css'
import '@/styles/output.css'

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
    <MotionConfig reducedMotion="user">
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
        <div className="min-h-screen bg-white pt-2 dark:bg-gray-800">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999999] focus:rounded-lg focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to content
          </a>
          <Background />
          <NavBar changeMode={changeMode} isDark={isDarkState} />
          <main id="main-content" className="mt-28">
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
                <Route path="/side-projects/:slug">
                  {(params) => <ProjectDetail slug={params.slug} />}
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
          </main>
          <Footer />
          <MusicPlayer />
        </div>
      </LanguageProvider>
    </MotionConfig>
  )
}

export default App
