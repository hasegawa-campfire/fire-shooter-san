const scrollKeys = [
  ' ',
  'Tab',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown',
  'Home',
  'End',
]

/**
 * @param {any} el
 */
function isInputElement(el) {
  return (
    el instanceof HTMLElement && !!el.closest('input, textarea, select, button')
  )
}

window.addEventListener('keydown', (e) => {
  if (scrollKeys.includes(e.key) && !isInputElement(e.target)) {
    e.preventDefault()
  }
})

let keyDowns = /** @type {Record<string,boolean>} */ ({})

window.addEventListener('keydown', (e) => {
  if (!isInputElement(e.target)) {
    keyDowns[e.key.toLocaleLowerCase()] = true
  }
})

window.addEventListener('keyup', (e) => {
  if (!isInputElement(e.target)) {
    keyDowns[e.key.toLocaleLowerCase()] = false
  }
})

window.addEventListener('blur', () => {
  keyDowns = {}
})

export class KeyInput {
  #keys
  #down = false
  #downOld = false
  #count = 0
  #log = /** @type {number[]} */ ([])
  #logIndex = 0
  #logMode = /** @type {'pause'|'play'|'rec'} */ ('pause')

  /**
   * @param {string|string[]} key
   */
  constructor(key) {
    this.#keys = (Array.isArray(key) ? key : [key]).map((k) =>
      k.toLocaleLowerCase()
    )
  }

  update() {
    this.#downOld = this.#down

    if (this.#logMode === 'play') {
      this.#count++
      if (this.#log[this.#logIndex] < this.#count) {
        this.#down = !this.#down
        this.#count = 0
        this.#logIndex++
      }
    } else {
      this.#down = this.#keys.some((key) => keyDowns[key])
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

/**
 * @param {KeyInput[]} param
 */
export function getArrowKeysVec([up, right, down, left]) {
  const vx = (right.isDown ? 1 : 0) + (left.isDown ? -1 : 0)
  const vy = (down.isDown ? 1 : 0) + (up.isDown ? -1 : 0)
  const d = Math.sqrt(vx * vx + vy * vy) || 1
  return { x: vx / d, y: vy / d }
}
