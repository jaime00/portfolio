import { FolderCodeIcon } from '../../assets/animatedIcons/FolderCode'
import { LinkIcon } from '../../assets/animatedIcons/LinkIcon'
import GoToOption from '../GoToOption'
import { useTranslation } from '../../i18n'

export default function DetailOfProject(props) {
  const { t } = useTranslation()
  const { url_preview, url_code, title, description, id } = props
  return (
    <>
      <h4 className="mt-5 text-xl font-semibold leading-tight">{title}</h4>
      <div className="mt-4">
        <span className="block text-sm text-gray-600 dark:text-gray-400 min-445:pb-10">
          {description}
        </span>
        <div className="bottom-11 mt-4 flex flex-row min-445:absolute min-445:mt-0">
          <GoToOption
            url={url_preview}
            title={t('projects.viewProject')}
            icon={<LinkIcon size={25} />}
            id={id + 1}
          />
          {url_code && (
            <GoToOption
              url={url_code}
              title="Code"
              icon={<FolderCodeIcon size={25} />}
              id={id + 2}
            />
          )}
        </div>
      </div>
    </>
  )
}
