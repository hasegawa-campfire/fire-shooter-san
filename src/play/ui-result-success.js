import { Tween } from 'game'
import { se, g, sprite, tween } from '@/r.js'
const { success } = sprite

/**
 * @param {number} x
 * @param {number} y
 * @param {Function} onEnd
 */
export default (x, y, onEnd) => {
  const transform = tween
    .from({ rotate: -15, scale: 3 })
    .to({ rotate: -0, scale: 1 }, 250, Tween.inSine)
    .on(() => {
      blink.start()
      onEnd()
      se.resultSuccess.play()
    })
    .start(false)
  const blink = tween
    .from(false)
    .loopStart()
    .to(false, 500)
    .to(true, 500)
    .loopEnd()

  return () => {
    transform.update()
    g.save()
    g.translate(x, y)
    g.rotate(transform.value.rotate)
    g.scale(transform.value.scale)
    g.drawSprite(blink.value ? success.flash : success.normal)
    g.restore()
  }
}
