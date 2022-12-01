import { Button } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { MouseEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Bird } from '../../models/bird'

interface Props {
  birds: Bird[]
}

export default function DataTable({ birds }: Props) {
  const navigate = useNavigate()

  const handleEvent: GridEventListener<'rowClick'> = (
    params // GridRowParams
  ) => {
    navigate(`/bird/${params.id}`)
  }

  const columns: GridColDef[] = [
    { field: 'species', headerName: 'First name', width: 130 },
    { field: 'binomial_name', headerName: 'Last name', width: 130 },
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
      field: 'add',
      headerName: 'Add',
      width: 260,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          onClick={(event) => handleAdd(event, params)}
          variant="contained"
          size="small"
        >
          Add sighting
        </Button>
      ),
    },
  ]

  function handleAdd(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    params: GridRenderCellParams<any, any, any>
  ): void {
    navigate(`/sightings/add/${params.id}`, {
      state: { species: params.row.species },
    })
  }

  function handleView(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    params: GridRenderCellParams<any, any, any>
  ): void {
    navigate(`/bird/${params.id}`)
  }

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        components={{
          Toolbar: GridToolbar,
        }}
        rows={birds}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </div>
  )
}
