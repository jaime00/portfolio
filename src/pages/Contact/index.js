import { MailCheckIcon } from '../../assets/animatedIcons/EmailCheckIcon'
import { LinkedinIcon } from '../../assets/animatedIcons/LinkedinIcon'
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg'
import VintageComputer from '../../assets/images/vintage-computer.png'
import Button from '../../components/Button'
import Titles from '../../components/Titles'
import { useTranslation } from '../../i18n'

export default function Contact() {
  const { t } = useTranslation()
  const commonButtonStyles = {
    padding: '15px',
    width: '65px',
    height: '65px'
  }

  const contactMethods = [
    { type: 'email', icon: <MailCheckIcon /> },
    { openUrl: 'https://www.linkedin.com/in/jaime00/', icon: <LinkedinIcon /> },
    {
      openUrl: 'https://api.whatsapp.com/send?phone=573015834942',
      icon: <WhatsappIcon />
    }
  ]

  return (
    <div className="prose prose-lg md:prose-xl dark:prose-dark relative my-5 mx-auto mt-8 max-w-6xl animate-fade flex-col justify-center bg-white px-4 font-sans dark:bg-gray-800 dark:text-white">
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
                type={method.type}
                openUrl={method.openUrl}
                style={commonButtonStyles}
              >
                {method.icon}
              </Button>
            ))}
          </div>
        </div>
        <div className="col-span-2 mt-10 hidden md:block">
          <img
            data-src={VintageComputer}
            src={VintageComputer}
            alt="Vintage computer with drop shadow"
            className="lozad drop-shadow-effect pointer-events-none animate-fade select-none"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
