import { Link } from 'wouter'

import PageMeta from '@/components/PageMeta'

import { useTranslation } from '@/i18n'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center animate-fade">
      <PageMeta titleKey="meta.notFound.title" />
      <p className="font-display text-8xl font-bold text-teal-500">404</p>
      <p className="text-2xl font-semibold text-gray-800 dark:text-white">
        {t('notFound.title')}
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        {t('notFound.message')}
      </p>
      <Link
        to="/"
        className="rounded-full bg-teal-500 px-8 py-3 text-sm font-medium text-white transition-all hover:brightness-105"
      >
        {t('notFound.back')}
      </Link>
    </div>
  )
}
