import { Tween, Procs } from 'game'
import { color, g, tween } from '@/r.js'

/**
 * @param {object} param
 * @param {number} param.x
 * @param {number} param.y
 * @param {boolean} [param.large]
 */
export default ({ x, y, large }) => {
  const radius = tween
    .from(0)
    .to(large ? 16 : 8, 400, Tween.outSine)
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
    g.save()
    g.opacity(opacity.value)
    g.drawCircle(x | 0, y | 0, radius.value | 0, color.accent)
    g.restore()
  }

  return proc
}
