import { Tween } from 'game'
import { g, sprite, pointer, tween, event, se } from '@/r.js'
import Title from '@/title/index.js'
import { setReplayId } from '@/leaderboard/index.js'
const { buttonReset, buttonLight } = sprite

export default () => {
  const slide = tween
    .from(g.height)
    .to(g.height - buttonReset.height - 30, 300, Tween.outSine)
    .start()
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
    const x = g.width - buttonReset.width - 30
    const y = slide.value

    pointer.onDown(buttonReset.toBox(x, y), onClick)

    g.drawSprite(buttonReset, x, y)

    if (flash.value) {
      g.save()
      g.opacity(0.5)
      g.drawSprite(buttonLight, x, y)
      g.restore()
    }
  }
}
