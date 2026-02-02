import Button from '../Button'
import ListOfProjects from '../ListOfProjects'

const quantityOfProjectsInHome = 3

export default function SectionProjects() {
  return (
    <div>
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 font-sans dark:text-white">
        <h2 className="my-8 text-4xl font-bold">
          I love sharing my knowledge and learning new things.
        </h2>
        <p className="md:text-xl">Check out some of my most recent projects.</p>
        <ListOfProjects limit={quantityOfProjectsInHome} />

        {quantityOfProjectsInHome > 3 && (
          <div className="w-50 mx-5 mt-10">
            <Button to="/side-projects">See all projects</Button>
          </div>
        )}
      </div>
    </div>
  )
}
