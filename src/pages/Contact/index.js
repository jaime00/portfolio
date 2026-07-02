import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import { CopyIcon } from '@/assets/animatedIcons/CopyIcon'
import { MailCheckIcon } from '@/assets/animatedIcons/EmailCheckIcon'
import { LinkedinIcon } from '@/assets/animatedIcons/LinkedinIcon'
import { ReactComponent as WhatsappIcon } from '@/assets/icons/whatsapp.svg'

import Button from '@/components/Button'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

const CharacterSit =
  'https://res.cloudinary.com/personal-jaime00/image/upload/f_auto,q_auto/v1782597333/projects/portfolio/characterSit.png'

export default function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef(null)

  const email = 'imjaimetorresv@gmail.com'

  useEffect(() => {
    return () => clearTimeout(resetTimerRef.current)
  }, [])

  const CopiedIcon = () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-teal-500"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
      />
    </motion.svg>
  )

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true)
        toast(t('contact.emailCopied'), { icon: <CopiedIcon /> })
        clearTimeout(resetTimerRef.current)
        resetTimerRef.current = setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  const characterVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    },
    float: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
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
      label: 'Copy email'
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
    <div className="relative mx-auto mb-5 mt-8 flex min-h-[calc(100vh-20rem)] max-w-6xl animate-fade flex-col justify-center px-4 font-sans dark:text-white">
      <Titles
        className="float-left"
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
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
              >
                {method.icon}
              </Button>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="cursor-pointer transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            >
              {email}
            </button>
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
