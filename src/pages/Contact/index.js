import Button from '../../components/Button';
import Titles from '../../components/Titles';
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import VintageComputer from '../../assets/images/vintage-computer.png';

export default function Contact() {
  const commonButtonStyles = {
    padding: '15px',
    width: '65px',
    height: '65px',
  };

  const contactMethods = [
    { type: 'email', icon: <EmailIcon /> },
    { openUrl: 'https://www.linkedin.com/in/jaime00/', icon: <LinkedinIcon /> },
    {
      openUrl: 'https://api.whatsapp.com/send?phone=573015834942',
      icon: <WhatsappIcon />,
    },
  ];

  return (
    <div className="animate-fade mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
      <Titles className="float-left" title="Contact" subtitle="Interested in my work?" />
      <div className="grid items-center grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12 my-auto">
        <div className="col-span-3">
          <p className="mb-10 text-xl">
            Got a question, proposal or project or want to work together on something?
            Feel free to reach out.
          </p>
          <div className="text-center flex gap-3 justify-center">
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
            className="animate-fade lozad drop-shadow-effect select-none pointer-events-none"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
