import { g, sprite } from '@/r.js'
const { fontUi, fontUiL } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export default (x, y) => {
  /**
   * @param {number} time
   */
  return (time) => {
    const timeNum = Math.floor(Math.max(time, 0) * 100)
    const timeText1 = `t ${Math.floor(timeNum / 100)}`
    const timeText2 = `.${String(timeNum % 100).padStart(2, '0')}`
    const timeWidth1 = g.measuretext(fontUiL, timeText1)
    const timeWidth2 = g.measuretext(fontUi, timeText2)

    const left = x - (timeWidth1 + 1 + timeWidth2) / 2
    g.drawText(fontUiL, timeText1, left, y)
    g.drawText(fontUi, timeText2, left + timeWidth1 + 1, y + 2)
  }
}
