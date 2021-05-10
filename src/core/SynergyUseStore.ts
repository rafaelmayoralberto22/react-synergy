import { useState } from 'react'

import { SynergyContextProps } from '../types/SynergyContextProps'

export function useObserverStore<T extends object>(
  props: SynergyContextProps<T>
): SynergyContextProps<T> {
  const [state, setState] = useState<boolean>(false)

  const execAction = (action: 'commit' | 'dispatch') => (
    type: string,
    payload?: unknown
  ) => {
    props[action](type, payload)
    setState(!state)
  }

  return {
    state: props.state,
    getters: props.getters,
    dispatch: execAction('dispatch'),
    commit: execAction('commit')
  }
}
