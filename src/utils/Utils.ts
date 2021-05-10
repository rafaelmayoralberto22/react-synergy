import { SynergyStoreProps } from '../types/SynergyStoreProps'

export const keySessionStore = 'synergy-persistence'

export const isEmpty = (record: Record<string, Function>) => {
  return !Object.keys(record).length
}

export const saveStore = <T>(props: SynergyStoreProps<T>) => {
  const { name, state } = props
  const isLocate = sessionStorage.getItem(keySessionStore)
  const value = isLocate ? JSON.parse(isLocate) : {}

  sessionStorage.setItem(
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
  const valueStore = JSON.parse(sessionStorage.getItem(keySessionStore) ?? '')
  if (Object.prototype.hasOwnProperty.call(valueStore, nameStore)) {
    const store = valueStore[nameStore]
    valueStore[nameStore] = {
      ...store,
      [props]: value
    }
    sessionStorage.setItem(keySessionStore, JSON.stringify(valueStore))
  }
}

export const getStoreToStorage = (name: string) => {
  const keyStore = sessionStorage.getItem(keySessionStore)
  if (keyStore) {
    const valueStore = JSON.parse(keyStore)
    if (Object.prototype.hasOwnProperty.call(valueStore, name)) {
      return valueStore[name]
    }
  }
}
