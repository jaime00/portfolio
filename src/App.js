import { useEffect, useState } from 'react';
import './styles/output.css';
import './styles/general.css';
import { Route, Redirect, Switch } from 'wouter';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Background from './components/Background';
import Experiences from './pages/Experiences';

function App() {
  const [isDark, setIsDark] = useState(!!eval(localStorage.isDark));
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const changeMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.isDark = !isDark;
    setIsDark(!isDark);
  };
  return (
    <div className="dark:bg-gray-800 pt-2">
      <Background />
      <NavBar changeMode={changeMode} isDark={isDark} />
      <ScrollToTop>
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
      <Footer />
    </div>
  );
}

export default App;
