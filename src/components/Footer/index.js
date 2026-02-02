import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg'
import { getCurriculumUrl } from '../../services'
import Top from '../Top'
import { Link } from 'wouter'

export default function Footer() {
  const curriculumUrl = getCurriculumUrl()
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex max-w-6xl animate-fade flex-col justify-center bg-white p-4 px-4 font-sans dark:bg-gray-800 sm:p-6">
      <hr className="my-12 dark:border-gray-700" />
      <footer className="">
        <div className="mx-5 mb-12 align-middle md:flex md:justify-between">
          <div className="grid grid-cols-2 sm:gap-20">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                General
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/side-projects"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Extra
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href={curriculumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Resume
                  </a>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-7 flex items-center">
            <Top />
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-gray-500 dark:text-gray-400 sm:text-center">
            © 2022 Jaime Torres
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.linkedin.com/in/jaime00"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 transition hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <LinkedinIcon />{' '}
            </a>
            <a
              href="https://github.com/jaime00"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:rotate-6 hover:text-black dark:hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
