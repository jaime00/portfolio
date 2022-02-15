import React from 'react'
import ListOfProjects from '../../components/ListOfProjects'
import Titles from '../../components/Titles'

export default function Projects() {
	return (
		<div className="mt-8 my-5 flex flex-col mx-auto max-w-6xl justify-center px-4 relative font-sans dark:text-white">
			<Titles title="Projects" subtitle="A selection of my favorite works." />
			<ListOfProjects />
		</div>
	)
}
