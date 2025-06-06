import { Link } from 'wouter';
import image_profile from '../../assets/images/person-head.png';
import ButtonDarkMode from '../ButtonDarkMode';
import NavBarOptions from '../NavBarOptions/';
import { useEffect, useState } from 'react';

export default function NavBar({ changeMode, isDark }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Cambia el valor si quieres que aparezca antes o después
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed z-[999999] left-0 top-0 right-0 w-[100vw] animate-fade px-4 py-3 max-w-6xl mx-auto border-gray-200 rounded transition-colors duration-300 ${
        scrolled ? 'bg-white/20 dark:bg-gray-800/20' : 'bg-transparent'
      }`}
    >
      <div className="mt-3 container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex">
          <img
            loading="lazy"
            alt="Jaime Torres"
            src={image_profile}
            className="select-none cursor-pointer col-span-1 flex items-center justify-center w-auto h-12 rounded-full dark:bg-midnight general-ring-state transition-all hover:scale-110 active:scale-95 duration-500"
          />
        </Link>
        <div className="flex md:order-2">
          <ButtonDarkMode changeMode={changeMode} isDark={isDark} />
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            data-collapse-toggle="navbar"
            type="button"
            className="inline-flex items-center p-2 ml-5 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <NavBarOptions menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </nav>
  );
}
