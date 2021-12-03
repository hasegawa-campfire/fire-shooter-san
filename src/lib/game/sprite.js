/**
 * @typedef SpriteParam
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [originX]
 * @property {number} [originY]
 */

/**
 * @template T
 * @typedef {{[P in keyof T]: T[P] extends any[] ? Sprite: import("./util").NumberUnion<SpriteMap<T[P]>>}} SpriteMap
 */

const imageCache = /** @type {{[key:string]:HTMLImageElement}} */ ({})

export class Sprite {
  #param

  /**
   * @param {HTMLImageElement} image
   * @param {SpriteParam} param
   */
  constructor(image, param = {}) {
    this.image = image
    this.#param = { ...param }
  }

  /**
   * @param {URL|string} url
   * @param {SpriteParam} param
   */
  static load(url, param = {}) {
    const key = url instanceof URL ? url.href : url
    let image = imageCache[key]
    if (!image) {
      image = imageCache[key] = new Image()
      image.src = key
    }
    return new Sprite(image, param)
  }

  get x() {
    return this.#param.x ?? 0
  }

  get y() {
    return this.#param.y ?? 0
  }

  get width() {
    return this.#param.width ?? this.image.width
  }

  get height() {
    return this.#param.height ?? this.image.height
  }

  get originX() {
    return this.#param.originX ?? 0
  }

  get originY() {
    return this.#param.originY ?? 0
  }

  get originLeft() {
    return this.originX
  }

  get originTop() {
    return this.originY
  }

  get originRight() {
    return this.width - this.originX
  }

  get originBottom() {
    return this.height - this.originY
  }

  /**
   * @param {SpriteParam} param
   */
  sub(param) {
    const newParam = { ...this.#param }
    if (param.x !== undefined) {
      newParam.x = param.x + (newParam.x ?? 0)
    }
    if (param.y !== undefined) {
      newParam.y = param.y + (newParam.y ?? 0)
    }
    if (param.width !== undefined) {
      newParam.width = param.width + (newParam.width ?? 0)
    }
    if (param.height !== undefined) {
      newParam.height = param.height + (newParam.height ?? 0)
    }
    if (param.originX !== undefined) {
      newParam.originX = param.originX + (newParam.originX ?? 0)
    }
    if (param.originY !== undefined) {
      newParam.originY = param.originY + (newParam.originY ?? 0)
    }
    return new Sprite(this.image, newParam)
  }

  /**
   * @template T
   * @param {URL|string} url
   * @param {T} value
   * @return {SpriteMap<T>}
   */
  static loadMap(url, value) {
    /**
     * @param {any} value
     * @return {any}
     */
    const map = (value) => {
      if (Array.isArray(value)) {
        const [x, y, width, height, originX, originY] = value
        return Sprite.load(url, {
          x,
          y,
          width,
          height,
          originX: originX ?? 0,
          originY: originY ?? 0,
        })
      }
      const entries = Object.entries(value).map(([k, v]) => [k, map(v)])
      return Object.fromEntries(entries)
    }
    return map(value)
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {import("./util").Box}
   */
  toBox(x, y) {
    return {
      x,
      y,
      width: this.width,
      height: this.height,
      originX: this.originX,
      originY: this.originY,
    }
  }
}
