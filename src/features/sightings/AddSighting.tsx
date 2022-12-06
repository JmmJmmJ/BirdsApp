import { LoadingButton } from '@mui/lab'
import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import agent from '../../app/api/agent'

export default function AddSighting() {
  const { id } = useParams() as { id: string }
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState('')
  const [place, setPlace] = useState('')
  const [comment, setComment] = useState('')

  function handleAdd(): void {
    if (window.confirm(`Add?`)) {
      setLoading(true)
      agent
        .create({
          date: date,
          comment: comment,
          place: place,
          birdId: id,
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
      <Typography>{useLocation().state.species}</Typography>
      <TextField
        onChange={(e) => setDate(e.target.value)}
        id="outlined-basic"
        label="Date"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPlace(e.target.value)}
        id="outlined-basic"
        label="Place"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setComment(e.target.value)}
        id="outlined-basic"
        label="Comment"
        variant="outlined"
      />
      <LoadingButton
        loading={loading}
        onClick={() => handleAdd()}
        variant="contained"
      >
        Add
      </LoadingButton>
    </Box>
  )
}
