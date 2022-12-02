import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Sighting } from '../../models/sighting'
import TableS from './TableS'

export default function Sightings() {
  const [sightings, setSightings] = useState<Sighting[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Sightings.list()
      .then((response) => setSightings(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message="Loading sightings..." />

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Sightings
      </Typography>
      <TableS sightings={sightings} setSightings={setSightings} />
    </>
  )
}
