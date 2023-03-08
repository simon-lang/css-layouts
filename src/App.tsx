// import { Demo } from './Demo'
import { Demo } from './Demo'
import { Flex } from './Flex'
import { Floats } from './Floats'
import { Grid } from './Grid'
import { Intro } from './Intro'
import { Outline } from './Outline'
import { Position } from './Position'
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
    </div>
  )
}

export default App
