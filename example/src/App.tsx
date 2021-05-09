import React from 'react'

import 'react-synergy/dist/index.css'
import store from './store/PersonStore'

const App = () => {
  store.commit('setName', 'Rafa');

  return (
    <div style={{ display: 'flex' }}>
      <span>{store.state.lastName}</span> |<span>{store.state.name}</span> |
      <span>{store.getters.getFullName}</span>
    </div>
  )
}

export default App
