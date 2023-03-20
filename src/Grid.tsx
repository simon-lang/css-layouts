import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// What / How? grid gap grid-cols col-span place-items place-self responsive
// When to use?
// <Box n={1} className="w-36 aspect-square place-self-end" />

export const Grid = () => (
  <Slide id="grid">
    <Heading>Grid</Heading>
    <div className="">
      <Box n={1} className="" />
    </div>
    <Nav prev="flex" next="demo" />
  </Slide>
)
