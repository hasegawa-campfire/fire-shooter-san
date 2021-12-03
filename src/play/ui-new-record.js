import { centerX, Color } from 'game'
import { g, sprite, tween, event, procs } from '@/r.js'
import Flash from '@/common/flash.js'
const { newRecord } = sprite

export default () => {
  const blink = tween
    .from(false)
    .loopStart()
    .to(false, 500)
    .to(true, 500)
    .loopEnd()
    .start()

  let first = true

  return () => {
    if (first) {
      first = false
      event.emit('newRecordShow')
      procs.ui.add(
        Flash({
          color: Color.parse('#fff'),
          time: 100,
        })
      )
    }
    const spr = blink.value ? newRecord.flash : newRecord.normal
    g.drawSprite(spr, centerX(g, spr), 44)
  }
}
