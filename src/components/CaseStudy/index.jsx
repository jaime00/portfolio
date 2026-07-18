import CommandsSection from './CommandsSection'
import FeaturesSection from './FeaturesSection'
import GallerySection from './GallerySection'
import HeroBanner from './HeroBanner'
import NarrativeSection from './NarrativeSection'
import PlaygroundSection from './PlaygroundSection'
import ProjectNavigation from './ProjectNavigation'
import VideoSection from './VideoSection'

const sectionRenderers = {
  narrative: (section, i) => <NarrativeSection key={i} section={section} />,
  gallery: (section, i) => <GallerySection key={i} section={section} />,
  video: (section, i) => <VideoSection key={i} section={section} />,
  features: (section, i) => <FeaturesSection key={i} section={section} />,
  commands: (section, i) => <CommandsSection key={i} section={section} />,
  playground: (section, i) => <PlaygroundSection key={i} section={section} />
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
