import { useTranslation } from '@/i18n'

export default function PageMeta({
  titleKey,
  descriptionKey,
  title,
  description
}) {
  const { t } = useTranslation()
  const resolvedTitle = title || (titleKey && t(titleKey))
  const resolvedDescription =
    description || (descriptionKey && t(descriptionKey))
  return (
    <>
      {resolvedTitle && <title>{resolvedTitle}</title>}
      {resolvedDescription && (
        <meta name="description" content={resolvedDescription} />
      )}
    </>
  )
}
