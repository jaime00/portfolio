import { useTranslation } from '@/i18n'

export default function PageMeta({ titleKey, descriptionKey }) {
  const { t } = useTranslation()
  return (
    <>
      <title>{t(titleKey)}</title>
      {descriptionKey && (
        <meta name="description" content={t(descriptionKey)} />
      )}
    </>
  )
}
