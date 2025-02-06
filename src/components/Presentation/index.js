import image_profile from '../../assets/images/profile_image.jpeg'

export default function Presentation() {
	return (
		<div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6 mb-5">
			<h1 className="text-left mx-2 order-2 col-span-5 text-gray-900 dark:text-white font-extrabold text-4xl leading-tight md:order-1 sm:text-5xl">
				I'm <span className="text-teal-400 dark:text-teal-300">Jaime</span>. I'm a Software Developer specialized in <span className="text-teal-400 dark:text-teal-300">Frontend</span>.
			</h1>
			<div className="mx-auto order-1 hidden md:block">
				<span>
					<img loading="lazy" alt="Jaime Torres" src={image_profile} className="col-span-1 rounded-full opacity-100" />
				</span>
			</div>
		</div>
	)
}
