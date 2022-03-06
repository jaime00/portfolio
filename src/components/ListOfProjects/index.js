import Project from '../Project'
import { getProjects } from '../../services'

export default function ListOfProjects({ limit }) {
	const projects = getProjects({ limit })
	return (
		<div className="list-none mt-6 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{projects.map((project, i) => (
				<Project key={i} {...project} />
			))}
		</div>
	)
}
