import httpClient from '@/services/httpClient'

const axiosService = () => {
  const getUser = (id: string) => httpClient.get(`/api/users/${id}`)

  const login = (email: string, password: string) =>
    httpClient.post(`/api/users/login`, { email, password })

  const createUser = (data: { userName: string; email: string; password: string; image: string }) =>
    httpClient.post('/api/users/signup', data)

  return {
    getUser,
    login,
    createUser,
  }
}

export default axiosService
