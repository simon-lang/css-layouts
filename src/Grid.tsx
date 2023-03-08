import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

export const Grid = () => (
  <Slide id="grid">
    <Heading>Grid</Heading>
    <div className="p-4">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
      <Box n={4} />
    </div>
    <Nav prev="flex" next="demo" />
  </Slide>
)
