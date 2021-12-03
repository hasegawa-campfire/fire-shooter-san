import {
  Procs,
  packNums,
  unpackNums,
  nums2code,
  code2nums,
  StatefulPromise,
  Color,
} from 'game'
import {
  version,
  runner,
  procs,
  event,
  tween,
  color,
  g,
  store,
  random,
  recordKeys,
  bgm,
  logEvent,
} from '@/r.js'
import UiStatus from './ui-status.js'
import UiResult from './ui-result.js'
import UiStart from './ui-start.js'
import UiReplay from './ui-replay.js'
import UiFinish from './ui-finish.js'
import Player from './player.js'
import Enemy from './enemy.js'
import Bg from '@/common/bg.js'
import { registerReplay, setReplayId } from '@/leaderboard/index.js'

/**
 * @param {Replay} [replay]
 */
export default (replay) => {
  if (replay) {
    logEvent(`${replay.mode}_replay`, { replay_id: replay.id })
  } else {
    logEvent(`${store.mode}_play`)
  }

  const on = /** @type {EventMap} */ ({})
  const pre = Procs.of(Enemy(replay?.mode ?? store.mode))
  const startWait = tween
    .from(0)
    .wait(1000)
    .on(() => {
      if (replay) {
        procs.ui.add(UiReplay())
      }
      event.emit('timeStart')
      bgm.play.play()
    })
  const bgColor = tween
    .from(color.base)
    .loopStart(() => time > 0)
    .to(Color.blend(color.white, color.accent, 0.1), 500)
    .to(Color.blend(color.white, color.main, 0.1), 500)
    .loopEnd()
    .to(color.base, 500)
    .start(false)
  const shakingSmall = tween
    .from({ x: 0, y: 0 })
    .to({ x: 1, y: -1 }, 20)
    .to({ x: -1, y: 1 }, 40)
    .to({ x: 1, y: 1 }, 40)
    .to({ x: -1, y: -1 }, 40)
    .to({ x: 0, y: 0 })
  const shakingLarge = tween
    .from({ x: 0, y: 0 })
    .to({ x: 2, y: -2 }, 20)
    .to({ x: -2, y: 2 }, 40)
    .to({ x: 2, y: 2 }, 40)
    .to({ x: -2, y: -2 }, 40)
    .to({ x: 1, y: -1 }, 40)
    .to({ x: -1, y: 1 }, 40)
    .to({ x: 1, y: 1 }, 40)
    .to({ x: -1, y: -1 }, 40)
    .to({ x: 0, y: 0 })

  let score = 0
  let time = 60 * runner.fps

  /**@type {StatefulPromise<Result>|undefined} */
  let resultPromise = undefined

  const randomSeed = random.updateSeed()
  let timeUp = false
  let deadCount = 0

  on.statusInitIn = () => {
    procs.ui.add(UiStart())
    startWait.start()
  }

  /** @param {{heart:number,large?:boolean}} param */
  on.enemyTake = (param) => {
    if (timeUp) return
    if (param.large) {
      shakingLarge.start()
    }
  }

  on.playerDestroy = () => {
    if (timeUp) return
    if (!replay) {
      logEvent(`${store.mode}_dead`, {
        time,
        wave_id: store.enemyWaveId - 1,
      })
    }
    shakingSmall.start()
    deadCount++
  }

  on.statusFinOut = () => {
    tween
      .from(0)
      .wait(200)
      .on(() => {
        procs.ui.add(UiResult(score, resultPromise))
      })
      .wait(300)
      .on(() => {
        bgm.result.play()
        bgm.play.stop()
      })
      .start()
  }

  on.sceneChange = () => {
    if (time > 0 && !replay) {
      logEvent(`${store.mode}_reset`, {
        time,
        wave_id: store.enemyWaveId - 1,
        dead_count: deadCount,
      })
    }
  }

  const uiStatus = UiStatus()

  procs.ui.add(() => uiStatus(score, store.heart, time))
  procs.player.add(Player(Boolean(replay)))
  procs.bg.add(Bg(1))

  store.heart = 0
  store.heartRate = 0
  store.isSuccess = false
  store.clearing.reset()

  if (replay) {
    const logs = unpackNums(code2nums(replay.log), recordKeys.length)
    random.seed = replay.seed
    recordKeys.forEach((key, i) => {
      key.log = logs[i]
      key.playLog()
    })
  } else {
    for (const key of recordKeys) {
      key.recLog()
    }
  }

  return () => {
    event.subscribe(on)

    if (startWait.done) {
      time--
    }

    if (0 <= time && time % runner.fps === 0) {
      score += store.heart * 10
      store.isSuccess = 1000000 <= score
    }

    if (time === 0) {
      if (!replay) {
        logEvent(`${store.mode}_finish`, {
          wave_id: store.enemyWaveId - 1,
          dead_count: deadCount,
        })
      }

      timeUp = true
      event.emit('timeUp')
      procs.ui.add(UiFinish())

      for (const key of recordKeys) {
        key.endLog()
      }

      if (!replay) {
        resultPromise = StatefulPromise.from(
          registerReplay({
            version,
            log: nums2code(packNums(...recordKeys.map((key) => key.log))),
            score,
            seed: randomSeed,
            mode: store.mode,
          })
        )
      }
    }

    if (resultPromise?.isResolved()) {
      setReplayId(resultPromise.value.replayId)
    }

    g.save()

    if (store.isSuccess) {
      bgColor.update()
    }
    g.drawRect(0, 0, g.width, g.height, bgColor.value)

    if (shakingLarge.running) {
      g.translate(shakingLarge.value.x, shakingLarge.value.y)
    } else if (shakingSmall.running) {
      g.translate(shakingSmall.value.x, shakingSmall.value.y)
    }

    pre.run()
    procs.bg.run()
    procs.effectBack.run()
    procs.enemyNotice.run()
    procs.player.run()
    procs.playerBullet.run()
    procs.effectOverPlayer.run()
    procs.enemy.run()
    procs.enemyBullet.run()
    procs.effectOverEnemy.run()

    g.restore()

    procs.ui.run()
  }
}
