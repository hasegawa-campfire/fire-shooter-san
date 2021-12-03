import { toDelimited } from 'game'
import { g, sprite, color } from '@/r.js'
const { fontUi, scoreBg } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  /**
   * @param {number} score
   * @param {number} [heart]
   */
  return (score, heart) => {
    g.drawSprite(scoreBg, x, y + 2)
    g.drawText(fontUi, `y ${toDelimited(score | 0)}`, x + 1, y)
    g.drawRect(
      x + 1,
      y + 11,
      Math.floor(Math.min(score / 1000000, 1) * 128),
      2,
      color.main
    )
    if (heart !== undefined) {
      g.drawText(fontUi, `h ${heart | 0}`, x + 1, y + 21)
    }
  }
}
