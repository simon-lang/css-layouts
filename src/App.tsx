import { Demo } from './Demo'
import { Dm } from './Dm'
import { Flex } from './Flex'
import { Floats } from './Floats'
import { Grid } from './Grid'
import { Intro } from './Intro'
import { Outline } from './Outline'
import { Position } from './Position'
import { Slide } from './Slide'
import { Title } from './Title'

function App() {
  return (
    <div className="bg-slate-800 text-slate-100">
      <Title />
      <Outline />
      <Intro />
      <Position />
      <Floats />
      <Flex />
      <Grid />
      <Demo />
      <Slide id="spacer"></Slide>
      <Dm />
    </div>
  )
}

export default App
