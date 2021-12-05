import { centerX, centerY } from 'game'
import { g, tween, logEvent, sprite, color } from '@/r.js'
import UiCard from '@/common/ui-card.js'
const { tips } = sprite

const tipsSize = 12

export default () => {
  let tipsNo = Number(localStorage.getItem('tips-no') ?? -1)
  tipsNo = (tipsNo + 1) % tipsSize
  localStorage.setItem('tips-no', String(tipsNo))
  const spr = tips[tipsNo]

  if (tipsNo === tipsSize - 1) {
    logEvent('tips_complete')
  }

  const wait = tween.from(0).wait(700).start()
  const blinkSlow = tween
    .from(false)
    .loopStart()
    .to(false, 800)
    .to(true, 800)
    .loopEnd()
    .start(false)
  const blinkFast = tween
    .from(false)
    .loopStart()
    .to(false, 200)
    .to(true, 200)
    .loopEnd()
    .start(false)
  const uiCard = UiCard(
    130,
    Math.max(spr.height + 12, 60),
    `TIPS ${tipsNo + 1}/${tipsSize}`
  )

  return () => {
    if (wait.done) {
      uiCard((rect) => {
        g.save()
        g.translate(
          (rect.x + centerX(rect, spr)) | 0,
          (rect.y + centerY(rect, spr)) | 0
        )
        g.drawSprite(spr)

        blinkSlow.update()
        blinkFast.update()

        if (tipsNo === 0 && blinkFast.value) {
          g.drawSprite(tips.million, 39, 32)
        }

        if (tipsNo === 1 && blinkFast.value) {
          g.drawRect(90, 18, 2, 2, color.white)
        }
        if (tipsNo === 1 && blinkSlow.value) {
          g.drawSprite(tips.arrow, 63, 16)
        }

        if (tipsNo === 2 && blinkSlow.value) {
          g.drawSprite(tips.heart, 0, 16)
        }

        if (tipsNo === 3 && blinkSlow.value) {
          g.drawSprite(tips.heart, 41, 1)
          g.drawSprite(tips.heart, 40, 31)
        }

        if (tipsNo === 4 && blinkSlow.value) {
          g.drawSprite(tips.heart, 41, 31)
        }

        if (tipsNo === 5 && blinkSlow.value) {
          g.drawSprite(tips.heart, 51, 1)
          g.drawSprite(tips.score, 40, 17)
        }

        if (tipsNo === 6 && blinkFast.value) {
          g.drawSprite(tips.million, 0, 2)
        }

        if (tipsNo === 10 && blinkSlow.value) {
          g.drawSprite(tips.user, 0, 14)
        }

        g.restore()
      })
    }
  }
}
