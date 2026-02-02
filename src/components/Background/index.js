import BackOne from '../../assets/images/background_one.avif'
import BackTwo from '../../assets/images/background_two.avif'

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <source srcSet={BackOne} type="image/avif" />
          <img
            src={BackOne}
            alt=""
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
          />
        </picture>
        <picture>
          <source srcSet={BackTwo} type="image/avif" />
          <img
            src={BackTwo}
            alt=""
            className="hidden w-[90rem] max-w-none flex-none dark:block"
          />
        </picture>
      </div>
    </div>
  )
}
