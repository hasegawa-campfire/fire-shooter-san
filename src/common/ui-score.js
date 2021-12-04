import { toDelimited } from 'game'
import { g, sprite, color, tween } from '@/r.js'
const { fontUi, scoreBg } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  const flash = tween.from(0).wait(150)
  let oldHeart = 0

  /**
   * @param {number} score
   * @param {number} [heart]
   */
  return (score, heart) => {
    g.drawSprite(scoreBg, x, y + 2)
    g.drawText(fontUi.normal, `y ${toDelimited(score | 0)}`, x + 1, y)
    g.drawRect(
      x + 1,
      y + 11,
      Math.floor(Math.min(score / 1000000, 1) * 128),
      2,
      color.main
    )

    if (heart !== undefined) {
      if (oldHeart < heart && !flash.running) {
        oldHeart = heart
        flash.start(false)
      }
      const font = flash.update().running ? fontUi.flash : fontUi.normal
      g.drawText(font, `h ${heart | 0}`, x + 1, y + 21)
    }
  }
}
