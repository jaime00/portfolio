import { HyperLink } from 'smooth-components'
import { Link } from 'wouter'

import { ArrowRightIcon } from '@/assets/animatedIcons/ArrowRightIcon'

import Button from '@/components/Button'
import CarouselOfTechnologies from '@/components/CarouselOfTechnologies'
import Presentation from '@/components/Presentation'

import { useTranslation } from '@/i18n'

export default function Main() {
  const { t } = useTranslation()
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex h-[83vh] max-w-6xl flex-col justify-center px-4 font-sans">
      <div className="container mx-auto flex flex-col flex-wrap gap-6">
        <Presentation />
        <div className="my-5 flex items-center gap-5">
          <Button isDark={true} to="/contact" magnetic>
            {t('home.contactMe')}
          </Button>
          <HyperLink
            as={Link}
            to="/about"
            className="w-fit text-gray-500/90 dark:text-gray-300/90"
            contentClassName="font-semibold"
            icon={<ArrowRightIcon size={16} className="text-current" />}
            styles={{ underscoreColor: 'var(--color-primary)' }}
          >
            {t('home.moreAboutMe')}
          </HyperLink>
        </div>
        <CarouselOfTechnologies />
      </div>
    </div>
  )
}
