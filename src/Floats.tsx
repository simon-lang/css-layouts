import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// What/How?
// When to use?

export const Floats = () => (
  <Slide id="floats">
    <Heading>Floats</Heading>

    <Box style={{ float: 'right' }} />
    <p className="p-4 w-full">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sed iste inventore, quam ullam cumque incidunt
      error placeat aperiam eius culpa iure nulla reprehenderit quos natus facilis dolores esse? Laboriosam? Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Velit sed iste inventore, quam ullam cumque incidunt error placeat
      aperiam eius culpa iure nulla reprehenderit quos natus facilis dolores esse? Laboriosam? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Velit sed iste inventore, quam ullam cumque incidunt error placeat aperiam
      eius culpa iure nulla reprehenderit quos natus facilis dolores esse? Laboriosam? Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Velit sed iste inventore, quam ullam cumque incidunt error placeat aperiam eius
      culpa iure nulla reprehenderit quos natus facilis dolores esse? Laboriosam?
    </p>

    <Nav prev="position" next="flex" />
  </Slide>
)
