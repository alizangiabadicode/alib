import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
})

function get(url: string, config?: AxiosRequestConfig) {
  return axiosInstance.get(url, config)
}

export {
  get,
}
