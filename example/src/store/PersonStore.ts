import { createStore } from 'react-synergy'

export type Toggle = { name: string; lastName: string }

const store = createStore<Toggle>(
  {
    name: 'Person',
    state: {
      name: 'Jhon',
      lastName: 'Joker'
    },
    actions: {},
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
