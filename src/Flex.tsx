import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// Essential reading: https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

// What/How? flex direction justify align width grow shrink margin
// When to use?

export const Flex = () => (
  <Slide id="flex">
    <Heading>Flexbox</Heading>
    <div className="">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
      <Box n={4} />
    </div>
    <Nav prev="floats" next="grid" />
  </Slide>
)
