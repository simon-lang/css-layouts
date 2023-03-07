// import { Box } from './Box'
import { Heading } from './Heading'
import { Slide } from './Slide'

export const Box = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="text-2xl m-4">{children}</div>
)

export function Outline() {
  return (
    <Slide id="outline">
      <Heading>Outline</Heading>
      <Box>Intro: Why understand CSS layouts? Rationale and disclaimers</Box>
      <Box>Refresher: Bootstrap Utility Classes & Grid</Box>
      <Box>Refresher: Floats, Position, Flexbox, CSS Grid</Box>
      <Box>Demo: creating DM page layouts with Tailwind</Box>
      <Box>Bonus if time: Look around the ecosystem. headlessui, twin.macro, etc </Box>
      <a href="#" className="px-4 absolute bottom-8 left-4">
        Back
      </a>
      <a href="#floats" className="px-4 absolute bottom-8 right-8">
        Next
      </a>
    </Slide>
  )
}
