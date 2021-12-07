import { Graphic } from './graphic.js'
import { packNums, unpackNums } from './pack.js'

window.addEventListener('contextmenu', (e) => e.preventDefault())

let pointerTarget = /** @type {EventTarget|null} */ (null)
let pointerPos = { x: 0, y: 0 }

window.addEventListener('pointerdown', (e) => {
  pointerTarget = e.target
  pointerPos.x = e.clientX
  pointerPos.y = e.clientY
})

window.addEventListener('pointerup', (e) => {
  pointerTarget = null
})

window.addEventListener('pointercancel', (e) => {
  pointerTarget = null
})

window.addEventListener('pointermove', (e) => {
  pointerPos.x = e.clientX
  pointerPos.y = e.clientY
})

window.addEventListener('blur', () => {
  pointerTarget = null
})

/** @typedef {{rect:import("./util").Rect, callback:Function}} CanvasDownInfo */

export class PointerInput {
  #graphic
  #down = false
  #downOld = false
  #count = 0
  #x = 0
  #y = 0
  #dx = 0
  #dy = 0
  #xCount = 0
  #yCount = 0
  #log = /** @type {number[]} */ ([])
  #logIndex = 0
  #logX = /** @type {number[]} */ ([])
  #logXIndex = 0
  #logY = /** @type {number[]} */ ([])
  #logYIndex = 0
  #logMode = /** @type {'pause'|'play'|'rec'} */ ('pause')
  #downInfos = /** @type {CanvasDownInfo[]} */ ([])
  #isDownPrevention = false

  /**
   * @param {Graphic} graphic
   */
  constructor(graphic) {
    this.#graphic = graphic
    const canvas = this.#graphic.canvas

    canvas.addEventListener('pointerdown', (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = Math.floor(((e.clientX - rect.x) * canvas.width) / rect.width)
      const y = Math.floor(((e.clientY - rect.y) * canvas.height) / rect.height)
      for (const { rect, callback } of this.#downInfos) {
        if (
          rect.left <= x &&
          x < rect.right &&
          rect.top <= y &&
          y < rect.bottom
        ) {
          this.#isDownPrevention = true
          callback()
        }
      }
    })
  }

  update() {
    this.#downInfos = []

    const canvas = this.#graphic.canvas

    if (!(pointerTarget instanceof Node)) {
      this.#isDownPrevention = false
    }

    this.#downOld = this.#down
    const dxOld = this.#dx
    const dyOld = this.#dy

    if (this.#logMode === 'play') {
      this.#count++
      if (this.#log[this.#logIndex] < this.#count) {
        this.#down = !this.#down
        this.#count = 0
        this.#logIndex++
      }

      this.#xCount++
      this.#yCount++

      if (this.#logX[this.#logXIndex] < this.#xCount) {
        this.#xCount = 0
        this.#logXIndex += 2
        this.#dx = this.#logX[this.#logXIndex - 1] || 0
      }

      if (this.#logY[this.#logYIndex] < this.#yCount) {
        this.#yCount = 0
        this.#logYIndex += 2
        this.#dy = this.#logY[this.#logYIndex - 1] || 0
      }

      this.#x += this.#dx
      this.#y += this.#dy
    } else {
      this.#down =
        !this.#isDownPrevention && pointerTarget instanceof Node
          ? canvas.contains(pointerTarget)
          : false
      this.#count = this.#down === this.#downOld ? this.#count + 1 : 0

      const xOld = this.#x
      const yOld = this.#y
      const rect = canvas.getBoundingClientRect()
      this.#x = Math.floor(
        (pointerPos.x - rect.x) * (canvas.width / rect.width)
      )
      this.#y = Math.floor(
        (pointerPos.y - rect.y) * (canvas.height / rect.height)
      )
      this.#dx = this.#x - xOld
      this.#dy = this.#y - yOld
      this.#xCount = this.#dx === dxOld ? this.#xCount + 1 : 0
      this.#yCount = this.#dy === dyOld ? this.#yCount + 1 : 0
    }

    if (this.#logMode === 'rec') {
      if (this.#down === this.#downOld) {
        this.#log[this.#log.length - 1] = this.#count
      } else {
        this.#log.push(this.#count)
      }

      if (this.#dx === dxOld) {
        this.#logX[this.#logX.length - 1] = this.#xCount
      } else {
        this.#logX.push(this.#dx, this.#xCount)
      }

      if (this.#dy === dyOld) {
        this.#logY[this.#logY.length - 1] = this.#yCount
      } else {
        this.#logY.push(this.#dy, this.#yCount)
      }
    }

    if (this.#down && !this.#downOld) {
      this.#dx = 0
      this.#dy = 0
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

  get pos() {
    return { x: this.#x, y: this.#y }
  }

  get vec() {
    return { x: this.#dx, y: this.#dy }
  }

  /**
   * @param {import("./util").Box} box
   * @param {Function} callback
   */
  onDown(box, callback) {
    const rect = this.#graphic.boxToRect(box)
    this.#downInfos.push({ rect, callback })
  }

  get logMode() {
    return this.#logMode
  }

  get log() {
    return packNums(this.#log, this.#logX, this.#logY)
  }

  set log(log) {
    const logs = unpackNums(log)
    this.#log = logs[0] || []
    this.#logX = logs[1] || []
    this.#logY = logs[2] || []
    this.#logMode = 'pause'
  }

  recLog() {
    this.#log = [
      this.#count,
      this.#downOld ? 1 : 0,
      this.#down ? 1 : 0,
      this.#count,
    ]
    this.#logX = [this.#xCount, this.#x, this.#dx, this.#xCount]
    this.#logY = [this.#yCount, this.#y, this.#dy, this.#yCount]
    this.#logMode = 'rec'
  }

  playLog() {
    this.#count = this.#log[0] || 0
    this.#downOld = Boolean(this.#log[1])
    this.#down = Boolean(this.#log[2])
    this.#logIndex = 3
    this.#xCount = this.#logX[0] || 0
    this.#x = this.#logX[1] || 0
    this.#dx = this.#logX[2] || 0
    this.#logXIndex = 3
    this.#yCount = this.#logY[0] || 0
    this.#y = this.#logY[1] || 0
    this.#dy = this.#logY[2] || 0
    this.#logYIndex = 3
    this.#logMode = 'play'
  }

  endLog() {
    this.#logMode = 'pause'
  }
}
