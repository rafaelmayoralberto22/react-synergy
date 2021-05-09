import { SynergyStoreProps } from '../types/SynergyStoreProps'
import { Store } from './SynergyStore'

export const stores: Record<string, Store<any>> = {}

export const createStore = <T extends object>(
  props: SynergyStoreProps<T>
): Store<any> => {
  const store = new Store<T>(props)
  stores[props.name] = store
  return store
}
