import { SynergyContextProps } from '../types/SynergyContextProps'
import { SynergyStoreProps } from '../types/SynergyStoreProps'
import { Store } from './SynergyStore'
import { SynergyCreateStoreOptions } from '../types/SynergyCreateStoreOptions'
import { getStoreToStorage, saveStore } from '../utils/Utils'

export function createStore<T extends object>(
  props: SynergyStoreProps<T>,
  options?: SynergyCreateStoreOptions
): SynergyContextProps<T> {
  const persistence = options?.persistence
  let store = new Store(props, options)

  if (persistence) {
    const { name } = props
    const storePropsStorage = getStoreToStorage(name)
    store = new Store<T>(
      persistence && !!storePropsStorage
        ? { ...props, state: storePropsStorage }
        : props,
      options
    )

    if (!storePropsStorage) saveStore(props)
  }

  return {
    dispatch: store.dispatch,
    commit: store.commit,
    getters: store.getters,
    state: store.state
  }
}
