import Button from '../../components/Button';
import Titles from '../../components/Titles';
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';

export default function Contact() {
  const commonStyles = {
    padding: '15px',
    width: '65px',
    height: '65px',
  };
  return (
    <div className="mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
      <Titles className="float-left" title="Contact" subtitle="Interested in my work?" />
      <div className="grid items-center grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12 my-auto">
        <div className="col-span-3">
          <p className="mb-10 text-xl">
            Got a question, proposal or project or want to work together on something?
            Feel free to reach out.
          </p>
          <div className="text-center flex gap-3 justify-center">
            <Button type="email" style={commonStyles}>
              <EmailIcon />
            </Button>
            <Button openUrl="https://www.linkedin.com/in/jaime00/" style={commonStyles}>
              <LinkedinIcon />
            </Button>
            <Button
              openUrl="https://api.whatsapp.com/send?phone=573015834942"
              style={commonStyles}
            >
              <WhatsappIcon />
            </Button>
          </div>
        </div>
        <div className="col-span-2 mt-10 hidden md:block">
			<img
				src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vintage-computer-PzwixPG5hMbJUAXd7D6bPoJUrS7JTJ.png"
				alt="Vintage computer with drop shadow"
				className="drop-shadow-effect select-none pointer-events-none"
			/>
        </div>
      </div>
    </div>
  );
}
