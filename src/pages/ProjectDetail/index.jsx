import CaseStudy from '@/components/CaseStudy'
import PageMeta from '@/components/PageMeta'
import ReadingProgress from '@/components/ReadingProgress'

import { useTranslation } from '@/i18n'

import NotFound from '@/pages/NotFound'

import { getAdjacentProjects, getProjectBySlug } from '@/services'

export default function ProjectDetail({ slug }) {
  const { language } = useTranslation()
  const project = getProjectBySlug(slug, language)
  const adjacentProjects = getAdjacentProjects(slug, language)

  if (!project || !project.caseStudy) {
    return <NotFound />
  }

  return (
    <div className="relative mx-auto mb-5 mt-8 flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
      <PageMeta
        title={`${project.title} — Jaime Torres`}
        description={project.description}
      />
      <ReadingProgress />
      <CaseStudy project={project} adjacentProjects={adjacentProjects} />
    </div>
  )
}
