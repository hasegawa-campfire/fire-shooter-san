import { Tween, Procs } from 'game'
import { g, sprite, tween } from '@/r.js'
const { playerBullet } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  const opacity = tween
    .from(0.2)
    .to(0, 250, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })
    .start()

  const proc = () => {
    g.save()
    g.opacity(opacity.value)
    g.drawSprite(playerBullet, x, y)
    g.restore()
  }

  return proc
}
