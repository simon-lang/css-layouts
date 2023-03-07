import { Box } from './Box'
import { Heading } from './Heading'
import { Slide } from './Slide'

// https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

// flex direction justify align
// width grow shrink margin

export const Flex = () => (
  <Slide id="flex">
    <Heading>Flexbox</Heading>
    <div className="flex">
      <Box n={1} />
      <Box n={2} />
      <Box n={3} />
      <Box n={4} />
    </div>
    <a href="#floats" className="px-4 absolute bottom-8 left-4">
      Back
    </a>
    <a href="#grid" className="px-4 absolute bottom-8 right-8">
      Next
    </a>
  </Slide>
)
