import { Tween, centerX, Procs } from 'game'
import { store, g, sprite, tween, event, runner } from '@/r.js'
import UiScore from '@/common/ui-score.js'
import UiStatusTime from './ui-status-time.js'
import UiStatusReset from './ui-status-reset.js'
const { card } = sprite

export default () => {
  const on = /** @type {EventMap} */ ({})
  const height = 39

  const uiScore = UiScore(7, 2)
  const uiStatusTime = UiStatusTime(card.body.width / 2, 22)
  const uiStatusReset = UiStatusReset(card.body.width, height)

  const initSlide = tween
    .from(-height)
    .wait(250)
    .to(0, 250, Tween.outSine)
    .on(() => {
      store.screenTop = height
      event.emit('statusInitIn')
    })
    .start()
  const finSlide = tween
    .from(0)
    .to(-height, 400, Tween.inSine)
    .on(() => {
      store.screenTop = 0
      event.emit('statusFinOut')
      Procs.remove(proc)
    })

  on.timeUp = () => {
    finSlide.start()
  }

  store.screenTop = 0

  /**
   * @param {number} score
   * @param {number} heart
   * @param {number} time
   */
  const proc = (score, heart, time) => {
    event.subscribe(on)

    g.save()
    g.translate(
      centerX(g, card.body),
      finSlide.started ? finSlide.value : initSlide.value
    )
    g.drawSprite(card.body, 0, 0, card.body.width, height - card.bottom.height)
    g.drawSprite(card.bottom, 0, height - card.bottom.height)
    uiScore(score, heart)
    uiStatusTime(time / runner.fps)
    uiStatusReset()
    g.restore()
  }

  return proc
}
