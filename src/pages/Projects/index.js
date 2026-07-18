import useDarkMode from '@/contexts/DarkMode'

import ListOfProjects from '@/components/ListOfProjects'
import PageMeta from '@/components/PageMeta'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import { useTranslation } from '@/i18n'

export default function Projects() {
  const { t } = useTranslation()
  const { isDark } = useDarkMode()
  return (
    <div className="relative mx-auto mb-5 mt-8 flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
      <PageMeta
        titleKey="meta.projects.title"
        descriptionKey="meta.projects.description"
      />
      <Titles
        title={t('projects.title')}
        subtitle={
          <ShinyText
            text={t('projects.subtitle')}
            color={isDark ? '#d4d4d4' : '#262626'}
            shineColor={isDark ? '#ffffff' : '#d4d4d4'}
            spread={isDark ? 60 : 120}
            speed={3}
          />
        }
      />
      <ListOfProjects />
    </div>
  )
}
