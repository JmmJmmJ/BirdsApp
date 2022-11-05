import { Sighting } from '../models/sighting'

interface Props {
  sighting: Sighting
}

export default function SightingComp({ sighting }: Props) {
  return (
    <li>
      {sighting.date} - {sighting.place} - {sighting.birdSpecies} -{' '}
      {sighting.comment}
    </li>
  )
}
