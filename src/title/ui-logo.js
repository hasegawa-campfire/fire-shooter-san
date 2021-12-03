import { centerX, Tween, StatefulPromise } from 'game'
import { g, sprite, tween, pointer, se, store } from '@/r.js'
import { setMode } from '@/leaderboard/index.js'
const { titleLogo, titleLogoIcon } = sprite

/**
 * @param {StatefulPromise<Replay|undefined>} [replayPromise]
 */
export default (replayPromise) => {
  const logoSlide = tween.from(8).wait(300).to(0, 600, Tween.outSine).start()
  const logoOpacity = tween.from(0).wait(300).to(1, 600, Tween.steps(3)).start()
  const iconSlide = tween
    .from(3)
    .loopStart()
    .to(-3, 1500, Tween.inOutSine)
    .to(3, 1500, Tween.inOutSine)
    .loopEnd()
    .start()
  const createFlash = () => {
    return tween
      .from(-100)
      .loopStart()
      .wait(2000)
      .to(-100)
      .to(spr.flash.width, 200)
      .wait(3000)
      .to(-100)
      .to(spr.flash.width, 200)
      .to(-100)
      .to(spr.flash.width, 200)
      .wait(2000)
      .loopEnd()
  }
  const toggleFlash = tween
    .from(0)
    .wait(60)
    .on(() => {
      spr.normal = getSprite().normal
    })

  const getSprite = () => {
    return {
      normal: isEx() ? titleLogo.ex : titleLogo.normal,
      flash: isEx() ? titleLogo.exFlash : titleLogo.normalFlash,
    }
  }

  const toggleMode = () => {
    store.mode = store.mode === 'ex' ? 'normal' : 'ex'
    setMode(store.mode)
    se.titleModeChange.play()
  }

  const isEx = () => (replayPromise?.value?.mode ?? store.mode) === 'ex'
  let oldEx = isEx()
  let spr = getSprite()
  let flash = createFlash().start()

  return () => {
    if (oldEx !== isEx()) {
      oldEx = isEx()
      spr.normal = spr.flash = getSprite().flash
      flash.end()
      toggleFlash.end()
      flash = createFlash().start()
      toggleFlash.start()
    }

    const y = 80
    const x = centerX(g, spr.normal)
    const fw = spr.flash.width
    const fv = Math.round(flash.value)

    const logoBox = spr.normal.toBox(x, y)
    logoBox.height += 30
    logoBox.originY += 25

    if (!replayPromise) {
      pointer.onDown(logoBox, toggleMode)
    }

    g.save()
    g.drawSprite(
      titleLogoIcon,
      centerX(g, titleLogoIcon),
      y - 27 + Math.round(iconSlide.value)
    )
    g.opacity(logoOpacity.value)
    g.drawSprite(spr.normal, x, y + logoSlide.value)
    g.opacity(0.8)
    g.drawSprite(
      spr.flash.sub({
        x: Math.max(0, fv),
        width: (fv < 0 ? 100 + fv : Math.min(100, fw - fv)) - fw,
      }),
      x + Math.max(0, fv),
      y + logoSlide.value
    )
    g.restore()
  }
}
