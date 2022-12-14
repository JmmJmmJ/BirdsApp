import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import { Sighting } from '../../models/sighting'
import TableS from './TableSightings'

interface Props {
  id: number
}

export default function SightingsByBird({ id }: Props) {
  const [sightings, setSightings] = useState<Sighting[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Sightings.sightingsByBird(id)
      .then((response) => setSightings(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!sightings) return <h3>Sightings not found</h3>

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Havainnot
      </Typography>
      <TableS sightings={sightings} setSightings={setSightings} />
    </>
  )
}
