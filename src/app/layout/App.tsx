import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AboutPage from '../../features/about/AboutPage'
import Birds from '../../features/birds/Birds'
import BirdsData from '../../features/birds/BirdsData'
import SightingDetails from '../../features/sightings/SightingDetails'
import Sightings from '../../features/sightings/Sightings'
import Header from './Header'
import 'react-toastify/dist/ReactToastify.css'
import NotFound from '../errors/NotFound'
import AddSighting from '../../features/sightings/AddSighting'
import EditSighting from '../../features/sightings/EditSighting'

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Birds />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/birds/:id" element={<BirdsData />} />
        <Route path="/sightings/:id" element={<SightingDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sightings/:id/add" element={<AddSighting />} />
        <Route
          path="/sightings/:id/birds/:idb/edit"
          element={<EditSighting />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
