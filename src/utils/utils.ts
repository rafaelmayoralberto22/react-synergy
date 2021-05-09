import { Store } from '../core/SynergyStore'
import { SStoreProps } from '../types/SynergyStoreProps'

export const isEmpty = (record: Record<string, Function>) => {
  return !Object.keys(record).length
}


export function createStore<T extends object>(
  props: SStoreProps<T>
): Store<T> {
  const store = new Store<T>(props);

  return store;
}
