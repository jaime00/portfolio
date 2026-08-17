import { EASE_OUT_EXPO as ease } from '@/animations'
import { m } from 'motion/react'
import { useEffect, useRef } from 'react'

import { ConstructionIcon } from '@/assets/animatedIcons/ConstructionIcon'

import Project from '@/components/Project'

import { useTranslation } from '@/i18n'

import { getProjects } from '@/services'

export default function ListOfProjects({ limit }) {
  const { language, t } = useTranslation()
  const projects = getProjects({ limit, lang: language })
  const iconRef = useRef(null)

  useEffect(() => {
    if (!limit) {
      const icon = iconRef.current
      icon?.startAnimation()
      return () => icon?.stopAnimation()
    }
  }, [limit])

  return (
    <div className="mt-6 flex list-none flex-wrap justify-center gap-5 py-8">
      {projects.map((project, i) => (
        <m.div
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease }}
        >
          <Project {...project} />
        </m.div>
      ))}
      {!limit && (
        <m.div
          className="mt-4 flex w-full items-center justify-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: projects.length * 0.1, ease }}
        >
          <ConstructionIcon ref={iconRef} size={18} />
          <p className="text-sm">{t('projects.workingOn')}</p>
        </m.div>
      )}
    </div>
  )
}
