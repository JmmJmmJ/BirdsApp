import { Link } from 'react-router-dom'
import { Sighting } from '../../models/sighting'

interface Props {
  sighting: Sighting
}

export default function SightingComp({ sighting }: Props) {
  const link = `/bird/${sighting.birdId}`

  return (
    <li>
      {sighting.date} - {sighting.place} -{' '}
      <Link to={link}>{sighting.birdSpecies}</Link> - {sighting.comment}
    </li>
  )
}
