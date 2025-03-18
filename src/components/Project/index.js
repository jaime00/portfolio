import DetailOfProject from '../DetailOfProject'
import StackOfProject from '../StackOfProject'

export default function Project(props) {
	const { url_preview, url_code, title, description, img, stack, id } = props
	return (
		<>
			<div className="wrapper antialiased text-gray-900 min-w-[350px] max-w-[405px] hover:scale-105 transition-all duration-700">
				<div>
					<img
						style={{
							height: '260px',
						}}
						loading="lazy"
						src={img}
						alt={title}
						className="w-full object-cover object-center rounded-lg shadow-md"
					/>
					<div className="relative px-4 -mt-16">
						<div className="bg-white dark:bg-gray-900 dark:text-white p-5 rounded-lg shadow-lg h-72 sm:pb-5">
							<StackOfProject stacks={stack} />
							<DetailOfProject url_preview={url_preview} url_code={url_code} title={title} description={description} id={id} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
