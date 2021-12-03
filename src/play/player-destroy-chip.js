import { Tween, Procs, toVec } from 'game'
import { g, sprite, tween } from '@/r.js'
const { playerDestroyChip } = sprite

/**
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 * @param {number} waitTime
 */
export default (x, y, angle, waitTime) => {
  const wait = tween.from(0).wait(waitTime).start()
  const scale = tween.from(0).to(2).to(1, 200, Tween.inSine).start(false)
  const opacity = tween
    .from(0)
    .to(0.8, 100)
    .wait(300)
    .to(0, 200)
    .on(() => {
      Procs.remove(proc)
    })
    .start(false)
  const speed = tween.from(4).to(0.2, 300, Tween.outSine).start(false)
  const v = toVec(angle)

  const proc = () => {
    if (!wait.done) return

    speed.update()
    x += v.x * speed.value
    y += v.y * speed.value
    g.save()
    g.opacity(opacity.update().value)
    g.translate(x | 0, y | 0)
    g.scale(scale.update().value)
    g.drawSprite(playerDestroyChip)
    g.restore()
  }

  return proc
}
