import ListOfProjects from '../../components/ListOfProjects'
import Titles from '../../components/Titles'
import { useTranslation } from '../../i18n'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <div className="relative my-5 mx-auto mt-8 flex max-w-6xl animate-fade flex-col justify-center px-4 font-sans dark:text-white">
      <Titles title={t('projects.title')} subtitle={t('projects.subtitle')} />
      <ListOfProjects />
    </div>
  )
}
