import React from 'react'
import image_profile from '../../assets/images/profile_image.png'
import Titles from '../../components/Titles'

export default function MyHistory() {
	return (
		<div className="">
			<Titles title="About me" subtitle="Here's my story." />
			<section className="text-xl leading-8 text-gray-600 dark:text-gray-300">
				<br />
				<p>
					I'm a <b>Systems Engineer</b>, creative developer specializing in <b>Front-End</b>. With more than 2 years of experience adding value to
					business processes in the commercial and public service sectors.
				</p>
				<br />
				<p>
					Currently working as a <b>Technical Lead</b> at{' '}
					<b>
						<a href="https://www.extreme.com.co/web" target="_blank" rel="noopener noreferrer">
							Extreme Technologies
						</a>
					</b>
					, implementing functional, scalable and reusable code solutions throughout my career, aligned with user needs and business goals. In
					addition to technically coordinating and mentoring a development team in their day-to-day activities, careers and technical growth.
				</p>
				<br />

				<p>
					Experience and advanced knowledge in technologies such as <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <b>Typescript</b>, <b>React JS</b>,{' '}
					<b>Styled Components</b>, <b>Context</b>, <b>Motion framer</b>, version control with <b>Git</b>, management of agile work methodologies such
					as <b>SCRUM</b> and <b>Kanban</b>.
				</p>
				<div className="mt-5 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
					<div className="col-span-1">
						<span>
							<span></span>
							<img
								data-nimg="responsive"
								alt="Jaime Torres"
								src={image_profile}
								className="col-span-1 rounded-xl group-hover:opacity-75"
								decoding="async"
								sizes="100vw"
							/>
						</span>
					</div>
					<div className="col-span-3">
						<p className="mt-7">
							Skills in problem solving, teamwork, learning ability and adaptability to different environments. Lover of great challenges and with a
							great investigative character.
						</p>
						<br />
						<p>
							If you want to know a little more you can find me on{' '}
							<b>
								<a href="https://www.linkedin.com/in/jaime00" target="_blank" rel="noopener noreferrer">
									Linkedin
								</a>
							</b>{' '}
							and connect with me, you can even follow me on{' '}
							<b>
								<a href="https://github.com/jaime00" target="_blank" rel="noopener noreferrer">
									Github
								</a>
							</b>{' '}
							and take a look at my open source projects.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
