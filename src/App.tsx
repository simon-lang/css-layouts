// import { Demo } from './Demo'
import { Demo } from './Demo'
import { Flex } from './Flex'
import { Floats } from './Floats'
import { Grid } from './Grid'
import { Outline } from './Outline'
import { Title } from './slides/Title'

function App() {
  return (
    <div className="bg-slate-800 text-slate-100">
      <Title />
      <Outline />
      <Floats />
      <Flex />
      <Grid />
      <Demo />
    </div>
  )
}

export default App
