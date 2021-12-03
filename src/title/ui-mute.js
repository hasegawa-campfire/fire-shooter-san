import { rightX } from 'game'
import { g, sprite, pointer, tween, se, bgm } from '@/r.js'
const { buttonMute, buttonLight } = sprite

export default () => {
  const flash = tween.from(false).to(true, 100).to(false)

  let mute = localStorage.getItem('mute') === 'true'

  const onClick = () => {
    mute = !mute
    localStorage.setItem('mute', String(mute))
    Object.values(se).forEach((a) => a.setMute(mute))
    Object.values(bgm).forEach((a) => a.setMute(mute))
    flash.start()
    se.uiButton.play()
  }

  return () => {
    const spr = buttonMute[mute ? 1 : 0]
    const x = rightX(g, spr) - 7
    const y = 7

    pointer.onDown(spr.toBox(x, y), onClick)

    g.drawSprite(spr, x, y)

    if (flash.value) {
      g.save()
      g.opacity(0.5)
      g.drawSprite(buttonLight, x, y)
      g.restore()
    }
  }
}
