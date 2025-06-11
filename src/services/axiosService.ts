import httpClient from '@/services/httpClient'

const axiosService = () => {
  const getUser = (id: string) => httpClient.get(`/users/${id}`)

  const login = (email: string, password: string) =>
    httpClient.post(`/api/users/login`, { email, password })

  const createUser = (data: { username: string; password: string }) =>
    httpClient.post('/users', data)

  return {
    getUser,
    login,
    createUser,
  }
}

export default axiosService
