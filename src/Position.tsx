import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

export const Position = () => (
  <Slide id="position">
    <Heading>Position</Heading>

    <div className="">
      <Box n={1} className="w-36 h-36" />
    </div>

    <Nav prev="intro" next="floats" />
  </Slide>
)
