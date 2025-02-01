import { Link } from 'wouter';
import image_profile from '../../assets/images/profile_image.jpeg';
import ButtonDarkMode from '../ButtonDarkMode';
import NavBarOptions from '../NavBarOptions/';

export default function NavBar({ changeMode, isDark }) {
  return (
    <nav className="px-4 py-3 max-w-6xl mx-auto bg-white border-gray-200 rounded dark:bg-gray-800">
      <div className="mt-3 container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex">
          <img
            loading="lazy"
            alt="Jaime Torres"
            src={image_profile}
            className="cursor-pointer col-span-1 rounded-full w-11"
          />
        </Link>
        <div className="flex md:order-2">
          <ButtonDarkMode changeMode={changeMode} isDark={isDark} />
          <button
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
        <NavBarOptions />
      </div>
    </nav>
  );
}
