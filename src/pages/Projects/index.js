import ListOfProjects from '@/components/ListOfProjects'
import ShinyText from '@/components/ShinyText'
import Titles from '@/components/Titles'

import useDarkMode from '@/hooks/useDarkMode'

import { useTranslation } from '@/i18n'

export default function Projects() {
  const { t } = useTranslation()
  const isDark = useDarkMode()
  return (
    <div className="relative mx-auto mb-5 mt-8 flex max-w-6xl animate-fade flex-col justify-center px-4 font-sans dark:text-white">
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
