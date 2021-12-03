import { Tween, Procs } from 'game'
import { color, g, procs, sprite, tween, se } from '@/r.js'
import PlayerDestroyChip from './player-destroy-chip.js'
import Flash from '@/common/flash.js'
const { playerDestroy } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  const radius = tween.from(0).to(24, 250, Tween.outSine).wait(200).start()
  const scale = tween
    .from(0)
    .to(2, 100, Tween.outSine)
    .to(0.7, 150, Tween.inOutSine)
    .to(1.2, 50, Tween.inSine)
    .to(1, 100, Tween.inSine)
    .start()
  const opacity = tween
    .from(1)
    .wait(200)
    .to(0, 250, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })
    .start()
  const circleColor = color.accent.opacity(0.37)

  for (let angle = 0; angle < 720; angle += 48) {
    procs.effectOverEnemy.add(PlayerDestroyChip(x, y, angle, angle / 2 + 200))
  }

  // procs.effectOverEnemy.add(
  //   Flash({
  //     time: 60,
  //     color: color.accent.opacity(0.2),
  //   })
  // )
  se.playerHit.play()

  const proc = () => {
    g.save()
    g.opacity(opacity.value)
    g.translate(x | 0, y | 0)
    if (!radius.done) {
      g.drawCircle(0, -6, radius.value | 0, circleColor)
    }
    g.scale(scale.value)
    g.drawSprite(playerDestroy)
    g.restore()
  }

  return proc
}
