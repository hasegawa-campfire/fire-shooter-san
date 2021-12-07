import { packNums, unpackNums } from './pack.js'

let gamepads = /** @type {(Gamepad|null)[]} */ ([])
let cacheExpires = 0

export class GamepadButtonInput {
  #indexes
  #down = false
  #downOld = false
  #count = 0
  #log = /** @type {number[]} */ ([])
  #logIndex = 0
  #logMode = /** @type {'pause'|'play'|'rec'} */ ('pause')

  /**
   *
   * @param {number[]} indexes
   */
  constructor(indexes) {
    this.#indexes = indexes
  }

  update() {
    const t = Date.now()
    if (cacheExpires < t) {
      gamepads = navigator.getGamepads?.() || []
      cacheExpires = t + 5
    }

    this.#downOld = this.#down
    if (this.#logMode === 'play') {
      this.#count++
      if (this.#log[this.#logIndex] < this.#count) {
        this.#down = !this.#down
        this.#count = 0
        this.#logIndex++
      }
    } else {
      this.#down = this.#indexes.some((index) => {
        for (const gamepad of gamepads) {
          if (
            gamepad &&
            gamepad.buttons[index] &&
            gamepad.buttons[index].pressed
          ) {
            return true
          }
        }
      })
      this.#count = this.#down === this.#downOld ? this.#count + 1 : 0
    }

    if (this.#logMode === 'rec') {
      if (this.#down === this.#downOld) {
        this.#log[this.#log.length - 1] = this.#count
      } else {
        this.#log.push(this.#count)
      }
    }
  }

  get isDown() {
    return this.#down
  }

  get isDownChange() {
    return this.#down && !this.#downOld
  }

  get isUpChange() {
    return !this.#down && this.#downOld
  }

  get downCount() {
    return this.#down ? this.#count : NaN
  }

  get upCount() {
    return this.#down ? NaN : this.#count
  }

  get logMode() {
    return this.#logMode
  }

  get log() {
    return this.#log.slice()
  }

  set log(log) {
    this.#log = log.slice()
    this.#logMode = 'pause'
  }

  recLog() {
    this.#log = [
      this.#count,
      this.#downOld ? 1 : 0,
      this.#down ? 1 : 0,
      this.#count,
    ]
    this.#logMode = 'rec'
  }

  playLog() {
    this.#count = this.#log[0]
    this.#downOld = Boolean(this.#log[1])
    this.#down = Boolean(this.#log[2])
    this.#logIndex = 3
    this.#logMode = 'play'
  }

  endLog() {
    this.#logMode = 'pause'
  }
}

export class GamepadAxesInput {
  #indexes
  #down = false
  #downOld = false
  #count = 0
  #value = 0
  #valueOld = 0
  #valueCount = 0
  #log = /** @type {number[]} */ ([])
  #logIndex = 0
  #logValue = /** @type {number[]} */ ([])
  #logValueIndex = 0
  #logMode = /** @type {'pause'|'play'|'rec'} */ ('pause')

  /**
   *
   * @param {[number,boolean][]} indexes
   */
  constructor(indexes) {
    this.#indexes = indexes
  }

  update() {
    const t = Date.now()
    if (cacheExpires < t) {
      gamepads = navigator.getGamepads?.() || []
      cacheExpires = t + 5
    }

    this.#downOld = this.#down
    this.#valueOld = this.#value

    if (this.#logMode === 'play') {
      this.#count++
      if (this.#log[this.#logIndex] < this.#count) {
        this.#down = !this.#down
        this.#count = 0
        this.#logIndex++
      }

      this.#valueCount++
      if (this.#logValue[this.#logValueIndex] < this.#valueCount) {
        this.#valueCount = 0
        this.#logValueIndex += 2
        this.#value = this.#logValue[this.#logValueIndex - 1] || 0
      }
    } else {
      this.#down = this.#indexes.some(([index, positive]) => {
        const sign = positive ? 1 : -1
        for (const gamepad of gamepads) {
          if (gamepad && gamepad.axes[index] * sign > 0.5) {
            return true
          }
        }
      })
      this.#count = this.#down === this.#downOld ? this.#count + 1 : 0

      const value = this.#indexes.reduce((v, [index, positive]) => {
        const sign = positive ? 1 : -1
        for (const gamepad of gamepads) {
          if (gamepad && index < gamepad.axes.length) {
            v = Math.max(v, gamepad.axes[index] * sign)
          }
        }
        return v
      }, 0)
      this.#value = Math.floor((value < 0.1 ? 0 : value) * 256)
      this.#valueCount =
        this.#value === this.#valueOld ? this.#valueCount + 1 : 0
    }

    if (this.#logMode === 'rec') {
      if (this.#down === this.#downOld) {
        this.#log[this.#log.length - 1] = this.#count
      } else {
        this.#log.push(this.#count)
      }

      if (this.#value === this.#valueOld) {
        this.#logValue[this.#logValue.length - 1] = this.#valueCount
      } else {
        this.#logValue.push(this.#value, this.#valueCount)
      }
    }
  }

  get isDown() {
    return this.#down
  }

  get isDownChange() {
    return this.#down && !this.#downOld
  }

  get isUpChange() {
    return !this.#down && this.#downOld
  }

  get downCount() {
    return this.#down ? this.#count : NaN
  }

  get upCount() {
    return this.#down ? NaN : this.#count
  }

  get value() {
    return this.#value / 256
  }

  get logMode() {
    return this.#logMode
  }

  get log() {
    return packNums(this.#log, this.#logValue)
  }

  set log(log) {
    const logs = unpackNums(log)
    this.#log = logs[0] || []
    this.#logValue = logs[1] || []
    this.#logMode = 'pause'
  }

  recLog() {
    this.#log = [
      this.#count,
      this.#downOld ? 1 : 0,
      this.#down ? 1 : 0,
      this.#count,
    ]
    this.#logValue = [
      this.#valueCount,
      this.#value,
      this.#valueOld,
      this.#valueCount,
    ]
    this.#logMode = 'rec'
  }

  playLog() {
    this.#count = this.#log[0] || 0
    this.#downOld = Boolean(this.#log[1])
    this.#down = Boolean(this.#log[2])
    this.#logIndex = 3
    this.#valueCount = this.#logValue[0] || 0
    this.#value = this.#logValue[1] || 0
    this.#valueOld = this.#logValue[2] || 0
    this.#logValueIndex = 3
    this.#logMode = 'play'
  }

  endLog() {
    this.#logMode = 'pause'
  }
}
