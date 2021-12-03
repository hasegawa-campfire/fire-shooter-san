import { g, sprite, pointer } from '@/r.js'
import { getShareUrl } from '@/leaderboard/index.js'
const { buttonTwitter } = sprite

export default () => {
  const onClick = () => {
    const params = new URLSearchParams({
      text: `#FireShooterSan\n${getShareUrl()}`,
    })
    window.open(`https://twitter.com/intent/tweet?${params}`)
  }

  return () => {
    const x = 7
    const y = 7

    pointer.onDown(buttonTwitter.toBox(x, y), onClick)

    g.drawSprite(buttonTwitter, x, y)
  }
}
