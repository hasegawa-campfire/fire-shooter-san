/**
 * @template T
 * @implements {PromiseLike<T>}
 */
export class StatefulPromise {
  #promise
  #resolved = false
  /** @type {T|undefined} */
  #value = undefined

  /**
   * @param {PromiseLike<T>} promise
   */
  constructor(promise) {
    this.#promise = promise
    promise.then((value) => {
      this.#resolved = true
      this.#value = value
    })
  }

  /**
   * @template TResult1=T
   * @template TResult2=nerver
   * @param {((value: T) => TResult1 | PromiseLike<TResult1>) | null} [onfulfilled]
   * @param {((reason: any) => TResult2 | PromiseLike<TResult2>) | null} [onrejected]
   */
  then(onfulfilled, onrejected) {
    return new StatefulPromise(this.#promise.then(onfulfilled, onrejected))
  }

  /**
   * @return {this is {value:T}}
   */
  isResolved() {
    return this.#resolved
  }

  get value() {
    return this.#value
  }

  /**
   * @template T
   * @param {PromiseLike<T>|(()=>PromiseLike<T>)} data
   */
  static from(data) {
    return new StatefulPromise(typeof data === 'function' ? data() : data)
  }
}
