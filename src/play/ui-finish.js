import { Tween, centerX, Procs } from 'game'
import { g, sprite, tween, event } from '@/r.js'
const { finish } = sprite

export default () => {
  const on = /** @type {EventMap} */ ({})
  const slide = tween.from(54).to(44, 300, Tween.outSine).start()

  on.timeUp = () => {
    slide.start()
  }

  on.newRecordShow = () => {
    Procs.remove(proc)
  }

  const proc = () => {
    event.subscribe(on)
    g.drawSprite(finish, centerX(g, finish), slide.value)
  }

  return proc
}
