import { MailCheckIcon } from '../../assets/animatedIcons/EmailCheckIcon'
import { LinkedinIcon } from '../../assets/animatedIcons/LinkedinIcon'
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg'
import CharacterSit from '../../assets/images/characterSit.png'
import Button from '../../components/Button'
import Titles from '../../components/Titles'
import { motion } from 'motion/react'
import { toast } from 'sonner'

import { useTranslation } from '../../i18n'

export default function Contact() {
  const { t } = useTranslation()

  const email = 'imjaimetorresv@gmail.com'

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
    navigator.clipboard.writeText(email)
    toast(t('contact.emailCopied'), { icon: <CopiedIcon /> })
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
    { onClick: handleCopyEmail, icon: <MailCheckIcon />, label: 'Copy email' },
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
    <div className="relative mx-auto my-5 mt-8 max-w-6xl animate-fade flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800 dark:text-white">
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
