import { LoadingButton } from '@mui/lab'
import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import agent from '../../app/api/agent'

export default function EditSighting() {
  const { id, idb } = useParams() as { id: string; idb: string }
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(useLocation().state.specie.date)
  const [place, setPlace] = useState(useLocation().state.specie.place)
  const [comment, setComment] = useState(useLocation().state.specie.comment)

  function handleEdit(): void {
    if (window.confirm(`Muokkaa?`)) {
      setLoading(true)
      agent.Sightings.sightingEdit({
        id: id,
        date: date,
        comment: comment,
        place: place,
        birdId: idb,
      })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>{useLocation().state.specie.birdSpecies}</Typography>
      <TextField
        onChange={(e) => setDate(e.target.value)}
        id="outlined-basic"
        label="Päivämäärä"
        defaultValue={useLocation().state.specie.date}
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPlace(e.target.value)}
        id="outlined-basic"
        label="Paikka"
        defaultValue={useLocation().state.specie.place}
        variant="outlined"
      />
      <TextField
        onChange={(e) => setComment(e.target.value)}
        id="outlined-basic"
        label="Kommentti"
        defaultValue={useLocation().state.specie.comment}
        variant="outlined"
      />
      <LoadingButton
        loading={loading}
        onClick={() => handleEdit()}
        variant="contained"
      >
        Muokkaa
      </LoadingButton>
    </Box>
  )
}
