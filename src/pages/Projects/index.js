import ListOfProjects from '../../components/ListOfProjects'
import Titles from '../../components/Titles'

export default function Projects() {
  return (
    <div className="relative my-5 mx-auto mt-8 flex max-w-6xl animate-fade flex-col justify-center px-4 font-sans dark:text-white">
      <Titles
        title="Side Projects"
        subtitle="A selection of my favorite works."
      />
      <ListOfProjects />
    </div>
  )
}
