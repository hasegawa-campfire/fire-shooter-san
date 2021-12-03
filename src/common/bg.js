import { g, tween, sprite, color } from '@/r.js'

/**
 * @param {number} speed
 */
export default (speed) => {
  /**
   * @param {number} w
   * @param {number} sh
   * @param {number} opacity
   * @param {number} vy
   * @param {number} sw
   * @param {number} swTime
   */
  const createWave = (w, sh, opacity, vy, sw, swTime) => {
    const swTw = tween
      .from(sw)
      .loopStart()
      .to(-sw, swTime)
      .to(sw, swTime)
      .loopEnd()
      .start()
    let y = vy * 80

    return () => {
      y += vy * speed
      const swa = Math.abs(Math.floor(swTw.value))
      const sws = Math.sign(swTw.value)
      const left = Math.floor(g.width / 2 - w / 2 + swa / 2)
      const right = Math.floor(g.width / 2 + w / 2 - swa / 2)

      g.save()
      g.opacity(opacity)
      g.drawRect(left, 0, right - left, g.height, color.main)
      g.translate(0, Math.floor(y % (sh * 2)))
      for (const [sx, scaleX] of [
        [left, -1],
        [right, 1],
      ]) {
        let scaleY = sws
        g.save()
        for (let sy = -sh * 2; sy < g.height + sh / 2; sy += sh) {
          g.save()
          g.translate(sx, sy)
          g.scale(scaleX, scaleY)
          g.drawSprite(sprite.bg, 0, 0, swa, sh)
          g.restore()
          scaleY = -scaleY
        }
        g.restore()
      }
      g.restore()
    }
  }

  const waves = [
    createWave(100, 80, 0.07, 3, 16, 4000),
    createWave(105, 120, 0.06, 2.4, 24, 4500),
    createWave(110, 160, 0.05, 1.8, 32, 5000),
  ]

  return () => {
    waves.forEach((wave) => wave())
  }
}
