import { Bird } from '../models/bird'

interface Props {
  birds: Bird[]
}

export default function Birds({ birds }: Props) {
  return (
    <>
      <h1>Birds</h1>
      <ul>
        {birds.map((bird) => (
          <li>
            {bird.species} - {bird.binomial_name}
          </li>
        ))}
      </ul>
    </>
  )
}
