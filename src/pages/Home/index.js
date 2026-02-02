import Bottom from '../../components/Bottom'
import Main from '../../components/Main'
import SectionProjects from '../../components/SectionProjects'
import WorkExperience from '../../components/WorkExperience'

export default function Home({ isDark }) {
  return (
    <div className="animate-fade">
      <div>
        <Main isDark={isDark} />
        {/* <Separator /> */}
        <Bottom />
        <div
          id="work-experience-container"
          className="relative my-5 mx-auto flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white"
        >
          <WorkExperience />
        </div>

        <SectionProjects />
      </div>
    </div>
  )
}
