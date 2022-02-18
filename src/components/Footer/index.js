import React from 'react'
import { Link } from 'wouter'
import { ReactComponent as LinkedinIcon } from '../../assets/images/icons/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/icons/instagram.svg'
import { ReactComponent as GithubIcon } from '../../assets/images/icons/github.svg'
import { getCurriculumUrl } from '../../services'
import Top from '../Top'

export default function Footer() {
	const curriculumUrl = getCurriculumUrl()
	return (
		<div className="flex flex-col mx-auto max-w-6xl justify-center px-4 prose prose-lg md:prose-xl dark:prose-dark relative p-4 bg-white sm:p-6 dark:bg-gray-800 font-sans">
			<hr className="my-12 dark:border-gray-700" />
			<footer className="">
				<div className="md:flex md:justify-between mx-5 mb-12 align-middle">
					<div className="grid grid-cols-2 sm:gap-20">
						<div>
							<h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">General</h3>
							<ul>
								<li className="mb-4">
									<Link to="/" className="text-gray-600 hover:underline dark:text-gray-400">
										Home
									</Link>
								</li>
								<li className="mb-4">
									<Link to="/about" className="text-gray-600 hover:underline dark:text-gray-400">
										About
									</Link>
								</li>
								<li className="mb-4">
									<Link to="/projects" className="text-gray-600 hover:underline dark:text-gray-400">
										Projects
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Extra</h3>
							<ul>
								<li className="mb-4">
									<a href={curriculumUrl} target="_blank" rel="noreferrer" className="text-gray-600 hover:underline dark:text-gray-400">
										Resume
									</a>
								</li>
								<li className="mb-4">
									<Link to="/contact" className="text-gray-600 hover:underline dark:text-gray-400">
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex items-center sm:mt-5">
						<Top />
					</div>
				</div>
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-base text-gray-500 sm:text-center dark:text-gray-400">© 2022 Jaime Torres</span>
					<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
						<a
							href="https://www.linkedin.com/in/jaime00"
							target="_blank"
							rel="noreferrer"
							className="hover:rotate-6 transition text-gray-500 hover:text-black dark:hover:text-white"
						>
							<LinkedinIcon />{' '}
						</a>
						<a
							href="https://www.instagram.com/imjaimito/"
							target="_blank"
							rel="noreferrer"
							className="hover:rotate-6 text-gray-500 hover:text-black dark:hover:text-white"
						>
							<InstagramIcon />{' '}
						</a>
						<a href="https://github.com/jaime00" target="_blank" rel="noreferrer" className="hover:rotate-6 text-gray-500 hover:text-black dark:hover:text-white">
							<GithubIcon />
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
