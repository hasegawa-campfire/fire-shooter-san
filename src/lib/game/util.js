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

const base64chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'

/**
 * @param {number[]} numbers
 */
export function nums2code(numbers) {
  let code = ''
  for (let num of numbers) {
    num = Math.floor(num)
    let digits = (0 <= num ? num : -num - 1).toString(2).length + 1
    let head = 0
    let tmp = ''
    while (digits > 0) {
      tmp = base64chars[(num & 0b011111) | head] + tmp
      digits -= 5
      num = num >> 5
      head = 0b100000
    }
    code += tmp
  }
  return code
}

/**
 * @param {string} code
 */
export function code2nums(code) {
  const numbers = /** @type {number[]} */ ([])
  let num = 0
  let first = true
  for (const c of code) {
    let i = base64chars.indexOf(c)
    if (i < 0) throw Error('invalid string')
    if (first && i & 0b010000) num = -1
    first = false
    num = (num << 5) | (i & 0b011111)
    if ((i & 0b100000) === 0) {
      numbers.push(num)
      num = 0
      first = true
    }
  }
  return numbers
}

/**
 * @param  {number[][]} values
 */
export function packNums(...values) {
  let packValue = /** @type {number[]} */ ([])
  for (const nums of values) {
    packValue = packValue.concat(nums.length, nums)
  }
  return packValue
}

/**
 * @param  {number[]} packValue
 * @param  {number} size
 */
export function unpackNums(packValue, size) {
  const values = /** @type {number[][]} */ ([])
  let index = 0
  for (let i = 0; i < size; i++) {
    const end = index + 1 + packValue[index]
    if (packValue.length < end) throw Error('invalid pack size')
    values.push(packValue.slice(index + 1, end))
    index = end
  }
  return values
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
