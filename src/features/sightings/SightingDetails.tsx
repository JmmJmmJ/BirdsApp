import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Sighting } from '../../models/sighting'
import SightingComp from './SightingComp'

export default function SightingDetails() {
  const { id } = useParams<{ id: string }>()
  const [sighting, setSighting] = useState<Sighting | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://localhost:7212/api/sightings/${id}`)
      .then((response) => setSighting(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!sighting) return <h3>Bird not found</h3>

  return <SightingComp sighting={sighting} />
}
