import * as React from 'react'
import { SynergyContextProps } from '../types/SynergyContextProps'

export const SynergyContext = React.createContext<SynergyContextProps>({
  stores: {} as any
})
