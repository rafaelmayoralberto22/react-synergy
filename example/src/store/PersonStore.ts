import { createStore } from 'react-synergy'

type Toggle = { name: string; lastName: string }

const store = createStore<Toggle>({
  name: 'Rafa',
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
})

export default store
