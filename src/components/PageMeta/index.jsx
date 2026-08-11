import { useLocation } from 'wouter'

import { useTranslation } from '@/i18n'

const BASE_URL = 'https://jaimetorresv.com'
const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/personal-jaime00/image/upload/v1785278200/projects/portfolio/opengraph.png'

export default function PageMeta({
  titleKey,
  title,
  descriptionKey,
  description,
  ogImage
}) {
  const { t } = useTranslation()
  const [location] = useLocation()

  const resolvedTitle = title ?? t(titleKey)
  const resolvedDescription =
    description ?? (descriptionKey ? t(descriptionKey) : null)
  const ogUrl = `${BASE_URL}${location}`
  const ogImg = ogImage ?? DEFAULT_OG_IMAGE

  return (
    <>
      <title>{resolvedTitle}</title>
      {resolvedDescription && (
        <meta name="description" content={resolvedDescription} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={resolvedTitle} />
      {resolvedDescription && (
        <meta property="og:description" content={resolvedDescription} />
      )}
      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content="Jaime Torres" />
    </>
  )
}
