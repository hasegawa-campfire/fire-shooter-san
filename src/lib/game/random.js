export class Random {
  #seed = Uint32Array.of(Math.random() * 0xffffffff + 1)

  get seed() {
    return this.#seed[0] | 0
  }

  set seed(value) {
    this.#seed[0] = value
  }

  updateSeed() {
    this.#seed[0] = Math.random() * 0xffffffff + 1
    return this.seed
  }

  /**
   * @param {number} min
   * @param {number} [max]
   */
  nextInt(min, max) {
    this.#seed[0] ^= this.#seed[0] << 13
    this.#seed[0] ^= this.#seed[0] >> 17
    this.#seed[0] ^= this.#seed[0] << 5
    const value = this.#seed[0] / 0x100000000

    if (max === undefined) {
      max = min
      min = 0
    }
    return Math.floor(value * (max - min)) + min
  }

  /**
   * @param {number} min
   * @param {number} [max]
   */
  nextFloat(min, max) {
    this.#seed[0] ^= this.#seed[0] << 13
    this.#seed[0] ^= this.#seed[0] >> 17
    this.#seed[0] ^= this.#seed[0] << 5
    const value = this.#seed[0] / 0x100000000

    if (max === undefined) {
      max = min
      min = 0
    }
    return value * (max - min) + min
  }

  /**
   * @template T
   * @param {Array<T>} values
   */
  shuffle(values) {
    return values
      .map((val) => ({ num: this.nextFloat(1), val }))
      .sort((a, b) => a.num - b.num)
      .map(({ val }) => val)
  }
}
