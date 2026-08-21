import CommandsSection from './CommandsSection'
import FeaturesSection from './FeaturesSection'
import GallerySection from './GallerySection'
import HeroBanner from './HeroBanner'
import NarrativeSection from './NarrativeSection'
import PlaygroundSection from './PlaygroundSection'
import ProjectNavigation from './ProjectNavigation'
import VideoSection from './VideoSection'

const sectionRenderers = {
  narrative: NarrativeSection,
  gallery: GallerySection,
  video: VideoSection,
  features: FeaturesSection,
  commands: CommandsSection,
  playground: PlaygroundSection
}

export default function CaseStudy({ project, adjacentProjects }) {
  const { caseStudy } = project

  return (
    <>
      <HeroBanner project={project} />
      {caseStudy.sections.map((section, i) => {
        const Component = sectionRenderers[section.type]
        return Component ? (
          <Component
            key={`${section.type}-${section.title}`}
            section={section}
          />
        ) : null
      })}
      <ProjectNavigation
        prev={adjacentProjects.prev}
        next={adjacentProjects.next}
      />
    </>
  )
}
