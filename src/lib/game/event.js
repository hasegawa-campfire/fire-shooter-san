/** @typedef {Record<string,Function>} EventMap */
/** @typedef {{type:string,data:any}} EventEmit */

export class EventManager {
  #eventMaps = /** @type {Set<EventMap>} */ (new Set())
  #eventEmits = /** @type {Set<EventEmit>} */ (new Set())

  clear() {
    this.#eventMaps.clear()
    this.#eventEmits.clear()
  }

  /**
   * @param {EventMap} map
   */
  subscribe(map) {
    for (const emit of this.#eventEmits) {
      map[emit.type]?.(emit.data)
    }
    this.#eventMaps.add(map)
  }

  /**
   * @param {string} type
   * @param {any} [data]
   */
  emit(type, data) {
    for (const map of this.#eventMaps) {
      map[type]?.(data)
    }
    this.#eventEmits.add({ type, data })
  }
}
