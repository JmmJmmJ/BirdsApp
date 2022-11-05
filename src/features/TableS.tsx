import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Sighting } from '../models/sighting'

interface Props {
  sightings: Sighting[]
}

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'birdSpecies', headerName: 'Species', width: 130 },
  { field: 'place', headerName: 'Place', width: 130 },
  { field: 'comment', headerName: 'Comment', width: 130 },
]

export default function DataTable({ sightings }: Props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        components={{
          Toolbar: GridToolbar,
        }}
        rows={sightings}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
