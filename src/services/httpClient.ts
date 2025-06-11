import axios from 'axios'
import store from '@/store/store'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Auth token interceptor
httpClient.interceptors.request.use((config) => {
  const token = store((state) => state.token)?.value
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default httpClient
