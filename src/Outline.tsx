// import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

export const Box = ({ children }: React.HTMLAttributes<HTMLDivElement>) => <div className="">{children}</div>

export function Outline() {
  return (
    <Slide id="outline">
      <Heading>Outline</Heading>
      <div className="text-2xl xl:text-3xl flex flex-col p-4 gap-4">
        <Box>
          <strong className="w-40 inline-block">Intro</strong> Why understand CSS layouts?
        </Box>
        <Box>
          <strong className="w-40 inline-block">Refresher</strong> Bootstrap utility classes & grid
        </Box>
        <Box>
          <strong className="w-40 inline-block">Refresher</strong> Floats, Position, Flexbox, CSS Grid
        </Box>
        <Box>
          <strong className="w-40 inline-block">Demo</strong> Creating DM page layouts with Tailwind
        </Box>
        <Box>
          <strong className="w-40 inline-block">Bonus</strong> Look around the Tailwind ecosystem
        </Box>
      </div>
      <Nav prev="" next="intro" />
    </Slide>
  )
}
