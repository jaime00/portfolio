import { floatVariants } from '@/animations'
import useDarkMode from '@/contexts/DarkMode'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { CopyIcon } from '@/assets/animatedIcons/CopyIcon'
import { MailCheckIcon } from '@/assets/animatedIcons/EmailCheckIcon'
import { LinkedinIcon } from '@/assets/animatedIcons/LinkedinIcon'
import WhatsappIcon from '@/assets/icons/whatsapp.svg?react'

import Button from '@/components/Button'
import PageMeta from '@/components/PageMeta'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

const CharacterSit =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597333/projects/portfolio/characterSit.png'

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
  const resetTimerRef = useRef(null)

  const email = 'imjaimetorresv@gmail.com'

  useEffect(() => {
    return () => clearTimeout(resetTimerRef.current)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true)
        clearTimeout(resetTimerRef.current)
        resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  const contactMethods = [
    {
      onClick: handleCopyEmail,
      icon: (
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <CopyIcon autoAnimate />
            </motion.div>
          ) : (
            <motion.div
              key="mail"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 90 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <MailCheckIcon />
            </motion.div>
          )}
        </AnimatePresence>
      ),
      label: t('contact.copyEmailLabel')
    },
    {
      openUrl: 'https://linkedin.com/in/jaimetorresv',
      icon: <LinkedinIcon />,
      label: 'LinkedIn'
    },
    {
      openUrl: 'https://api.whatsapp.com/send?phone=573015834942',
      icon: <WhatsappIcon />,
      label: 'WhatsApp'
    }
  ]

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
            {contactMethods.map((method, index) => (
              <Button
                key={index}
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
                className="cursor-pointer transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                {email}
              </button>
              <span
                className={`pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 transition-all duration-150 ${copied ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              >
                <span className="relative flex items-center rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <span className="text-xs leading-none font-medium text-white/80">
                    {t('contact.emailCopied')}
                  </span>
                  <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-neutral-900" />
                </span>
              </span>
            </span>
          </p>
        </div>
        <div className="col-span-2 mt-10 hidden pb-8 md:flex md:justify-center">
          <motion.img
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
