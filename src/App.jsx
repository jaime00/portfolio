import DarkModeProvider from '@/contexts/DarkMode'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Route, Switch, useLocation } from 'wouter'

import Background from '@/components/Background'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'

import { LanguageProvider, useTranslation } from '@/i18n'

import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import ProjectDetail from '@/pages/ProjectDetail'
import Projects from '@/pages/Projects'

import '@/styles/general.css'
import '@/styles/tailwind.css'

const KNOWN_ROUTES = ['/', '/about', '/side-projects', '/contact']

function isKnownRoute(path) {
  if (KNOWN_ROUTES.includes(path)) return true
  if (
    path.startsWith('/side-projects/') &&
    path.length > '/side-projects/'.length
  )
    return true
  return false
}

function SkipLink() {
  const { t } = useTranslation()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999999] focus:rounded-lg focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
    >
      {t('common.skipToContent')}
    </a>
  )
}

function AppContent() {
  const [location] = useLocation()
  const known = isKnownRoute(location)

  return (
    <>
      {known ? (
        <div className="min-h-screen bg-white pt-2 dark:bg-gray-800">
          <SkipLink />
          <Background />
          <NavBar />
          <main id="main-content" className="mt-28">
            <ScrollToTop>
              <ErrorBoundary>
                <Switch>
                  <Route path="/">
                    <Home />
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
                </Switch>
              </ErrorBoundary>
            </ScrollToTop>
          </main>
          <Footer />
          <MusicPlayer />
        </div>
      ) : (
        <ErrorBoundary>
          <NotFound />
        </ErrorBoundary>
      )}
    </>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <LanguageProvider>
          <DarkModeProvider>
            <AppContent />
          </DarkModeProvider>
        </LanguageProvider>
      </LazyMotion>
    </MotionConfig>
  )
}

export default App
