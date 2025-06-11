import { create } from 'zustand-vue'
import { persist } from 'zustand/middleware'
import createUserSlice from './slices/userStore'
import createShelterSlice from './slices/shelterStore'
import type { IUserStore } from './slices/userStore'
import type { IShelterStore } from './slices/shelterStore'

type IAppStore = IUserStore & IShelterStore

const store = create(
  persist<IAppStore>(
    (set, get, store) => ({
      ...createUserSlice(set, get, store),
      ...createShelterSlice(set, get, store),
    }),
    { name: 'app-storage' },
  ),
)

export default store
