import { Tween, Procs, toVec } from 'game'
import { color, g, tween } from '@/r.js'

/**
 * @param {object} param
 * @param {number} param.x
 * @param {number} param.y
 * @param {boolean} [param.large]
 * @param {number|Tween<number>} param.angle
 * @param {number|Tween<number>} param.speed
 */
export default ({ x, y, large, angle, speed }) => {
  const radius = tween
    .from(0)
    .to(large ? 8 : 4, 400, Tween.outSine)
    .start()
  const opacity = tween
    .from(0.6)
    .wait(200)
    .to(0, 200, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })
    .start()

  const proc = () => {
    const v = toVec(
      angle instanceof Tween ? angle.value : angle,
      speed instanceof Tween ? speed.value : speed
    )
    x += v.x
    y += v.y

    g.save()
    g.opacity(opacity.value)
    g.drawCircle(x | 0, y | 0, radius.value | 0, color.accent)
    g.restore()
  }

  return proc
}
