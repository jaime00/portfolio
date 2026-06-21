import HeroBanner from './HeroBanner'
import NarrativeSection from './NarrativeSection'
import GallerySection from './GallerySection'
import VideoSection from './VideoSection'
import ProjectNavigation from './ProjectNavigation'

const sectionRenderers = {
  narrative: (section, i) => (
    <NarrativeSection key={i} section={section} index={i} />
  ),
  gallery: (section, i) => <GallerySection key={i} section={section} />,
  video: (section, i) => <VideoSection key={i} section={section} />
}

export default function CaseStudy({ project, adjacentProjects }) {
  const { caseStudy } = project

  return (
    <>
      <HeroBanner project={project} />
      {caseStudy.sections.map((section, i) => {
        const renderer = sectionRenderers[section.type]
        return renderer ? renderer(section, i) : null
      })}
      <ProjectNavigation
        prev={adjacentProjects.prev}
        next={adjacentProjects.next}
      />
    </>
  )
}
