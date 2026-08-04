import { floatVariants } from '@/animations'
import useDarkMode from '@/contexts/DarkMode'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { Link } from 'wouter'

import { ChevronLeftIcon } from '@/assets/animatedIcons/BackIcon'

import Background from '@/components/Background'
import FoldText from '@/components/FoldText'
import PageMeta from '@/components/PageMeta'

import { useTranslation } from '@/i18n'

const image_profile =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597423/projects/portfolio/person-head.png'

const CharacterSit =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597333/projects/portfolio/characterSit.png'

export default function NotFound() {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const iconRef = useRef(null)

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-white px-8 dark:bg-gray-800 animate-fade">
      <div className="pointer-events-none absolute inset-0">
        <Background />
      </div>
      <PageMeta titleKey="meta.notFound.title" />
      <nav className="fixed left-0 right-0 top-0 z-[999999] mx-auto w-[100vw] max-w-6xl px-4 pb-3 pt-3">
        <div className="mx-auto mt-3 flex items-center">
          <Link to="/">
            <img
              loading="lazy"
              width={48}
              height={48}
              alt="Jaime Torres Icono Navbar"
              src={image_profile}
              className="general-ring-state relative z-10 h-12 w-auto cursor-pointer select-none rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
            />
          </Link>
        </div>
      </nav>
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-6">
          <FoldText
            text="404"
            splitBy="char"
            hinge="top"
            fontSize="clamp(3rem, 8vw, 7rem)"
            fontWeight={800}
            color={isDark ? '#ffffff' : '#111827'}
            trigger="mount"
          />
          <p className="ml-1 text-2xl text-gray-500 dark:text-gray-400">
            {t('notFound.message')
              .split('URL')
              .flatMap((part, i, arr) =>
                i < arr.length - 1
                  ? [
                      part,
                      <span key={i} className="font-semibold">
                        URL
                      </span>
                    ]
                  : [part]
              )}
          </p>
          <Link
            to="/"
            className="group mt-20 inline-flex w-fit flex-col gap-0 text-gray-800 dark:text-gray-300"
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
          >
            <span className="flex items-center gap-1 font-semibold">
              <ChevronLeftIcon
                ref={iconRef}
                size={16}
                className="text-current"
              />
              {t('notFound.back')}
            </span>
            <span
              className="block h-[1.2px] mt-1 origin-left transition-transform duration-300 group-hover:scale-x-0"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </Link>
        </div>
        <motion.img
          src={CharacterSit}
          alt=""
          aria-hidden="true"
          className="pointer-events-none hidden w-72 select-none min-807:block "
          loading="lazy"
          width={305}
          height={415}
          variants={floatVariants}
          animate="animate"
        />
      </div>
    </div>
  )
}
