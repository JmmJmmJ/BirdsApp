import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bird } from '../../models/bird'
import SightingsByBird from '../sightings/SightingsByBird'
import BirdComp from './BirdComp'

export default function BirdsData() {
  const { id } = useParams<{ id: string }>()
  const [bird, setBird] = useState<Bird | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://localhost:7212/api/birds/${id}`)
      .then((response) => setBird(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!bird) return <h3>Bird not found</h3>

  return (
    <>
      <BirdComp bird={bird} />
      <SightingsByBird id={id} />
    </>
  )
}
