import CommandsSection from './CommandsSection'
import FeaturesSection from './FeaturesSection'
import GallerySection from './GallerySection'
import HeroBanner from './HeroBanner'
import NarrativeSection from './NarrativeSection'
import PlaygroundSection from './PlaygroundSection'
import ProjectNavigation from './ProjectNavigation'
import VideoSection from './VideoSection'

const sectionKey = (section) =>
  `${section.type}-${section.title || section.subtitle || ''}`

const sectionRenderers = {
  narrative: (section) => (
    <NarrativeSection key={sectionKey(section)} section={section} />
  ),
  gallery: (section) => (
    <GallerySection key={sectionKey(section)} section={section} />
  ),
  video: (section) => (
    <VideoSection key={sectionKey(section)} section={section} />
  ),
  features: (section) => (
    <FeaturesSection key={sectionKey(section)} section={section} />
  ),
  commands: (section) => (
    <CommandsSection key={sectionKey(section)} section={section} />
  ),
  playground: (section) => (
    <PlaygroundSection key={sectionKey(section)} section={section} />
  )
}

export default function CaseStudy({ project, adjacentProjects }) {
  const { caseStudy } = project

  return (
    <>
      <HeroBanner project={project} />
      {caseStudy.sections.map((section) => {
        const renderer = sectionRenderers[section.type]
        return renderer ? renderer(section) : null
      })}
      <ProjectNavigation
        prev={adjacentProjects.prev}
        next={adjacentProjects.next}
      />
    </>
  )
}
