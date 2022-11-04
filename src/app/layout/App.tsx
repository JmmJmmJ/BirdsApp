import { useEffect, useState } from 'react'
import Birds from '../../features/Birds'
import Sightings from '../../features/Sightings'
import { Bird } from '../../models/bird'
import { Sighting } from '../../models/sighting'

function App() {
  const [birds, setBirds] = useState<Bird[]>([])
  const [sightings, setSightings] = useState<Sighting[]>([])

  useEffect(() => {
    fetch('https://localhost:7212/api/birds')
      .then((response) => response.json())
      .then((data) => setBirds(data))
    fetch('https://localhost:7212/api/sightings')
      .then((response) => response.json())
      .then((data) => setSightings(data))
  }, [])
  return (
    <>
      <Birds birds={birds} />
      <Sightings sightings={sightings} />
    </>
  )
}

export default App
