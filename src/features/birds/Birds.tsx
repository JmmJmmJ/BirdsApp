import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { Bird } from '../../models/bird'
import TableB from './TableBirds'

export default function Birds({ auth }: any) {
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
      <TableB birds={birds} auth={auth} />
      <Typography variant="body2" color="text.secondary" align="center">
        Tiedot:
        <a href="https://laji.fi/">Suomen Lajitietokeskus </a>
        <a href="https://creativecommons.org/licenses/by/4.0/deed.fi">
          (CC BY 4.0)
        </a>
      </Typography>
    </>
  )
}
