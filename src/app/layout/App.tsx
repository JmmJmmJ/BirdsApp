import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Birds from '../../features/birds/Birds'
import BirdsData from '../../features/birds/BirdsData'
import SightingDetails from '../../features/sightings/SightingDetails'
import Sightings from '../../features/sightings/Sightings'
import Header from './Header'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Birds />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/bird/:id" element={<BirdsData />} />
        <Route path="/sighting/:id" element={<SightingDetails />} />
      </Routes>
    </>
  )
}

export default App
