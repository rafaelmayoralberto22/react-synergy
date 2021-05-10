# react-synergy

> State management to React js.

[![NPM](https://img.shields.io/npm/v/react-synergy.svg)](https://www.npmjs.com/package/react-synergy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-synergy
```

## Usage

##### Create a store

```tsx
import { createStore } from 'react-synergy'
import { SynergyContextProps } from '../../../src/types/SynergyContextProps'

export type Toggle = { name: string; lastName: string }

const store = createStore<Toggle>({
  name: 'Person',
  state: {
    name: 'Harry',
    lastName: 'Potter'
  },
  actions: {
    randomName({ commit }: SynergyContextProps<Toggle>) {
      const words = [
        'Kiara',
        'Izan',
        'Julissa',
        'Neytiri',
        'Amara',
        'Maverick',
        'Kya'
      ]
      commit('setName', words[Math.floor(Math.random() * words.length)])
    },
    changeLastName({ commit }: SynergyContextProps<Toggle>, value: string) {
      commit('setLastName', value)
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
})

export default store
```

###### CreateStore options

> persistence: use it to save the state of the store while the session is active. (Default: false)

##### Use observable store

```tsx
import React from 'react'

import store from './store/PersonStore'
import { useObserverStore } from 'react-synergy'

import './index.css'

const App = () => {
  const buildStore = useObserverStore(store)

  const onClickRandomName = () => {
    buildStore.dispatch('randomName')
  }

  const onClickLastName = () => {
    const lastName = prompt('Please enter your last name', 'Lakers')
    buildStore.dispatch('changeLastName', lastName)
  }

  return (
    <div className={'card-example'}>
      <div className={'card-example-actions'}>
        <input type='button' onClick={onClickRandomName} value='Random Name' />
        <input type='button' onClick={onClickLastName} value='Last Name' />
      </div>

      <div className={'card-example-content'}>
        <span>
          <b>Name:</b>
          {buildStore.state.name}
        </span>

        <span>
          <b>Last Name:</b>
          {buildStore.state.lastName}
        </span>

        <span>
          <b>Full Name:</b>
          {buildStore.getters.getFullName}
        </span>
      </div>
    </div>
  )
}

export default App
```

## License

MIT © [Rafael Mayor Alberto](https://github.com/Rafael Mayor Alberto)
