import Button from '../Button'
import ListOfProjects from '../ListOfProjects'
import { useTranslation } from '../../i18n'

const quantityOfProjectsInHome = 3

export default function SectionProjects() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
        <h2 className="my-8 text-4xl font-bold">{t('home.iLoveSharing')}</h2>
        <p className="md:text-xl">{t('home.checkProjects')}</p>
        <ListOfProjects limit={quantityOfProjectsInHome} />

        {quantityOfProjectsInHome > 3 && (
          <div className="w-50 mx-5 mt-10">
            <Button to="/side-projects">{t('home.seeAllProjects')}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
