import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// What / How? grid gap grid-cols col-span place-items responsive
// When to use?

export const Grid = () => (
  <Slide id="grid">
    <Heading>Grid</Heading>
    <div className="grid grid-cols-5 gap-2">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
      <Box n={4} />
    </div>
    <Nav prev="flex" next="demo" />
  </Slide>
)
