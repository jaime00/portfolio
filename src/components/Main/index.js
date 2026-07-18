import Button from '@/components/Button'
import CarouselOfTechnologies from '@/components/CarouselOfTechnologies'
import Presentation from '@/components/Presentation'

import { useTranslation } from '@/i18n'

export default function Main({ isDark }) {
  const { t } = useTranslation()
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex h-[83vh] max-w-6xl flex-col justify-center px-4 font-sans">
      <div className="container mx-auto flex flex-col flex-wrap gap-6">
        <Presentation />
        <div className="my-5 flex gap-3">
          <Button
            isDark={true}
            to="/contact"
            magnetic
            wrapperClassName="flex-1 md:flex-none"
          >
            {t('home.contactMe')}
          </Button>
          <Button
            isDark={false}
            to="/about"
            magnetic
            wrapperClassName="flex-1 md:flex-none"
          >
            {t('home.moreAboutMe')}
          </Button>
        </div>
        <CarouselOfTechnologies isDark={isDark} />
      </div>
    </div>
  )
}
