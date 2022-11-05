import { CssBaseline } from '@mui/material'
import Birds from '../../features/Birds'
import Sightings from '../../features/Sightings'
import Header from './Header'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Birds />
      <Sightings />
    </>
  )
}

export default App
