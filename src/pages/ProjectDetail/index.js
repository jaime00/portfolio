import { Redirect } from 'wouter'

import CaseStudy from '@/components/CaseStudy'

import { useTranslation } from '@/i18n'

import { getAdjacentProjects, getProjectBySlug } from '@/services'

export default function ProjectDetail({ slug }) {
  const { language } = useTranslation()
  const project = getProjectBySlug(slug, language)
  const adjacentProjects = getAdjacentProjects(slug, language)

  if (!project || !project.caseStudy) {
    return <Redirect to="/side-projects" />
  }

  return (
    <div className="relative mx-auto mb-5 mt-8 flex max-w-6xl animate-fade flex-col justify-center px-4 font-sans dark:text-white">
      <CaseStudy project={project} adjacentProjects={adjacentProjects} />
    </div>
  )
}
