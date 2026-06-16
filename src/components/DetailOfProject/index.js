import { FolderCodeIcon } from '../../assets/animatedIcons/FolderCode'
import { LinkIcon } from '../../assets/animatedIcons/LinkIcon'
import GoToOption from '../GoToOption'
import { useTranslation } from '../../i18n'

export default function DetailOfProject({
  urlPreview,
  urlCode,
  title,
  description,
  id
}) {
  const { t } = useTranslation()
  return (
    <>
      <h3 className="mt-5 text-xl font-semibold leading-tight">{title}</h3>
      <div className="mt-4">
        <span className="block text-sm text-gray-800 dark:text-gray-300 min-445:pb-10">
          {description}
        </span>
        <div className="bottom-11 mt-4 flex flex-row min-445:absolute min-445:mt-0">
          <GoToOption
            url={urlPreview}
            title={t('projects.viewProject')}
            icon={<LinkIcon size={25} />}
            id={id + 1}
          />
          {urlCode && (
            <GoToOption
              url={urlCode}
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
