/** @type {WeakMap<Function,Set<Function>>} */
const procSets = new WeakMap()

export class Procs {
  #procs = /** @type {Set<Function>} */ (new Set())

  /**
   * @param {Function[]} procs
   */
  add(...procs) {
    for (const proc of procs) {
      Procs.remove(proc)
      this.#procs.add(proc)
      procSets.set(proc, this.#procs)
    }
  }

  /**
   * @param {any[]} args
   */
  run(...args) {
    for (const proc of this.#procs) {
      proc(...args)
    }
  }

  clear() {
    this.#procs.clear()
  }

  get isEmpty() {
    return !this.#procs.size
  }

  get size() {
    return this.#procs.size
  }

  /**
   * @param {Function} proc
   */
  static remove(proc) {
    const set = procSets.get(proc)
    let ret = false
    if (set) {
      ret = set.delete(proc)
      procSets.delete(proc)
    }
    return ret
  }

  /**
   * @param {Function[]} procs
   */
  static of(...procs) {
    const ps = new Procs()
    ps.add(...procs)
    return ps
  }
}
