// Store
import type { StateCreator } from 'zustand-vue'

// Services
import axiosService from '@/services/axiosService'

// Utils
import { HOUR_IN_MILLIES } from '@/constants/utils'

// Types
import type { Router } from 'vue-router'

export type IUserStore = {
  token: string | null
  isLoggedIn: boolean
  tokenExpirationDate: string | null
  /**
   * Sets the authentication token, marks the user as logged in,
   * and schedules automatic logout after token expiration.
   *
   * @param {string} token - The authentication token.
   * @param {number} expiresInMillies - Token expiration time in milliseconds.
   * @param {Router} router - Vue Router instance for navigation.
   */
  setToken: (token: string, expiresInMillies: number, router: Router) => void
  /**
   * Removes the authentication token and marks the user as logged out.
   */
  removeToken: () => void
  /**
   * Attempts to log in the user with provided credentials.
   * On success, sets the token and navigates to the dashboard.
   *
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @param {Router} router - Vue Router instance for navigation.
   */
  login: (email: string, password: string, router: Router) => void
  /**
   * Logs out the user by clearing token and navigating to login page.
   *
   * @param {Router} router - Vue Router instance for navigation.
   */
  logOut: (router: Router) => void
}

const { login: logUserIn } = axiosService()
const createUserSlice: StateCreator<IUserStore> = (set, get) => {
  let logoutTimer: NodeJS.Timeout | null = null

  return {
    token: null,
    isLoggedIn: false,
    tokenExpirationDate: null,

    setToken: (token: string, expiresInMillies: number, router: Router) => {
      set({
        token: token,
        isLoggedIn: true,
        tokenExpirationDate: new Date(new Date().getTime() + expiresInMillies).toISOString(),
      })
      if (logoutTimer) clearTimeout(logoutTimer)
      console.log('setToken')
      logoutTimer = setTimeout(() => {
        console.log('timer')
        get().logOut(router)
      }, expiresInMillies)
    },

    removeToken: () => set({ token: null, isLoggedIn: false }),

    login: async (email: string, password: string, router: Router) => {
      logUserIn(email, password)
        .then((res) => {
          const token = res.data.user.token
          if (token) {
            get().setToken(token, HOUR_IN_MILLIES, router)
            router.push({ name: 'dashboard' })
          }
        })
        .catch((err) => console.log(err.response.data.message))
    },

    logOut: (router: Router) => {
      console.log('logout')
      set({
        token: null,
        isLoggedIn: false,
        tokenExpirationDate: null,
      })
      router.push({ name: 'login' })
    },
  }
}

export default createUserSlice
