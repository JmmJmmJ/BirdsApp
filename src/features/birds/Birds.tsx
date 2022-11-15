import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Bird } from '../../models/bird'
import TableB from './TableB'

export default function Birds() {
  const [birds, setBirds] = useState<Bird[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    agent.Birds.list()
      .then((response) => setBirds(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message="Loading birds..." />

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Birds
      </Typography>
      <TableB birds={birds} />
    </>
  )
}
