import Project from '../Project'
import { getProjects } from '../../services'

export default function ListOfProjects({ limit }) {
	const projects = getProjects({ limit })
	return (
		<div className="list-none mt-6 mx-auto gap-5 flex flex-wrap justify-center">
			{projects.map((project, i) => (
				<Project key={i} {...project} />
			))}
		</div>
	)
}
