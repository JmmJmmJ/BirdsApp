import { Button } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sighting } from '../../models/sighting'

interface Props {
  sightings: Sighting[]
  setSightings: any
}

export default function DataTable({ sightings, setSightings }: Props) {
  const navigate = useNavigate()

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
  ]

  function handleView(event: MouseEvent, params: GridRenderCellParams): void {
    navigate(`/sightings/${params.id}`)
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
