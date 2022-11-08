import { Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Sighting } from '../../models/sighting'
import TableS from './TableS'

interface Props {
  id: string | undefined
}

export default function SightingsByBird({ id }: Props) {
  const [sightings, setSightings] = useState<Sighting[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://localhost:7212/api/sightings/bird/${id}`)
      .then((response) => setSightings(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!sightings) return <h3>Sightings not found</h3>

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Sightings
      </Typography>
      <TableS sightings={sightings} />
    </>
  )
}
