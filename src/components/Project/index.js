import DetailOfProject from '../DetailOfProject'
import StackOfProject from '../StackOfProject'

export default function Project({
  urlPreview,
  urlCode,
  title,
  description,
  img,
  stack,
  id
}) {
  return (
    <>
      <div className="wrapper group min-w-[350px] max-w-[405px] pb-6 text-gray-900 antialiased">
        <div className="hover:rounded-lg">
          <div className="overflow-hidden rounded-lg">
            <img
              loading="lazy"
              width={405}
              height={260}
              src={img}
              alt={title}
              className="h-[260px] w-full rounded-lg object-cover object-top shadow-md transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <div className="relative -mt-16 px-4">
            <div className="min-h-[20rem] rounded-lg bg-white p-5 shadow-lg dark:bg-gray-900 dark:text-white sm:pb-5">
              <StackOfProject stacks={stack} />
              <DetailOfProject
                urlPreview={urlPreview}
                urlCode={urlCode}
                title={title}
                description={description}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
