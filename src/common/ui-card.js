import { centerX, Tween } from 'game'
import { g, sprite, tween } from '@/r.js'
const { card, fontUiS } = sprite

const padding = 4

/**
 * @param {number} y
 * @param {number} contentHeight
 * @param {string} title
 */
export default (y, contentHeight, title = '') => {
  const x = centerX(g, card.top)
  const bodyHeight = tween
    .from(0)
    .to(
      contentHeight + (title ? fontUiS[0].height + 1 : 0),
      200,
      Tween.steps(5)
    )
    .start(false)

  /**
   * @param {(rect:{x:number,y:number,width:number,height:number})=>void} [onUpdate]
   */
  return (onUpdate) => {
    bodyHeight.update()
    const marginTop = ((contentHeight - bodyHeight.value) / 2) | 0

    g.drawSprite(card.top, x, y + marginTop)
    g.drawSprite(
      card.body,
      x,
      y + marginTop + card.top.height,
      card.body.width,
      bodyHeight.value
    )
    g.drawSprite(
      card.bottom,
      x,
      y + marginTop + card.top.height + bodyHeight.value
    )

    if (title && fontUiS[0].height <= bodyHeight.value) {
      const tx = ((card.body.width - g.measuretext(fontUiS, title, 4)) / 2) | 0
      g.drawText(fontUiS, title, x + tx, y + marginTop + padding, 4)
    }

    if (bodyHeight.done && onUpdate) {
      onUpdate({
        x: x + padding,
        y: y + marginTop + padding + (title ? fontUiS[0].height + 1 : 0),
        width: card.body.width - padding * 2,
        height: bodyHeight.value - (title ? fontUiS[0].height + 1 : 0),
      })
    }
  }
}
