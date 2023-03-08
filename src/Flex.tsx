import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

// flex direction justify align
// width grow shrink margin

export const Flex = () => (
  <Slide id="flex">
    <Heading>Flexbox</Heading>
    <div className="p-4 flex justify-items-stretch">
      <Box n={1} />
      <Box n={2} className="basis-10/12" />
      <Box n={3} />
      <Box n={4} />
    </div>
    <Nav prev="floats" next="grid" />
  </Slide>
)
