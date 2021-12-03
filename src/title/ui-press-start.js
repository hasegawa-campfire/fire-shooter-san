import { centerX, StatefulPromise } from 'game'
import { g, sprite, tween, version } from '@/r.js'
const { pressAnyButton } = sprite

/**
 * @param {StatefulPromise<Replay|undefined>} [replayPromise]
 */
export default (replayPromise) => {
  const blink = tween
    .from(false)
    .wait(1300)
    .on(() => !replayPromise || replayPromise.value?.version === version)
    .loopStart()
    .to(true, 800)
    .to(false, 400)
    .loopEnd()
    .start()

  return () => {
    if (blink.value) {
      g.drawSprite(pressAnyButton, centerX(g, pressAnyButton), 215)
    }
  }
}
