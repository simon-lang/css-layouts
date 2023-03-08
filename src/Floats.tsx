import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'

// <Box style={{ float: 'right' }} className="h-screen bg-slate-900 w-36" />

export const Floats = () => (
  <Slide id="floats">
    <Heading>Floats</Heading>

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
