// import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'
import { ChatBubbleLeftIcon, Square3Stack3DIcon, ComputerDesktopIcon, ClockIcon } from '@heroicons/react/24/solid'

export const Box = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex gap-8 p-4 m-4">{children}</div>
)

export function Outline() {
  return (
    <Slide id="outline">
      <Heading>Outline</Heading>
      <div className="text-3xl xl:text-4xl flex flex-col">
        <Box>
          <ChatBubbleLeftIcon className="w-9" />
          <strong className="">Intro:</strong> Why understand CSS layouts?
        </Box>
        <Box>
          <Square3Stack3DIcon className="w-9" />
          <strong className="">Refresher:</strong> Floats, Position, Flexbox, CSS Grid
        </Box>
        <Box>
          <ComputerDesktopIcon className="w-9" />
          <strong className="">Demo:</strong> Creating Data Management page layouts with Tailwind
        </Box>
        <Box>
          <ClockIcon className="w-9" />
          <strong className="">Bonus:</strong> Look around the Tailwind ecosystem
        </Box>
      </div>
      <Nav prev="" next="intro" />
    </Slide>
  )
}
