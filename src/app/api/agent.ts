import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

//const sleep = () => new Promise((resolve) => setTimeout(resolve, 500))

axios.defaults.baseURL = 'https://localhost:7212/api/'

const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.response.use(
  async (response) => {
    //await sleep()
    return response
  },
  (error: AxiosError) => {
    const { data, status } = error.response as any
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = []
          for (const key in data.errors) {
            if (data.errors[key]) modelStateErrors.push(data.errors[key])
          }
          throw modelStateErrors.flat()
        }
        toast.error(data.title)
        break
      case 401:
        toast.error(data.title)
        break
      case 500:
        toast.error(data.title)
        break
      default:
        break
    }
    return Promise.reject(error.response)
  }
)

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

const Birds = {
  list: () => requests.get('birds'),
  bird: (id: number) => requests.get(`birds/${id}`),
}

const Sightings = {
  list: () => requests.get('sightings'),
  sighting: (id: number) => requests.get(`sightings/${id}`),
  sightingsByBird: (id: number) => requests.get(`sightings/bird/${id}`),
  sightingDelete: (id: number) => requests.delete(`sightings/${id}`),
  sightingAdd: (body: {}) => requests.post(`sightings`, body),
  sightingEdit: (body: {}) => requests.put(`sightings`, body),
}

const TestErrors = {
  get400Error: () => requests.get('buggy/bad-request'),
  get401Error: () => requests.get('buggy/unauthorised'),
  get404Error: () => requests.get('buggy/not-found'),
  get500Error: () => requests.get('buggy/server-error'),
  getValidationError: () => requests.get('buggy/validation-error'),
}

const agent = {
  Birds,
  Sightings,
  TestErrors,
}

export default agent
