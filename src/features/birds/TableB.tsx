import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Navigate, useNavigate } from 'react-router-dom'
import { Bird } from '../../models/bird'

interface Props {
  birds: Bird[]
}

const columns: GridColDef[] = [
  { field: 'species', headerName: 'First name', width: 130 },
  { field: 'binomial_name', headerName: 'Last name', width: 130 },
]

export default function DataTable({ birds }: Props) {
  const navigate = useNavigate()

  const handleEvent: GridEventListener<'rowClick'> = (
    params // GridRowParams
  ) => {
    navigate(`/bird/${params.id}`)
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        onRowClick={handleEvent}
        components={{
          Toolbar: GridToolbar,
        }}
        rows={birds}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
