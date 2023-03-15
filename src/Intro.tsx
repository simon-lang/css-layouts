// import { Box } from './Box'
import { Heading } from './Heading'
import { Nav } from './Nav'
import { Slide } from './Slide'
import {
  AcademicCapIcon,
  HeartIcon,
  HandThumbDownIcon,
  StarIcon,
  UsersIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

export const Box = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex m-4 p-4 text-3xl">{children}</div>
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
      <Heading>Disclaimers</Heading>
      <Box>
        <UsersIcon className="basis-9 mr-5" />
        Intended Audience
        {
          // - Familiar with CSS and Box Model
          // - Familiar with Bootstrap's Grid and benefits of Utility Classes
          // - Somewhat familiar with how to layout items on a page but always need to have docs open to figure out esoteric flexbox properties
          // - Understand easy way to experiment with these properties and very quickly see their results
        }
      </Box>
      <Box>
        <QuestionMarkCircleIcon className="basis-9 mr-5" />
        <a href="https://tailwindcss.com/" className="cursor-pointer">
          Why Tailwind
        </a>
        ?
      </Box>
      <Box>
        <HandThumbDownIcon className="basis-9 mr-5" />
        I'm no expert
        <span className="hidden">Goal is to show you a way that works for me and I enjoy</span>
      </Box>
      <Nav prev="outline" next="position" />
    </Slide>
  )
}
