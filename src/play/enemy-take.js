import { Tween, Procs } from 'game'
import { color, g, sprite, tween, procs, store } from '@/r.js'
import TakeRate from './take-rate.js'
import { fireEnemyTakeChip } from './enemy-take-chip.js'
const { enemyTake, enemyLargeTake } = sprite

/**
 * @param {object} param
 * @param {number} param.x
 * @param {number} param.y
 * @param {boolean} [param.large]
 * @param {number} param.heart
 */
export default ({ x, y, large, heart }) => {
  const rate = store.getHeartRate()
  const radius = tween
    .from(0)
    .to(large ? 32 : 16, 250, Tween.outSine)
    .wait(100)
    .start()
  const scale = tween
    .from(0)
    .to(1.5, 100, Tween.outSine)
    .to(0.8, 100, Tween.inOutSine)
    .to(1, 100, Tween.inSine)
    .start()
  const opacity = tween
    .from(0.9)
    .wait(200)
    .to(0, 200, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
      procs.effectOverPlayer.add(TakeRate(x, y, rate, heart))
    })
    .start()
  const circleColor = color.accent.opacity(0.37)

  // fireEnemyTakeChip(x, y)

  const proc = () => {
    g.save()
    g.opacity(opacity.value)
    g.translate(x | 0, y | 0)
    if (!radius.done) {
      g.drawCircle(0, 0, radius.value | 0, circleColor)
    }
    g.scale(scale.value)
    g.drawSprite(large ? enemyLargeTake : enemyTake)
    g.restore()
  }

  return proc
}
