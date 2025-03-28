import vintage_computer from '../../assets/images/vintage-computer.png'
import Button from '../../components/Button'
import Titles from '../../components/Titles'
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg'

export default function Contact() {
	const commonStyles = {
		padding: '15px',
		width: '65px',
		height: '65px',
	}
	return (
		<div className="mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
			<Titles className="float-left" title="Contact" subtitle="Interested in my work?" />
			<div className="grid items-center grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12 my-auto">
				<div className="col-span-3">
					<p className="mb-10 text-xl">Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
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
					<span
						style={{
							boxSizing: 'border-box',
							display: 'block',
							overflow: 'hidden',
							width: 'initial',
							height: 'initial',
							background: 'none',
							opacity: 1,
							border: '0px',
							margin: '0px',
							padding: '0px',
							position: 'relative',
						}}
					>
						<span
							style={{
								boxSizing: 'border-box',
								display: 'block',
								width: 'initial',
								height: 'initial',
								background: 'none',
								opacity: 1,
								border: '0px',
								margin: '0px',
								padding: '100% 0px 0px',
							}}
						/>
						<img
							loading="lazy"
							alt="article cover"
							src={vintage_computer}
							decoding="async"
							data-nimg="responsive"
							className="rounded-xl group-hover:opacity-75 select-none pointer-events-none"
							style={{
								position: 'absolute',
								inset: '0px',
								boxSizing: 'border-box',
								padding: '0px',
								border: 'none',
								margin: 'auto',
								display: 'block',
								width: '0px',
								height: '0px',
								minWidth: '100%',
								maxWidth: '100%',
								minHeight: '100%',
								maxHeight: '100%',
								objectFit: 'cover',
								filter: "hue-rotate(90deg)"
							}}
							sizes="100vw"
							srcSet={vintage_computer}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
