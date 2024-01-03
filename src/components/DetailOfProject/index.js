import { ReactComponent as ExternalLink } from '../../assets/images/icons/external_link.svg'
import { ReactComponent as Code } from '../../assets/images/icons/code.svg'

import GoToOption from '../GoToOption'

export default function DetailOfProject(props) {
	const { url_preview, url_code, title, description, id } = props
	return (
		<>
			<h4 className="mt-5 text-xl font-semibold  leading-tight ">{title}</h4>
			<div className="mt-4">
				<span className="text-sm text-gray-600 dark:text-gray-400">{description}</span>
				<div className="flex flex-row mt-3">
					<GoToOption url={url_preview} title="Preview" icon={<ExternalLink />} id={id + 1} />
					{url_code && <GoToOption url={url_code} title="Go to code" icon={<Code />} id={id + 2} />}
				</div>
			</div>
		</>
	)
}
