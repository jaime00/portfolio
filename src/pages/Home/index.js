import Main from '../../components/Main';
import Separator from '../../components/Separator';
import SectionProjects from '../../components/SectionProjects';
import WorkExperience from '../../components/WorkExperience';

export default function Home() {
  return (
    <>
      <Main />
      <Separator />
      <SectionProjects />
      <div className="my-5 flex flex-col mx-auto max-w-6xl justify-center px-4 relative font-sans dark:text-white">
        <WorkExperience />
      </div>
    </>
  );
}
