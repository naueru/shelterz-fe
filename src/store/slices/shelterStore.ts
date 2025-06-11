// Types
import type { StateCreator } from 'zustand-vue'
import type { IObject } from '@/types/generics'

export type IShelterStore = {
  resources: IObject
  buildings: IObject
  technologies: IObject
  upgradeBuilding: (building: string) => void
  researchTechnology: (technology: string) => void
}

const createShelterSlice: StateCreator<IShelterStore> = (set) => ({
  resources: {},
  buildings: {},
  technologies: {},
  upgradeBuilding: (building: string) => {
    // Api call
    set((state) => ({ buildings: { ...state.buildings, [building]: 'Response' } }))
  },
  researchTechnology: (technology: string) => {
    // Api call
    set((state) => ({ technologies: { ...state.technologies, [technology]: 'Response' } }))
  },
})

export default createShelterSlice
