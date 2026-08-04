import { useTranslation } from '@/i18n'

export default function PageMeta({ titleKey, title, descriptionKey }) {
  const { t } = useTranslation()
  return (
    <>
      <title>{title ?? t(titleKey)}</title>
      {descriptionKey && (
        <meta name="description" content={t(descriptionKey)} />
      )}
    </>
  )
}
