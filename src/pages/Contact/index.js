import React from 'react'
import Button from '../../components/Button'
import Titles from '../../components/Titles'
import ilustration_computer from '../../assets/images/ilustration_computer.png'

export default function Contact() {
	return (
		<div className="mt-8 my-5 flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:text-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
			<Titles className="float-left" title="Contact" subtitle="Interested in my work?" />
			<div className="grid items-center grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12 my-auto">
				<div className="col-span-3">
					<p className="mb-10 text-xl">Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
					<Button type="email" className="mt-100 text-">
						Send me an mail
					</Button>
				</div>
				<div className="col-span-2 mt-10">
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
							src={ilustration_computer}
							decoding="async"
							data-nimg="responsive"
							className="rounded-xl group-hover:opacity-75"
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
							}}
							sizes="100vw"
							srcSet={ilustration_computer}
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
