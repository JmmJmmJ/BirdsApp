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
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'birdSpecies', headerName: 'Species', width: 130 },
    { field: 'place', headerName: 'Place', width: 130 },
    { field: 'comment', headerName: 'Comment', width: 130 },
    {
      field: 'view',
      headerName: 'View',
      renderCell: (params: GridRenderCellParams) => (
        <Button
          onClick={(event) => handleView(event, params)}
          variant="contained"
          size="small"
        >
          View
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      renderCell: (params: GridRenderCellParams) => (
        <LoadingButton
          loading={loading}
          onClick={(event) => handleDelete(event, params)}
          variant="contained"
          size="small"
        >
          Delete
        </LoadingButton>
      ),
    },
    {
      field: 'edit',
      headerName: 'Edit',
      renderCell: (params: GridRenderCellParams) => (
        <LoadingButton
          loading={loading}
          onClick={(event) => handleEdit(event, params)}
          variant="contained"
          size="small"
        >
          Edit
        </LoadingButton>
      ),
    },
  ]

  function handleView(event: MouseEvent, params: GridRenderCellParams): void {
    navigate(`/sighting/${params.id}`)
  }

  function handleEdit(event: MouseEvent, params: GridRenderCellParams): void {
    navigate(`/sightings/edit/${params.id}/bird/${params.row.birdId}`, {
      state: { specie: params.row },
    })
  }

  function handleDelete(event: MouseEvent, params: GridRenderCellParams): void {
    delSighting(parseInt(`${params.id}`))
  }

  const delSighting = (id: number) => {
    setLoading(true)
    const remove = sightings.find((sighting) => sighting.id === id)

    if (window.confirm(`Delete ${remove?.comment}?`)) {
      agent.Sightings.sightingDelete(id)
        .catch((error) => console.log(error))
        .then(() => {
          setSightings(sightings.filter((person) => person.id !== id))
        })
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
