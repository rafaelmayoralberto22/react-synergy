import { changeStateInLocalStore, isEmpty } from '../utils/Utils'
import { SynergyStoreProps } from '../types/SynergyStoreProps'
import { SynergyCreateStoreOptions } from '../types/SynergyCreateStoreOptions'

export class Store<T extends object> {
  state: T

  mutations: Record<string, Function>

  getters: Record<string, Function>

  actions: Record<string, Function>

  constructor(
    props: SynergyStoreProps<T>,
    options?: SynergyCreateStoreOptions
  ) {
    const { state, actions, getters, mutations, name } = props
    this.state = new Proxy(state, {
      set: (target, key, value) => {
        if (options?.persistence && target[key] !== value)
          changeStateInLocalStore(name, key, value)

        target[key] = value
        return true
      },
      get(target: T, key): any {
        return target[key]
      }
    })

    this.mutations = this.registerMutations(mutations)
    this.actions = this.registerActions(actions)
    this.getters = this.registerGetters(getters)
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  commit(type: string, payload?: unknown) {
    if (this.mutations.hasOwnProperty(type)) {
      this.mutations[type](payload)
    } else {
      throw Error('The mutation is not defined')
    }
  }

  dispatch(type: string, payload?: unknown) {
    if (this.actions.hasOwnProperty(type)) {
      return this.actions[type](payload)
    }
    throw Error('The action is not defined')
  }

  registerMutations(mutation: Record<string, Function>) {
    if (!isEmpty(mutation)) {
      const mut: Record<string, Function> = {}
      Object.keys(mutation).forEach((value) => {
        mut[value] = (payload: unknown) => {
          mutation[value](this.state, payload)
        }
      })
      return mut
    }
    throw Error('It is necessary to define mutations to change states.')
  }

  registerGetters(getters: Record<string, Function>) {
    if (!isEmpty(getters)) {
      const rGetter: Record<string, Function> = {}
      Object.keys(getters).forEach((value) => {
        Object.defineProperty(rGetter, value, {
          get: () => getters[value](this.state),
          enumerable: true
        })
      })
      return rGetter
    }
    return {}
  }

  registerActions(actions: Record<string, Function> | undefined) {
    if (actions && !isEmpty(actions)) {
      const act: Record<string, Function> = {}
      Object.keys(actions).forEach((value) => {
        act[value] = (payload: unknown) => {
          return actions[value](
            {
              commit: this.commit,
              dispatch: this.dispatch,
              state: this.state,
              getters: this.getters
            },
            payload
          )
        }
      })
      return act
    }
    return {}
  }
}
