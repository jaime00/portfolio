import Main from '../../components/Main';
import SectionProjects from '../../components/SectionProjects';
import WorkExperience from '../../components/WorkExperience';
import Bottom from '../../components/Bottom';

export default function Home() {
  return (
    <>
      <Main />
      {/* <Separator /> */}
      <Bottom />
      <div id='work-experience-container' className="my-5 flex flex-col mx-auto max-w-6xl justify-center px-4 relative font-sans dark:text-white">
        <WorkExperience />
      </div>
      <SectionProjects />
    </>
  );
}
