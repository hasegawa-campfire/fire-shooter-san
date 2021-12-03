import { Color } from './color.js'
import { Sprite } from './sprite.js'

const canvasStyle = `
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  touch-action: none;
`

const blendModes = {
  normal: 'source-over',
  add: 'lighter',
  multiply: 'multiply',
  screen: 'screen',
  overlay: 'overlay',
}

/** @typedef {keyof blendModes} BlendMode */

export class Graphic {
  width
  height
  canvas
  #canvasCtx

  /**
   * @param {object} param
   * @param {number} param.width
   * @param {number} param.height
   * @param {HTMLElement|string} param.el
   */
  constructor({ width, height, el }) {
    const canvas = typeof el === 'string' ? document.querySelector(el) : el
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw Error('not canvas element')
    }

    this.canvas = canvas
    this.width = canvas.width = width
    this.height = canvas.height = height
    canvas.setAttribute('style', canvasStyle)

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw Error('none context2d')
    }

    this.#canvasCtx = ctx
    ctx.imageSmoothingEnabled = false

    window.addEventListener('resize', () => this.#resize())
    window.setTimeout(() => this.#resize(), 1)
  }

  #resize() {
    const uw = this.canvas.width / window.devicePixelRatio
    const uh = this.canvas.height / window.devicePixelRatio
    const rw = Math.floor(window.innerWidth / uw)
    const rh = Math.floor(window.innerHeight / uh)
    this.canvas.style.width = `${Math.max(Math.min(rw, rh), 1) * uw}px`
  }

  clear() {
    this.#canvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    this.#canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  save() {
    this.#canvasCtx.save()
  }

  restore() {
    this.#canvasCtx.restore()
  }

  getMatrix() {
    return this.#canvasCtx.getTransform()
  }

  /**
   * @param {Sprite} sprite
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [width]
   * @param {number} [height]
   */
  drawSprite(sprite, x, y, width, height) {
    if (!sprite.image.complete) return

    width = width ?? sprite.width
    height = height ?? sprite.height
    x = (x ?? 0) - sprite.originX * (width / sprite.width)
    y = (y ?? 0) - sprite.originY * (height / sprite.height)

    this.#canvasCtx.drawImage(
      sprite.image,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height,
      Math.floor(x),
      Math.floor(y),
      Math.floor(width),
      Math.floor(height)
    )
  }

  /**
   * @param {Record<string,Sprite>} map
   * @param {string} text
   * @param {number} x
   * @param {number} y
   * @param {number} space
   */
  drawText(map, text, x, y, space = 1) {
    let ox = 0
    for (const c of text) {
      if (c === ' ') {
        if (ox) ox += space
        ox += 1
        continue
      }
      const cw = map[c]?.width ?? 0
      if (cw) {
        if (ox) ox += space
        this.drawSprite(map[c], x + ox, y)
        ox += cw
      }
    }
  }

  /**
   * @param {Record<string,Sprite>} map
   * @param {string} text
   * @param {number} space
   */
  measuretext(map, text, space = 1) {
    let width = 0
    for (const c of text) {
      if (c === ' ') {
        if (width) width += space
        width += 1
        continue
      }
      const cw = map[c]?.width ?? 0
      if (cw) {
        if (width) width += space
        width += cw
      }
    }
    return width
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {Color} color
   */
  drawRect(x, y, width, height, color) {
    this.#canvasCtx.fillStyle = String(color)
    this.#canvasCtx.fillRect(x, y, width, height)
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} r
   * @param {Color} color
   */
  drawCircle(x, y, r, color) {
    x = Math.floor(x)
    y = Math.floor(y)
    r = Math.floor(r)
    this.#canvasCtx.fillStyle = String(color)
    const fillRect = this.#canvasCtx.fillRect.bind(this.#canvasCtx)
    let ox = -r
    let oy = 0
    let err = 2 - 2 * r
    do {
      fillRect(x - ox, y + oy, 1, 1)
      fillRect(x - oy, y - ox, 1, 1)
      fillRect(x + ox, y - oy, 1, 1)
      fillRect(x + oy, y + ox, 1, 1)
      r = err
      if (r <= oy) err += ++oy * 2 + 1
      if (r > ox || err > oy) err += ++ox * 2 + 1
    } while (ox < 0)
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  translate(x, y) {
    this.#canvasCtx.translate(x, y)
  }

  /**
   * @param {number} x
   * @param {number} [y]
   */
  scale(x, y) {
    this.#canvasCtx.scale(x, y ?? x)
  }

  /**
   * @param {number} angle
   */
  rotate(angle) {
    this.#canvasCtx.rotate((angle * Math.PI) / 180)
  }

  /**
   * @param {number} value
   */
  opacity(value) {
    this.#canvasCtx.globalAlpha = Math.min(Math.max(value, 0), 1)
  }

  /**
   * @param {BlendMode} value
   */
  blendMode(value) {
    this.#canvasCtx.globalCompositeOperation = blendModes[value]
  }

  /**
   * @param {import("./util").Box} box
   * @return {import("./util").Rect}
   */
  boxToRect(box) {
    const matrix = this.getMatrix()
    const x = box.x - box.originX
    const y = box.y - box.originY
    const p1 = matrix.transformPoint({ x, y })
    const p2 = matrix.transformPoint({ x: x + box.width, y })
    const p3 = matrix.transformPoint({
      x: x + box.width,
      y: y + box.height,
    })
    const p4 = matrix.transformPoint({ x, y: y + box.height })

    return {
      left: Math.min(p1.x, p2.x, p3.x, p4.x),
      top: Math.min(p1.y, p2.y, p3.y, p4.y),
      right: Math.max(p1.x, p2.x, p3.x, p4.x),
      bottom: Math.max(p1.y, p2.y, p3.y, p4.y),
    }
  }
}
