import DetailOfProject from '../DetailOfProject'
import StackOfProject from '../StackOfProject'

export default function Project(props) {
  const { url_preview, url_code, title, description, img, stack, id } = props
  return (
    <>
      <div className="wrapper group min-w-[350px] max-w-[405px] text-gray-900 antialiased">
        <div className="overflow-hidden hover:rounded-lg">
          <img
            lazy="true"
            style={{
              height: '260px'
            }}
            src={img}
            alt={title}
            className="w-full rounded-lg object-cover object-top shadow-md transition-all duration-700 group-hover:scale-110"
          />
          <div className="relative -mt-16 px-4">
            <div className="h-80 rounded-lg bg-white p-5 shadow-lg dark:bg-gray-900 dark:text-white sm:pb-5">
              <StackOfProject stacks={stack} />
              <DetailOfProject
                url_preview={url_preview}
                url_code={url_code}
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
