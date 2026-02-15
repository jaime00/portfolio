import Button from '../Button'
import CarouselOfTechnologies from '../CarouselOfTechnologies'
import Presentation from '../Presentation'
import { useTranslation } from '../../i18n'

export default function Main({ isDark }) {
  const { t } = useTranslation()
  return (
    <main className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex h-[83vh] max-w-6xl flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800">
      <div className="container mx-auto flex flex-col flex-wrap gap-6">
        <Presentation isDark={isDark} />
        <div className="my-5 space-y-6 md:space-y-0 md:space-x-4">
          <Button isDark={true} to="/contact">
            {t('home.contactMe')}
          </Button>
          <Button isDark={false} to="/about">
            {t('home.moreAboutMe')}
          </Button>
        </div>
        <CarouselOfTechnologies isDark={isDark} />
      </div>
    </main>
  )
}
