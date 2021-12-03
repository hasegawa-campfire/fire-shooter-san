import { Color, StatefulPromise } from 'game'
import {
  anyKeys,
  event,
  g,
  procs,
  version,
  se,
  bgm,
  color,
  store,
  tween,
} from '@/r.js'
import UiLogo from './ui-logo.js'
import UiTwitter from './ui-twitter.js'
import UiMute from './ui-mute.js'
import UiTips from './ui-tips.js'
import UiReplay from './ui-replay.js'
import UiReset from './ui-reset.js'
import UiPressStart from './ui-press-start.js'
import Play from '@/play/index.js'
import Bg from '@/common/bg.js'
import Flash from '@/common/flash.js'
import { getReplayId, fetchReplay } from '@/leaderboard/index.js'

export default () => {
  const replayId = getReplayId()
  const replayPromise = replayId
    ? StatefulPromise.from(fetchReplay(replayId))
    : undefined
  const isEx = () => (replayPromise?.value?.mode ?? store.mode) === 'ex'
  const exColor = Color.blend(color.white, color.accent, 0.1)
  let started = false

  procs.ui.add(UiLogo(replayPromise), UiPressStart(replayPromise), UiMute())

  if (replayPromise) {
    procs.ui.add(UiReset(), UiReplay(replayPromise))
  } else {
    procs.ui.add(UiTwitter(), UiTips())
  }

  procs.bg.add(Bg(0.3))
  Object.values(bgm).forEach((a) => a.stop())

  color.base = isEx() ? exColor : color.white
  let bgColor = tween.from(color.base)
  let oldEx = isEx()

  return () => {
    if (oldEx !== isEx()) {
      oldEx = isEx()
      color.base = isEx() ? exColor : color.white
      bgColor.end()
      bgColor = tween.from(bgColor.value).to(color.base, 300).start()
    }

    if (
      !started &&
      (!replayPromise || replayPromise.value?.version === version) &&
      anyKeys.some((k) => k.isDownChange)
    ) {
      started = true
      const onEnd = () => {
        event.emit('sceneChange', () => Play(replayPromise?.value))
      }
      procs.ui.add(Flash({ times: 2, onEnd }))
      se.titleStart.play()
    }

    g.drawRect(0, 0, g.width, g.height, bgColor.value)

    procs.bg.run()
    procs.ui.run()
  }
}
