import { Sighting } from '../models/sighting'

interface Props {
  sightings: Sighting[]
}

export default function Sightings({ sightings }: Props) {
  return (
    <>
      <h1>Sightings</h1>
      <ul>
        {sightings.map((sighting) => (
          <li>
            {sighting.date} - {sighting.place} - {sighting.birdSpecies} -{' '}
            {sighting.comment}
          </li>
        ))}
      </ul>
    </>
  )
}
