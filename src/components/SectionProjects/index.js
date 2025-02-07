import Button from '../Button';
import ListOfProjects from '../ListOfProjects';

const quantityOfProjectsInHome = 3;

export default function SectionProjects() {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-6xl justify-center px-4 relative font-sans dark:text-white">
        <h2 className="text-4xl	font-bold my-8">
          I love sharing my knowledge and learning new things.
        </h2>
        <p className="md:text-xl">Check out some of my most recent projects.</p>
        <ListOfProjects limit={quantityOfProjectsInHome} />

        {quantityOfProjectsInHome > 3 && (
          <div className="mt-10 mx-5 w-50">
            <Button to="/side-projects">See all projects</Button>
          </div>
        )}
      </div>
    </div>
  );
}
