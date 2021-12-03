import { Runner } from './runner.js'
import { Color } from './color.js'

/** @typedef {(p:number)=>number} Easing */

/**
 * @param {number} value
 */
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
function clone(value) {
  if (value instanceof Color) {
    return /** @type {any} */ (new Color(value))
  }
  if (typeof value === 'object') {
    return /** @type {any} */ (
      Object.fromEntries(
        Object.entries(value).map(([key, value]) => [key, clone(value)])
      )
    )
  }
  return value
}

/**
 * @param {any} from
 * @param {any} to
 * @param {number} rate
 * @return {any}
 */
function pick(from, to, rate) {
  if (from instanceof Color && to instanceof Color) {
    return Color.blend(from, to, rate)
  }
  if (typeof from === 'number' && typeof to === 'number') {
    return (to - from) * rate + from
  }
  if (typeof from === 'boolean' && typeof to === 'boolean') {
    return rate > 0 ? to : from
  }
  if (typeof from === 'object' && typeof to === 'object') {
    return Object.fromEntries(
      Object.keys(from).map((key) => [key, pick(from[key], to[key], rate)])
    )
  }
  return clone(to === undefined ? from : to)
}

/**
 * @param {Easing} callback
 */
function ease(callback) {
  /**
   * @param {number} p
   */
  return (p) => {
    if (p <= 0) return 0
    if (1 <= p) return 1
    return callback(p)
  }
}

/**
 * @template T
 */
export class Tween {
  static linear = ease((p) => p)
  static inSine = ease((p) => 1 - Math.cos(p * (Math.PI / 2)))
  static outSine = ease((p) => Math.sin(p * (Math.PI / 2)))
  static inOutSine = ease((p) => {
    return p < 0.5
      ? Tween.inSine(p * 2) * 0.5
      : 0.5 + Tween.outSine((p - 0.5) * 2) * 0.5
  })
  /**
   * @param {number} n
   */
  static steps = (n) => {
    return ease((p) => Math.ceil(p * n) / n)
  }
  /**
   * @param {number} n
   */
  static frameSteps = (n) => {
    return ease((p) => Math.floor(p * n) / (n - 1))
  }

  #time = 0
  #defaultUpdateTime
  #managerTweens
  #steps = /** @type {(()=>Function)[]} */ ([])
  #stepIndex = 0
  #stepFunc = /** @type {Function|null} */ (null)
  #started = false
  #startValue
  #endValue
  #loopCounts = /** @type {Record<number,number>} */ ({})
  #loopStarts = /** @type {number[]} */ ([])
  #loopEnds = /** @type {Record<number,number>} */ ({})
  #loopLabels = /** @type {Record<string,number>} */ ({})
  value

  /**
   * @param {T} value
   * @param {number|(()=>number)} defaultUpdateTime
   * @param {Set<Tween<any>>} [managerTweens]
   */
  constructor(value, defaultUpdateTime = 1, managerTweens) {
    this.#defaultUpdateTime = defaultUpdateTime
    this.#managerTweens = managerTweens
    this.#startValue = this.#endValue = clone(value)
    this.value = clone(value)
  }

