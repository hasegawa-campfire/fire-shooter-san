import { Tween, StatefulPromise } from 'game'
import { g, tween, procs, se, store } from '@/r.js'
import UiCard from '@/common/ui-card.js'
import UiScore from '@/common/ui-score.js'
import UiResultSuccess from './ui-result-success.js'
import UiResultReset from './ui-result-reset.js'
import UiResultTwitter from './ui-result-twitter.js'
import UiNewRecord from './ui-new-record.js'

/**
 * @param {number} score
 * @param {StatefulPromise<Result>} [resultPromise]
 */
export default (score, resultPromise) => {
  const shaking = tween
    .from({ x: 0, y: 0 })
    .to({ x: 2, y: -2 }, 10)
    .to({ x: -2, y: 2 }, 20)
    .to({ x: 2, y: 2 }, 20)
    .to({ x: -2, y: -2 }, 20)
    .to({ x: 0, y: 0 })
  const scoreUp = tween
    .from(0)
    .wait(300)
    .to(score, 500, Tween.inSine)
    .on(() => {
      if (store.isSuccess) {
        successWait.start()
      } else {
        footeIn.start()
      }
    })
    .start(false)
  const successWait = tween.from(0).wait(400)
  const footeIn = tween
    .from(0)
    .wait(200)
    .on(() =>
      procs.ui.add(UiResultTwitter(score, resultPromise), UiResultReset())
    )

  const uiCard = UiCard(90, 49, 'RESULT')
  const uiScore = UiScore(3, 16)
  const uiResultSuccess = UiResultSuccess(106, 1, () => {
    shaking.start()
    footeIn.start()
    if (resultPromise?.value?.newRecord) {
      procs.ui.add(UiNewRecord())
    }
  })

  let oldScore = scoreUp.value

  return () => {
    g.save()
    g.translate(shaking.value.x, shaking.value.y)

    uiCard((rect) => {
      g.translate(rect.x, rect.y)
      uiScore(scoreUp.update().value)
      if (successWait.done) {
        uiResultSuccess()
      }
    })

    g.restore()

    if (oldScore !== scoreUp.value) {
      se.resultCounting.play()
    }
    oldScore = scoreUp.value
  }
}
