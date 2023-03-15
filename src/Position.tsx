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
    <div>
      <Box
        n={1}
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px'
        }}
      />
    </div>
    <Nav prev="intro" next="floats" />
  </Slide>
)
