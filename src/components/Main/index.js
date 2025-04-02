import Button from '../Button';
import Presentation from '../Presentation';
import CarouselOfTechnologies from '../CarouselOfTechnologies';

export default function Main({ isDark }) {
  return (
    <main className="h-[83vh] flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-gray-800 prose prose-lg md:prose-xl dark:prose-dark relative font-sans">
      <div className="container mx-auto flex flex-wrap flex-col gap-6">
        <Presentation isDark={isDark} />
        <div className="my-5 space-y-6 md:space-y-0 md:space-x-4">
          <Button isDark={true} to="/contact">
            Contact me
          </Button>
          <Button isDark={false} to="/about">
            More about me
          </Button>
        </div>
        <CarouselOfTechnologies isDark={isDark} />
      </div>
    </main>
  );
}
