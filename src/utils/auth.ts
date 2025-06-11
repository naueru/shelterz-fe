// Router
import router from '@/router'

// Store
import store from '@/store/store'

export const checkTokenOnLoad = () => {
  const tokenExpirationDate = store((state) => state.tokenExpirationDate)
  const token = store((state) => state.token)
  const removeToken = store((state) => state.removeToken)
  const setToken = store((state) => state.setToken)
  const now = new Date()
  const tokenExpirationValue = tokenExpirationDate?.value
  const tokenExpiration =
    typeof tokenExpirationValue === 'string' ? new Date(tokenExpirationValue) : null
  const isTokenValid = now < (tokenExpiration || 0)
  if (!isTokenValid) {
    removeToken()
    router.push({ name: 'login' })
  } else {
    if (token && tokenExpiration) {
      const diff = tokenExpiration.getTime() - now.getTime()
      setToken(token.value, diff, router)
    }
  }
}
