import { Box } from './Box'
import { Heading } from './Heading'
import { Slide } from './Slide'

export const Grid = () => (
  <Slide id="grid">
    <Heading>Grid</Heading>
    <div className="grid grid-cols-4">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
      <Box n={4} />
    </div>
    <a href="#flex" className="px-4 absolute bottom-8 left-4">
      Back
    </a>
    <a href="#demo" className="px-4 absolute bottom-8 right-8">
      Next
    </a>
  </Slide>
)
