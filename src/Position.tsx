import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// What/How? relative absolute z-index overflow
// When to use?
// Performance? transform

export const Position = () => (
  <Slide id="position">
    <Heading>Position</Heading>
    <div className="">
      <Box n={1} />
    </div>
    <Nav prev="intro" next="floats" />
  </Slide>
)
