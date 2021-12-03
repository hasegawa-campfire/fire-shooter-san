const reColor =
  /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i

const colorCache =
  /** @type {Record<string,Record<'red'|'green'|'blue'|'alpha',number>>} */ ({})

export class Color {
  #red
  #green
  #blue
  #alpha
  #cacheString = ''

  /**
   * @param {object} color
   * @param {number} [color.red]
   * @param {number} [color.green]
   * @param {number} [color.blue]
   * @param {number} [color.alpha]
   */
  constructor(color = {}) {
    this.#red = color.red ?? 0
    this.#green = color.green ?? 0
    this.#blue = color.blue ?? 0
    this.#alpha = color.alpha ?? 1
  }

  get red() {
    return this.#red
  }

  set red(value) {
    this.#red = value
    this.#cacheString = ''
  }

  get green() {
    return this.#green
  }

  set green(value) {
    this.#green = value
    this.#cacheString = ''
  }

  get blue() {
    return this.#blue
  }

  set blue(value) {
    this.#blue = value
    this.#cacheString = ''
  }

  get alpha() {
    return this.#alpha
  }

  set alpha(value) {
    this.#alpha = value
    this.#cacheString = ''
  }

  toString() {
    if (!this.#cacheString) {
      this.#cacheString =
        '#' +
        toHex(this.#red) +
        toHex(this.#green) +
        toHex(this.#blue) +
        toHex(this.#alpha)
    }
    return this.#cacheString
  }

  /**
   * @param {number} value
   */
  opacity(value) {
    const color = new Color(this)
    color.alpha = Math.min(Math.max(0, this.#alpha * value), 1)
    return color
  }

  /**
   * @param {string} value
   */
  static parse(value) {
    let color = colorCache[value]
    if (!color) {
      const m = value.match(reColor) || []
      color = colorCache[value] = {
        red: parseInt(m[1] || m[5] + m[5] || '0', 16) / 255,
        green: parseInt(m[2] || m[6] + m[6] || '0', 16) / 255,
        blue: parseInt(m[3] || m[7] + m[7] || '0', 16) / 255,
        alpha: parseInt(m[4] || m[8] + m[8] || 'ff', 16) / 255,
      }
    }
    return new Color(color)
  }

  /**
   * @param {Color} from
   * @param {Color} to
   * @param {number} rate
   */
  static blend(from, to, rate = 0.5) {
    return new Color({
      red: (to.red - from.red) * rate + from.red,
      green: (to.green - from.green) * rate + from.green,
      blue: (to.blue - from.blue) * rate + from.blue,
      alpha: (to.alpha - from.alpha) * rate + from.alpha,
    })
  }
}

/**
 * @param {number} value
 */
function toHex(value) {
  return Math.min(Math.max(0, Math.floor(value * 255)), 255)
    .toString(16)
    .padStart(2, '0')
}
