import { Bird } from '../models/bird'

interface Props {
  bird: Bird
}

export default function BirdComp({ bird }: Props) {
  return (
    <li>
      {bird.species} - {bird.binomial_name}
    </li>
  )
}
