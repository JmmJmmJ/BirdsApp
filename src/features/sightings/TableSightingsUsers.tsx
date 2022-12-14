import { Button } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid'
import agent from '../../app/api/agent'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sighting } from '../../models/sighting'
import { LoadingButton } from '@mui/lab'

interface Props {
  sightings: Sighting[]
  setSightings: any
}

export default function DataTable({ sightings, setSightings }: Props) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const columns: GridColDef[] = [
    { field: 'date', headerName: 'Päivämäärä', width: 130 },
    { field: 'birdSpecies', headerName: 'Laji', width: 130 },
    { field: 'place', headerName: 'Paikka', width: 130 },
    { field: 'comment', headerName: 'Kommentti', width: 130 },
    {
      field: 'view',
      headerName: '',
      renderCell: (params: GridRenderCellParams) => (
        <Button
          onClick={(event) => handleView(event, params)}
          variant="contained"
          size="small"
        >
          Näytä
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: '',
      renderCell: (params: GridRenderCellParams) => (
        <LoadingButton
          loading={loading}
          onClick={(event) => handleDelete(event, params)}
          variant="contained"
          size="small"
        >
          Poista
        </LoadingButton>
      ),
    },
    {
      field: 'edit',
      headerName: '',
      renderCell: (params: GridRenderCellParams) => (
        <LoadingButton
          loading={loading}
          onClick={(event) => handleEdit(event, params)}
          variant="contained"
          size="small"
        >
          Muokkaa
        </LoadingButton>
      ),
    },
  ]

  function handleView(event: MouseEvent, params: GridRenderCellParams): void {
    navigate(`/sightings/${params.id}`)
  }

  function handleEdit(event: MouseEvent, params: GridRenderCellParams): void {
    navigate(`/sightings/${params.id}/birds/${params.row.birdId}/edit`, {
      state: { specie: params.row },
    })
  }

  function handleDelete(event: MouseEvent, params: GridRenderCellParams): void {
    delSighting(parseInt(`${params.id}`))
  }

  const delSighting = (id: number) => {
    setLoading(true)
    const remove = sightings.find((sighting) => sighting.id === id)

    if (window.confirm(`Poista ${remove?.comment}?`)) {
      agent.Sightings.sightingDelete(id)
        .then(() => {
          setSightings(sightings.filter((person) => person.id !== id))
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        components={{
          Toolbar: GridToolbar,
        }}
        rows={sightings}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </div>
  )
}
