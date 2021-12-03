import { Graphic } from './graphic.js'

/**
 * @typedef HitInfo
 * @property {string} type
 * @property {any} data
 * @property {import("./util").Rect} rect
 * @property {import("./event").EventMap} eventMap
 */

export class HitManager {
  #graphic
  #hitInfos = /** @type {HitInfo[]} */ ([])

  /**
   * @param {Graphic} graphic
   */
  constructor(graphic) {
    this.#graphic = graphic
    this.#hitInfos = []
  }

  clear() {
    this.#hitInfos = []
  }

  /**
   * @param {string} type
   * @param {any} data
   * @param {import("./util").Box} box
   * @param {import("./event").EventMap} eventMap
   */
  emit(type, data, box, eventMap) {
    const rect = this.#graphic.boxToRect(box)

    for (const {
      type: type0,
      data: data0,
      rect: rect0,
      eventMap: eventMap0,
    } of this.#hitInfos) {
      const callback0 = eventMap0[type]
      const callback = eventMap[type0]
      if (
        (callback0 || callback) &&
        rect.left < rect0.right &&
        rect0.left < rect.right &&
        rect.top < rect0.bottom &&
        rect0.top < rect.bottom
      ) {
        callback0?.(data)
        callback?.(data0)
      }
    }

    this.#hitInfos.push({ type, data, rect, eventMap })
  }
}
