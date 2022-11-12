import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'https://localhost:7212/api/'

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.get(url).then(responseBody),
}

const Birds = {
  list: () => requests.get('birds'),
  bird: (id: number) => requests.get(`birds/${id}`),
}

const Sightings = {
  list: () => requests.get('sightings'),
  sighting: (id: number) => requests.get(`sightings/${id}`),
  sightingsByBird: (id: number) => requests.get(`sightings/bird/${id}`),
}

const agent = {
  Birds,
  Sightings,
}

export default agent
