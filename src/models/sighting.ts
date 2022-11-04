import { Bird } from './bird'

export interface Sighting {
  id: number
  date: string
  comment: string
  place: string
  birdSpecies: string
}
