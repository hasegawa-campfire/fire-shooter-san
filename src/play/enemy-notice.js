import { Tween, Procs } from 'game'
import { store, g, event, sprite, tween, procs, se } from '@/r.js'
const { enemyNotice, enemyNoticeLarge } = sprite

let showTime = 0

/**
 * @param {EnemyConfig} config
 * @param {number} id
 * @param {Function} enemyProc
 */
export default (config, id, enemyProc) => {
  const on = /** @type {EventMap} */ ({})
  const prevId = id - 1
  const first = store.isFirstEnemy
  const waveId = store.enemyWaveId

  showTime = first ? 300 : showTime + (config.showTime ?? 50)

  const initWait = tween.from(0).wait(config.wait ?? 0)
  const initScale = tween
    .from(0)
    .wait(showTime)
    .to(2)
    .to(1, 200, Tween.outSine)
    .start()
  const finScale = tween
    .from(1)
    .to(0, 300, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })

  if (!first) {
    /** @param {{id:number}} param */
    on.enemyShow = (param) => {
      if (!initWait.started && param.id === prevId) {
        initWait.start()
      }
    }

    /** @param {{id:number}} param */
    on.enemyDestroy = (param) => {
      if (param.id === prevId) {
        initWait.end()
      }
    }
  }

  on.timeUp = () => {
    finScale.start()
  }

  store.isFirstEnemy = false

  const proc = () => {
    event.subscribe(on)

    if (
      !finScale.started &&
      ((first && !initWait.started && store.enemyWaveId !== waveId) ||
        initWait.done)
    ) {
      Procs.remove(proc)
      procs.enemy.add(enemyProc)
      event.emit('enemyShow', { id })
      se.enemyShow.play()
      return
    }

    g.save()
    g.opacity(store.enemyWaveId !== waveId || config.large ? 0.3 : 0.2)
    g.translate(config.x, config.y)
    g.scale(finScale.started ? finScale.value : initScale.value)
    g.drawSprite(config.large ? enemyNoticeLarge : enemyNotice)
    g.restore()
  }

  return proc
}
