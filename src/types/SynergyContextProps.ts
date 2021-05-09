import { Store } from '../core/SynergyStore'

export interface SynergyContextProps {
  stores: Record<string, Store<any>>
}
