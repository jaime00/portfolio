import Project from '../Project'
import { getProjects } from '../../services'

export default function ListOfProjects({ limit }) {
	const projects = getProjects({ limit })
	return (
		<div className="list-none mt-6 gap-5 flex flex-wrap justify-center py-8">
			{projects.map((project, i) => (
				<Project key={i} {...project} />
			))}
		</div>
	)
}
