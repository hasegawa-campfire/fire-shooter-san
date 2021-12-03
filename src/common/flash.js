import { Procs, Color } from 'game'
import { g, tween } from '@/r.js'

/**
 * @param {object} [config]
 * @param {number} [config.time]
 * @param {number} [config.times]
 * @param {Color} [config.color]
 * @param {Function} [config.onEnd]
 */
export default (config) => {
  const {
    time = 30,
    times = 1,
    color = Color.parse('#fff8'),
    onEnd,
  } = config ?? {}

  const blink = tween
    .from(true)
    .to(true, time)
    .loopStart(times - 1)
    .to(false, time)
    .to(true, time)
    .loopEnd()
    .start()

  const proc = () => {
    if (blink.value) {
      g.drawRect(0, 0, g.width, g.height, color)
    }
    if (blink.done) {
      Procs.remove(proc)
      onEnd?.()
    }
  }

  return proc
}
