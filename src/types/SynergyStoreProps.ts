export interface SynergyStoreProps<T> {
  name: string

  state: T

  mutations: Record<string, Function>

  getters: Record<string, Function>

  actions?: Record<string, Function>
}
