import { useRef } from 'react'
import { Link } from 'wouter'

import ArrowRightIcon from '@/assets/animatedIcons/ArrowRightIcon'

import Button from '@/components/Button'
import CarouselOfTechnologies from '@/components/CarouselOfTechnologies'
import Presentation from '@/components/Presentation'

import { useTranslation } from '@/i18n'

export default function Main() {
  const { t } = useTranslation()
  const iconRef = useRef(null)
  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative mx-auto flex h-[83vh] max-w-6xl flex-col justify-center px-4 font-sans">
      <div className="container mx-auto flex flex-col flex-wrap gap-6">
        <Presentation />
        <div className="my-5 flex items-center gap-5">
          <Button
            isDark={true}
            to="/contact"
            magnetic
            // wrapperClassName="md:flex-none"
          >
            {t('home.contactMe')}
          </Button>
          <Link
            to="/about"
            className="group inline-flex w-fit flex-col gap-0 text-gray-500/90 dark:text-gray-300/90"
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
          >
            <span className="flex items-center gap-1 font-semibold">
              {t('home.moreAboutMe')}
              <ArrowRightIcon
                ref={iconRef}
                size={16}
                className="text-current"
              />
            </span>
            <span
              className="block h-[1.2px] mt-1 origin-left transition-transform duration-300 group-hover:scale-x-0"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </Link>
        </div>
        <CarouselOfTechnologies />
      </div>
    </div>
  )
}
