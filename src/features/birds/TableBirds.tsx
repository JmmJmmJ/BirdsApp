import { Button } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bird } from '../../models/bird'

interface Props {
  birds: Bird[]
  auth: boolean
}

export default function DataTable({ birds, auth }: Props) {
  const navigate = useNavigate()

  const columns: GridColDef[] = [
    { field: 'species', headerName: 'Laji', width: 130 },
    { field: 'binomial_name', headerName: 'Tieteellinen nimi', width: 200 },
    {
      field: 'conservation_status',
      headerName: 'Uhanalaisuusluokitus',
      width: 200,
    },
    { field: 'sightingsTotal', headerName: 'Havainnot', width: 200 },
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
      field: 'add',
      headerName: '',
      width: 260,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          disabled={!auth}
          onClick={(event) => handleAdd(event, params)}
          variant="contained"
          size="small"
        >
          Lisää havainto
        </Button>
      ),
    },
  ]

  function handleAdd(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    params: GridRenderCellParams<any, any, any>
  ): void {
    navigate(`/sightings/${params.id}/add`, {
      state: { species: params.row.species },
    })
  }

  function handleView(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    params: GridRenderCellParams<any, any, any>
  ): void {
    navigate(`/birds/${params.id}`)
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
