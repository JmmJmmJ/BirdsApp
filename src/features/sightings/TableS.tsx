import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridToolbar,
} from '@mui/x-data-grid'
import { useNavigate, useParams } from 'react-router-dom'
import { Sighting } from '../../models/sighting'

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
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const handleEvent: GridEventListener<'rowClick'> = (
    params // GridRowParams
  ) => {
    navigate(`/sighting/${params.id}`)
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        onRowClick={handleEvent}
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
