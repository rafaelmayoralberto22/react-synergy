export interface SStoreProps<T>{
  state: T;

  mutations: Record<string, Function>;

  getters: Record<string, Function>;

  actions?: Record<string, Function>;
}
