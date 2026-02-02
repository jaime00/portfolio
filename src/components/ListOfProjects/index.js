import { getProjects } from '../../services'
import Project from '../Project'

export default function ListOfProjects({ limit }) {
  const projects = getProjects({ limit })
  return (
    <div className="mt-6 flex list-none flex-wrap justify-center gap-5 py-8">
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </div>
  )
}