  reset() {
    if (this.#managerTweens) {
      this.#managerTweens.delete(this)
    }
    this.#started = false
    this.#time = 0
    this.#stepIndex = 0
    this.#stepFunc = null
    this.value = clone(this.#startValue)
  }

  /**
   * @param {boolean} [manage]
   */
  start(manage) {
    if (manage === false) {
      this.#managerTweens?.delete(this)
    } else {
      this.#managerTweens?.add(this)
    }
    this.#started = true
    this.#time = 0
    this.#stepIndex = 0
    this.#stepFunc = null
    this.value = clone(this.#startValue)
    return this
  }

  end() {
    if (this.#managerTweens) {
      this.#managerTweens.delete(this)
    }
    this.#started = true
    this.#stepIndex = this.#steps.length
    this.#stepFunc = null
    this.value = clone(this.#endValue)
  }

  /**
   * @param {T} value
   * @param {number} time
   * @param {Easing} easing
   */
  to(value, time = 0, easing = Tween.linear) {
    time = Math.max(time, 0)
    const toValue = (this.#endValue = clone(value))
    this.#steps.push(() => {
      const fromValue = clone(this.value)
      return () => {
        if (this.#time <= time) {
          this.value = pick(fromValue, toValue, easing(this.#time / time))
          return true
        } else {
          this.#time -= time
          this.value = clone(toValue)
        }
      }
    })
    return this
  }

  /**
   * @param {number} time
   */
  wait(time) {
    time = Math.max(time, 0)
    this.#steps.push(() => () => {
      if (this.#time <= time) {
        return true
      } else {
        this.#time -= time
      }
    })
    return this
  }

  /**
   * @param {Function} callback
   */
  on(callback) {
    this.#steps.push(() => {
      const time = this.#time
      return () => {
        this.#time = time
        return callback() === false
      }
    })
    return this
  }

  /**
   * @param {number|((count:number)=>any)} times
   * @param {string} [label]
   */
  loopStart(times = Infinity, label) {
    /** @type {(count:number)=>any} */
    const condition = typeof times === 'number' ? (i) => i < times : times
    this.#steps.push(() => () => {
      this.#loopCounts[index] = 0
      if (label) {
        this.#loopLabels[label] = 0
      }
    })
    const index = this.#steps.length
    this.#loopStarts.push(index)
    this.#loopCounts[index] = 0
    this.#steps.push(() => () => {
      let i = this.#loopCounts[index]
      if (label) {
        this.#loopLabels[label] = i
      }
      if (!condition(i)) {
        this.#stepIndex = this.#loopEnds[index]
        this.#stepFunc = null
      }
    })
    return this
  }

  loopEnd() {
    const index = this.#steps.length
    const startIndex = this.#loopStarts.pop()
    if (startIndex === undefined) {
      throw Error('no corresponding loopStart()')
    }
    this.#loopEnds[startIndex] = index
    this.#steps.push(() => () => {
      this.#loopCounts[startIndex]++
      this.#stepIndex = startIndex - 1
      this.#stepFunc = null
    })
    return this
  }

  /**
   * @param {number} [time]
   */
  update(time) {
    time =
      time ??
      (typeof this.#defaultUpdateTime === 'function'
        ? this.#defaultUpdateTime()
        : this.#defaultUpdateTime)
    if (this.running) {
      this.#time += Math.max(0, time)
      do {
        if (!this.#stepFunc) {
          this.#stepFunc = this.#steps[this.#stepIndex]()
        }
        if (this.#stepFunc()) {
          break
        } else {
          this.#stepFunc = null
          this.#stepIndex++
        }
      } while (this.running)
    }
    return this
  }

  get done() {
    return this.#stepIndex >= this.#steps.length
  }

  get started() {
    return this.#started
  }

  get running() {
    return this.started && !this.done
  }

  /**
   * @param {T} value
   */
  getAndSet(value) {
    const prev = this.value
    this.value = value
    return prev
  }

  get loops() {
    return this.#loopLabels
  }
}

export class TweenManager {
  #runner
  #getFrameTime
  #tweens = /** @type {Set<Tween<any>>} */ (new Set())

  /**
   * @param {Runner} runner
   */
  constructor(runner) {
    this.#runner = runner
    this.#getFrameTime = () => this.#runner.frameTime
  }

  update() {
    for (const tween of this.#tweens) {
      tween.update()
      if (tween.done) {
        this.#tweens.delete(tween)
      }
    }
  }

  /**
   * @template T
   * @param {T} value
   */
  from(value) {
    return new Tween(value, this.#getFrameTime, this.#tweens)
  }

  clear() {
    this.#tweens.clear()
  }
}
