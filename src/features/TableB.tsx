import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Bird } from '../models/bird'

interface Props {
  birds: Bird[]
}

const columns: GridColDef[] = [
  { field: 'species', headerName: 'First name', width: 130 },
  { field: 'binomial_name', headerName: 'Last name', width: 130 },
]

const rows = [
  { id: 1, species: 'Snow', binomial_name: 'Jon' },
  { id: 2, species: 'Snow', binomial_name: 'Jon' },
  { id: 3, species: 'Snow', binomial_name: 'Jon' },
]

export default function DataTable({ birds }: Props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
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
