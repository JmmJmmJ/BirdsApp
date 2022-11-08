import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Bird } from '../../models/bird'
import TableB from './TableB'

export default function Birds() {
  const [birds, setBirds] = useState<Bird[]>([])

  useEffect(() => {
    fetch('https://localhost:7212/api/birds')
      .then((response) => response.json())
      .then((data) => setBirds(data))
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
