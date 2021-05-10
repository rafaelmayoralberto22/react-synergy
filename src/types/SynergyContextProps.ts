export interface SynergyContextProps<T> {
  dispatch: (type: string, payload?: unknown) => void
  commit: (type: string, payload?: unknown) => void
  state: T
  getters: Record<string, Function>
}
