import { SynergyStoreProps } from '../types/SynergyStoreProps'

const keySessionStore = 'synergy-persistence'

export const isEmpty = (record: Record<string, Function>) => {
  return !Object.keys(record).length
}

export const saveStore = <T>(props: SynergyStoreProps<T>) => {
  const { name, state } = props
  const isLocate = localStorage.getItem(keySessionStore)
  const value = isLocate ? JSON.parse(isLocate) : {}

  localStorage.setItem(
    keySessionStore,
    JSON.stringify({
      ...value,
      [name]: state
    })
  )
}

export const changeStateInLocalStore = (
  nameStore: string,
  props: PropertyKey,
  value: unknown
) => {
  const valueStore = JSON.parse(localStorage.getItem(keySessionStore) ?? '')
  if (valueStore.hasOwnProperty(nameStore)) {
    const store = valueStore[nameStore]
    valueStore[nameStore] = {
      ...store,
      [props]: value
    }
    localStorage.setItem(keySessionStore, JSON.stringify(valueStore))
  }
}

export const getStoreToStorage = (name: string) => {
  const keyStore = localStorage.getItem(keySessionStore)
  if (keyStore) {
    const valueStore = JSON.parse(keyStore)
    if (valueStore.hasOwnProperty(name)) {
      return valueStore[name]
    }
  }
}
