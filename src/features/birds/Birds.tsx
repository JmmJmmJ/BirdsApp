import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import { Bird } from '../../models/bird'
import TableB from './TableB'

export default function Birds() {
  const [birds, setBirds] = useState<Bird[]>([])

  useEffect(() => {
    agent.Birds.list().then((response) => setBirds(response))
  }, [])

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h6">
        Birds
      </Typography>
      <TableB birds={birds} />
    </>
  )
}
