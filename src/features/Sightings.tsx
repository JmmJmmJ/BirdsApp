import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Sighting } from '../models/sighting'
import SightingComp from './SightingComp'
import TableS from './TableS'

export default function Sightings() {
  const [sightings, setSightings] = useState<Sighting[]>([])

  useEffect(() => {
    fetch('https://localhost:7212/api/sightings')
      .then((response) => response.json())
      .then((data) => setSightings(data))
  }, [])

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Sightings
      </Typography>
      <TableS sightings={sightings} />
    </>
  )
}
