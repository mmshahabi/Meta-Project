import { defineStore, storeToRefs } from "pinia"
import type { FunctionKeys } from "utility-types"

/**
@description Creates a useStore function that retrieves the store instance
@param id — id of the store (must be unique)
@param storeSetup — function that defines the store
 */
export function defineComposable<Id extends string, SS extends object>(id: Id, storeSetup: () => SS) {
  const piniaStore = defineStore(id, storeSetup)

  return () => {
    const store = piniaStore()
    const storeRefs = storeToRefs(store)

    // Pick only function properties from source store.
    // And append refs to final output.
    type StoreFunctions = Pick<typeof store, FunctionKeys<typeof store>> & {}
    return { ...store as StoreFunctions, ...storeRefs }
  }
}
