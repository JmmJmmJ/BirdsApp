import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import agent from '../../app/api/agent'
import { Bird } from '../../models/bird'
import SightingsByBird from '../sightings/SightingsByBird'
import BirdComp from './BirdComp'

export default function BirdsData() {
  const { id } = useParams() as { id: string }
  const [bird, setBird] = useState<Bird | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Birds.bird(parseInt(id))
      .then((response) => setBird(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!bird) return <h3>Bird not found</h3>

  return (
    <>
      <BirdComp bird={bird} />
      <SightingsByBird id={parseInt(id)} />
    </>
  )
}
