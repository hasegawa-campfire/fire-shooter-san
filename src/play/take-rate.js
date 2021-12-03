import { Tween, Procs } from 'game'
import { g, sprite, tween } from '@/r.js'
const { fontRate } = sprite

/**
 * @param {number} x
 * @param {number} y
 * @param {number} rate
 * @param {number} heart
 */
export default (x, y, rate, heart) => {
  const flash = tween
    .from(false)
    .loopStart()
    .to(true, 40)
    .to(false, 60)
    .loopEnd()
  const oy = tween
    .from(0)
    .to(-6, 200, Tween.outSine)
    .wait(300)
    .on(() => {
      Procs.remove(proc)
    })
    .start()

  if (16 <= rate) {
    flash.start(false)
  }

  const proc = () => {
    if (rate > 1) {
      const spr = flash.update().value ? fontRate.flash : fontRate.normal
      g.drawText(spr, `*${rate}`, x | 0, (y + oy.value) | 0, -1)
    }
  }

  return proc
}
