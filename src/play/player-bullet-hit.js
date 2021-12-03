import { Tween, Procs } from 'game'
import { g, sprite, tween } from '@/r.js'
const { playerBulletHit } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  const scale = tween
    .from(2)
    .to(1, 100, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })
    .start()

  const proc = () => {
    g.save()
    g.opacity(0.8)
    g.translate(x, y)
    g.scale(scale.value)
    g.drawSprite(playerBulletHit)
    g.restore()
  }

  return proc
}
