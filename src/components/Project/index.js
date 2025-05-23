import DetailOfProject from '../DetailOfProject'
import StackOfProject from '../StackOfProject'

export default function Project(props) {
	const { url_preview, url_code, title, description, img, stack, id } = props
	return (
		<>
			<div className="wrapper antialiased text-gray-900 min-w-[350px] max-w-[405px] group">
				<div className='overflow-hidden hover:rounded-lg'>
					<img
						lazy="true"
						style={{
							height: '260px',
						}}
						src={img}
						alt={title}
						className="w-full rounded-lg shadow-md transition-all duration-700 group-hover:scale-110 object-cover object-top"
					/>
					<div className="relative px-4 -mt-16">
						<div className="bg-white dark:bg-gray-900 dark:text-white p-5 rounded-lg shadow-lg h-80 sm:pb-5">
							<StackOfProject stacks={stack} />
							<DetailOfProject url_preview={url_preview} url_code={url_code} title={title} description={description} id={id} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
