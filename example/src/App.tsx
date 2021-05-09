import React from 'react'

import { SynergyProvider } from 'react-synergy'
import 'react-synergy/dist/index.css'
import store from './store/PersonStore'

const App = () => {
  return <SynergyProvider>{store.getters.getFullName}</SynergyProvider>
}

export default App
