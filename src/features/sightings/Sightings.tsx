import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import { Sighting } from '../../models/sighting'
import TableS from './TableS'

export default function Sightings() {
  const [sightings, setSightings] = useState<Sighting[]>([])

  useEffect(() => {
    agent.Sightings.list().then((response) => setSightings(response))
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
