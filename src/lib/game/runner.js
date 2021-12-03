export class Runner {
  #fps
  proc = /** @type {Function|null} */ (null)
  #prevTime = 0
  #updateTimer = 0
  #tickCount = 0

  /**
   * @param {object} param
   * @param {number} param.fps
   */
  constructor({ fps }) {
    this.#fps = fps
    this.#start()
    document.addEventListener('visibilitychange', () => this.#start())
  }

  get fps() {
    return this.#fps
  }

  get time() {
    return (1000 * this.#tickCount) / this.fps
  }

  get frameTime() {
    return 1000 / this.#fps
  }

  #start() {
    window.cancelAnimationFrame(this.#updateTimer)
    if (document.visibilityState === 'visible') {
      this.#updateTimer = window.requestAnimationFrame(this.#update)
    }
  }

  #update = () => {
    this.#updateTimer = window.requestAnimationFrame(this.#update)
    this.#tickCount++

    // const time = Date.now()
    // if ((time - this.#prevTime) / (1000 / this.fps) < 0.8) return
    // this.#prevTime = time

    this.proc?.()
  }
}
