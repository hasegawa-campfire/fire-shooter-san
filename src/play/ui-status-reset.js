import { g, sprite, tween, event, pointer, se } from '@/r.js'
import Title from '@/title/index.js'
import { setReplayId } from '@/leaderboard/index.js'
const { uiStatusReset } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  const flash = tween
    .from(false)
    .to(true, 100)
    .to(false)
    .on(() => {
      event.emit('sceneChange', () => {
        setReplayId('')
        return Title()
      })
    })

  const onClick = () => {
    if (!flash.started) {
      flash.start()
      se.uiButton.play()
    }
  }

  return () => {
    pointer.onDown(
      uiStatusReset.toBox(x - uiStatusReset.width, y - uiStatusReset.height),
      onClick
    )

    g.opacity(flash.value ? 0.2 : 1)
    g.drawSprite(
      uiStatusReset,
      x - uiStatusReset.width,
      y - uiStatusReset.height
    )
  }
}
