import { useContext } from 'react'

import { SynergyStoreProps } from '../types/SynergyStoreProps'
import { Store } from './SynergyStore'
import { SynergyContext } from './SynergyContext'

export const createStore = <T extends object>(
  props: SynergyStoreProps<T>
): Store<any> => {
  const synergyContext = useContext(SynergyContext)
  const store = new Store<T>(props)
  synergyContext.stores[props.name] = store
  return store
}
