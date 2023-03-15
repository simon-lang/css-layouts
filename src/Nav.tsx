import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export function Nav({ prev, next }: any) {
  return (
    <>
      <a
        href={`#${prev}`}
        className="px-4 pr-16 absolute bottom-0 top-0 left-0 flex items-center opacity-70 hover:opacity-100"
      >
        <ChevronLeftIcon className="w-8" />
      </a>
      <a
        href={`#${next}`}
        className="px-4 pl-16 absolute bottom-0 top-0 right-0 flex items-center opacity-70 hover:opacity-100"
      >
        <ChevronRightIcon className="w-8" />
      </a>
    </>
  )
}
