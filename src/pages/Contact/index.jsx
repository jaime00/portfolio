import { floatVariants } from '@/animations'
import useDarkMode from '@/contexts/useDarkMode'
import { m } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { GithubIcon } from '@/assets/animatedIcons/GithubIcon'
import { LinkedinIcon } from '@/assets/animatedIcons/LinkedinIcon'

import Button from '@/components/Button'
import PageMeta from '@/components/PageMeta'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

const WHATSAPP_ICON =
  'https://res.cloudinary.com/personal-jaime00/image/upload/v1784587275/projects/portfolio/whatsapp.svg'

const CharacterSit =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597333/projects/portfolio/characterSit.png'

const EMAIL = 'imjaimetorresv@gmail.com'

const CONTACT_METHODS = [
  {
    openUrl: 'https://linkedin.com/in/jaimetorresv',
    icon: <LinkedinIcon className="text-white" />,
    label: 'LinkedIn'
  },
  {
    openUrl: 'https://github.com/jaime00',
    icon: <GithubIcon className="text-white" />,
    label: 'GitHub'
  },
  {
    openUrl: 'https://api.whatsapp.com/send?phone=573015834942',
    icon: <img src={WHATSAPP_ICON} alt="WhatsApp" width={28} height={28} />,
    label: 'WhatsApp'
  }
]

const characterVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  },
  float: floatVariants.animate
}

export default function Contact() {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const resetTimerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(resetTimerRef.current)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true)
        clearTimeout(resetTimerRef.current)
        resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <div className="relative mx-auto mb-5 mt-8 flex min-h-[calc(100vh-20rem)] max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
      <PageMeta
        titleKey="meta.contact.title"
        descriptionKey="meta.contact.description"
      />
      <Titles
        className="float-left"
        title={t('contact.title')}
        subtitle={
          <ShinyText
            text={t('contact.subtitle')}
            color={isDark ? '#d4d4d4' : '#262626'}
            shineColor={isDark ? '#ffffff' : '#d4d4d4'}
            spread={isDark ? 60 : 120}
            speed={3}
          />
        }
      />
      <div className="my-auto grid grid-cols-1 items-center gap-y-8 md:grid-cols-5 md:gap-x-12">
        <div className="col-span-3">
          <p className="mb-10 text-xl">{t('contact.question')}</p>
          <div className="flex justify-center gap-3 text-center">
            {CONTACT_METHODS.map((method) => (
              <Button
                key={method.label}
                size="icon"
                ariaLabel={method.label}
                onClick={method.onClick}
                openUrl={method.openUrl}
                magnetic
              >
                {method.icon}
              </Button>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            <span className="relative inline-block">
              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="cursor-pointer transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                {EMAIL}
              </button>
              <span
                className={`pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 transition-all duration-150 ${copied || hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              >
                <span className="relative flex items-center rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <span className="text-xs leading-none font-medium text-white/80">
                    {copied ? t('contact.emailCopied') : t('contact.copyLink')}
                  </span>
                  <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-neutral-900" />
                </span>
              </span>
            </span>
          </p>
        </div>
        <div className="col-span-2 mt-10 hidden pb-8 md:flex md:justify-center">
          <m.img
            src={CharacterSit}
            alt="Character on the side"
            className="pointer-events-none select-none"
            loading="lazy"
            width={305}
            height={415}
            variants={characterVariants}
            initial="initial"
            animate={['animate', 'float']}
          />
        </div>
      </div>
    </div>
  )
}
