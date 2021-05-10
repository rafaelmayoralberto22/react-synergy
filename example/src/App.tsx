import React from 'react'

import store from './store/PersonStore'
import { useObserverStore } from 'react-synergy'

const App = () => {
  const buildStore = useObserverStore(store)

  const onClick = () => {
    buildStore.commit('setName', 'Rafa' + Math.random())
  }

  return (
    <div style={{ display: 'flex' }}>
      <input type='button' onClick={onClick} value='ClickMe' />
      <span>{buildStore.state.lastName}</span> |
      <span>{buildStore.state.name}</span> |
      <span>{buildStore.getters.getFullName}</span>
    </div>
  )
}

export default App
