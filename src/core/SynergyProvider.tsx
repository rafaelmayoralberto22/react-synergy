import * as React from 'react'

import { SynergyContext } from './SynergyContext'
import { Store } from './SynergyStore'

const stores: Record<string, Store<any>> = {}

export const SynergyProvider: React.FC = ({ children }) => {
  return (
    <SynergyContext.Provider value={{ stores }}>
      {children}
    </SynergyContext.Provider>
  )
}
