// import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'
import { AcademicCapIcon, HeartIcon, HandThumbDownIcon, StarIcon, HandRaisedIcon } from '@heroicons/react/24/solid'

export const Box = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex m-4 text-2xl">{children}</div>
)

export function Intro() {
  return (
    <Slide id="intro">
      <Heading>Why understand CSS Layouts?</Heading>
      <Box>
        <AcademicCapIcon className="basis-9 mr-5" />
        Fundamentals help even if just using Bootstrap Grid
      </Box>
      <Box>
        <StarIcon className="basis-9 mr-5" />
        Make our products shinier
      </Box>
      <Box>
        <HeartIcon className="basis-9 mr-5" />
        Fun
      </Box>
      <Box>
        <HandRaisedIcon className="basis-9 mr-5" />
        Not a sales pitch for Tailwind
        <a href="https://tailwindcss.com/" className="ml-2 cursor-pointer">
          {' '}
          (quote)
        </a>
      </Box>
      <Box>
        <HandThumbDownIcon className="basis-9 mr-5" />
        I'm no expert
      </Box>
      <Nav prev="outline" next="position" />
    </Slide>
  )
}
