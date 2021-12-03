import { centerX, Procs } from 'game'
import { g, sprite, event } from '@/r.js'
const { replayNow } = sprite

export default () => {
  const on = /** @type {EventMap} */ ({})

  on.timeUp = () => {
    Procs.remove(proc)
  }

  const proc = () => {
    event.subscribe(on)
    g.drawSprite(replayNow, centerX(g, replayNow), 40)
  }

  return proc
}
