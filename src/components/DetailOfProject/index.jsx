import { ArrowSquareRightIcon } from '@/assets/animatedIcons/ArrowSquareRightIcon'
import { EyeIcon } from '@/assets/animatedIcons/EyeIcon'
import { FolderCodeIcon } from '@/assets/animatedIcons/FolderCode'

import GoToOption from '@/components/GoToOption'

import { useTranslation } from '@/i18n'

export default function DetailOfProject({
  urlPreview,
  urlCode,
  title,
  description,
  id,
  readingTime
}) {
  const { t } = useTranslation()
  return (
    <>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        {readingTime && (
          <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <EyeIcon size={15} />
            {readingTime} {t('projectDetail.readingTime')}
          </span>
        )}
      </div>
      <div className="mt-4">
        <span className="block text-sm text-gray-800 dark:text-gray-300 min-445:pb-10">
          {description}
        </span>
        <div className="bottom-11 mt-4 flex flex-row min-445:absolute min-445:mt-0">
          <GoToOption
            url={urlPreview}
            title={t('projects.viewProject')}
            icon={<ArrowSquareRightIcon size={25} />}
            id={id + 1}
          />
          {urlCode && (
            <GoToOption
              url={urlCode}
              title={t('common.code')}
              icon={<FolderCodeIcon size={25} />}
              id={id + 2}
            />
          )}
        </div>
      </div>
    </>
  )
}
