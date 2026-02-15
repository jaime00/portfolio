import { getProjects } from '../../services'
import Project from '../Project'
import { useTranslation } from '../../i18n'

export default function ListOfProjects({ limit }) {
  const { language } = useTranslation()
  const projects = getProjects({ limit, lang: language })
  return (
    <div className="mt-6 flex list-none flex-wrap justify-center gap-5 py-8">
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </div>
  )
}
