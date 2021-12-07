/**
 * @typedef Box
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 * @property {number} originX
 * @property {number} originY
 */

/**
 * @typedef Rect
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */

/**
 * @template T
 * @typedef {T[keyof T]} ValueOf
 */

/**
 * @template T
 * @typedef {Extract<keyof T,`${number}`|number>} NumberKeys
 */

/**
 * @template T
 * @typedef {NumberKeys<T> extends never ? T : T & {[x:number]:ValueOf<Pick<T,NumberKeys<T>>>}} NumberUnion
 */

/**
 * @param {number} num
 */
export function toDelimited(num) {
  return num.toLocaleString('en-US')
}

/**
 * @param {number} x
 * @param {number} y
 */
export function toDist(x, y) {
  return Math.sqrt(x * x + y * y)
}

/**
 * @param {number} x
 * @param {number} y
 */
export function toAngle(x, y) {
  return Math.atan2(y, x) * (180 / Math.PI)
}

/**
 * @param {number} angle
 */
export function normalizeAngle(angle) {
  angle = angle % 360
  if (angle < 0) angle += 360
  if (angle > 180) angle -= 360
  return angle
}

/**
 * @param {number} angle
 * @param {number} dist
 */
export function toVec(angle, dist = 1) {
  const dec = angle * (Math.PI / 180)
  return {
    x: Math.cos(dec) * dist,
    y: Math.sin(dec) * dist,
  }
}

/**
 * @param {number} x
 * @param {number} y
 */
export function normalizeVec(x, y) {
  const dist = toDist(x, y)
  return {
    x: x / dist,
    y: y / dist,
  }
}

/**
 * @param {number} length
 */
export function times(length) {
  return Array.from({ length }).map((_, i) => i)
}

/**
 * @template K
 * @template V
 * @param {K[]} arr
 * @param {(value:K) => V} callback
 * @return {Record<K,V>}
 */
export function mapObject(arr, callback) {
  return Object.fromEntries(arr.map((value) => [value, callback(value)]))
}

/**
 * @param {{width:number}} base
 * @param {{width:number}} rect
 */
export function centerX(base, rect) {
  return (base.width - rect.width) / 2
}

/**
 * @param {{height:number}} base
 * @param {{height:number}} rect
 */
export function centerY(base, rect) {
  return (base.height - rect.height) / 2
}

/**
 * @param {{width:number}} base
 * @param {{width:number}} rect
 */
export function rightX(base, rect) {
  return base.width - rect.width
}

/**
 * @param {string} value
 */
export function hashCode(value) {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = hash * 31 + value.charCodeAt(i)
    hash = hash | 0
  }
  return hash
}

/**
 * @param {EventTarget} target
 * @param {string|string[]} type
 */
export function asyncEvent(target, type) {
  const types = Array.isArray(type) ? type : [type]
  return Promise.race(
    types.map((type) => {
      return new Promise((resolve) => target.addEventListener(type, resolve))
    })
  )
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} rate
 */
export function map(a, b, rate) {
  return (b - a) * rate + a
}

/**
 * @param {({isDown:boolean}[]|{value:number}[])[]} keys
 */
export function getArrowVec(...keys) {
  let dist = 0
  let x = 0
  let y = 0
  for (const [up, right, down, left] of keys) {
    if (
      'value' in up &&
      'value' in right &&
      'value' in down &&
      'value' in left
    ) {
      const vx = Math.min(Math.max(right.value - left.value, -1), 1)
      const vy = Math.min(Math.max(down.value - up.value, -1), 1)
      const d = Math.sqrt(vx * vx + vy * vy)
      if (dist < d) {
        dist = d
        x = vx
        y = vy
      }
    } else if (
      'isDown' in up &&
      'isDown' in right &&
      'isDown' in down &&
      'isDown' in left
    ) {
      const vx = (right.isDown ? 1 : 0) + (left.isDown ? -1 : 0)
      const vy = (down.isDown ? 1 : 0) + (up.isDown ? -1 : 0)
      const d = Math.sqrt(vx * vx + vy * vy)
      if (dist < (d === 0 ? 0 : 1)) {
        dist = 1
        x = vx / d
        y = vy / d
      }
    }
  }
  return { x, y }
}
