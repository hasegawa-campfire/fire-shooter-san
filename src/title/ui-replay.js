import { Tween, centerX } from 'game'
import { g, tween, sprite, version } from '@/r.js'
import UiCard from '@/common/ui-card.js'
import UiScore from '@/common/ui-score.js'
const { replayReady, replayLoading } = sprite

/**
 * @param {PromiseLike<Replay|undefined>} replayPromise
 */
export default (replayPromise) => {
  const wait = tween.from(0).wait(500).start()
  const countUp = tween.from(0).wait(100)
  let spr = replayLoading
  replayPromise.then((replay) => {
    if (replay) {
      if (replay.version === version) {
        spr = replayReady
        countUp.to(replay.score, 300, Tween.inSine).start(false)
      } else {
        throw Error('invalid replay version')
      }
    } else {
      throw Error('replay is not found')
    }
  })

  const uiCard = UiCard(115, 74, 'REPLAY')
  const uiScore = UiScore(3, 16)

  return () => {
    if (wait.done) {
      g.save()

      uiCard((rect) => {
        g.translate(rect.x, rect.y)
        uiScore(countUp.update().value)
        g.drawSprite(spr, centerX(rect, replayLoading), 46)
      })

      g.restore()
    }
  }
}
