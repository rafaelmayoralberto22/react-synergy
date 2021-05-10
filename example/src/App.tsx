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
    buildStore.commit('setLastName', lastName)
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
