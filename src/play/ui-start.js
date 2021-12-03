import { Tween, centerX, Procs } from 'game'
import { g, sprite, tween, event } from '@/r.js'
const { start } = sprite

export default () => {
  const on = /** @type {EventMap} */ ({})
  const slide = tween
    .from(-100)
    .wait(100)
    .to(44)
    .to(54, 300, Tween.outSine)
    .wait(600)
    .on(() => {
      Procs.remove(proc)
    })
    .start()

  on.timeUp = () => {
    slide.start()
  }

  const proc = () => {
    event.subscribe(on)
    g.drawSprite(start, centerX(g, start), slide.value)
  }

  return proc
}
