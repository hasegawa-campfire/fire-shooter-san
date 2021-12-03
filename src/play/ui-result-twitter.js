import { Tween, toDelimited, StatefulPromise } from 'game'
import { g, sprite, pointer, tween } from '@/r.js'
import { getShareUrl } from '@/leaderboard/index.js'
const { buttonTwitter } = sprite

/**
 * @param {number} score
 * @param {StatefulPromise<Result>} [resultPromise]
 */
export default (score, resultPromise) => {
  const slide = tween
    .from(g.height)
    .to(g.height - buttonTwitter.height - 30, 300, Tween.outSine)
    .start()

  const onClick = () => {
    const text = resultPromise?.isResolved()
      ? `￥${toDelimited(score)}\n#FireShooterSan\n${getShareUrl()}`
      : `#FireShooterSan\n${getShareUrl()}`
    const params = new URLSearchParams({ text })
    window.open(`https://twitter.com/intent/tweet?${params}`)
  }

  return () => {
    const x = 30
    const y = slide.value

    pointer.onDown(buttonTwitter.toBox(x, y), onClick)

    g.drawSprite(buttonTwitter, x, y)
  }
}
