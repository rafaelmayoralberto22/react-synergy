import { createStore } from 'react-synergy'
import { SynergyContextProps } from '../../../src/types/SynergyContextProps'

export type Toggle = { name: string; lastName: string }

const store = createStore<Toggle>(
  {
    name: 'Person',
    state: {
      name: 'Harry',
      lastName: 'Potter'
    },
    actions: {
      randomName({ commit }: SynergyContextProps<Toggle>) {
        const words = [
          'Ruben',
          'Roger',
          'Marcelo',
          'David',
          'Yaniel',
          'Adolfo',
          'Javier'
        ]
        commit('setName', words[Math.floor(Math.random() * words.length)])
      }
    },
    mutations: {
      setName(state: Toggle, value: string) {
        state.name = value
      },
      setLastName(state: Toggle, value: string) {
        state.lastName = value
      }
    },
    getters: {
      getFullName(state: Toggle) {
        return `${state.name} ${state.lastName}`
      }
    }
  },
  { persistence: true }
)

export default store
