import Bottom from '@/components/Bottom'
import Main from '@/components/Main'
import PageMeta from '@/components/PageMeta'
import SectionProjects from '@/components/SectionProjects'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
  return (
    <div className="animate-fade">
      <PageMeta
        titleKey="meta.home.title"
        descriptionKey="meta.home.description"
      />
      <div>
        <Main />
        <Bottom />
        <div
          id="work-experience-container"
          className="relative mx-auto mb-5 mt-8 flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white"
        >
          <WorkExperience />
        </div>

        <SectionProjects />
      </div>
    </div>
  )
}
