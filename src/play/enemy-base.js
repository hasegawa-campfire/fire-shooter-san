import { Tween, Procs, toDist } from 'game'
import { store, g, event, hit, sprite, tween, procs, se } from '@/r.js'
import EnemyNotice from './enemy-notice.js'
import EnemyTake from './enemy-take.js'
import EnemyDestroy from './enemy-destroy.js'
const { enemy, enemyLarge } = sprite

let nextId = 1

/**
 * @typedef EnemyState
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {number} hp
 * @property {boolean} [large]
 */

/**
 * @param {EnemyConfig} config
 * @param {(state:EnemyState)=>void} onUpdate
 */
export default (config, onUpdate) => {
  const on = /** @type {EventMap} */ ({})
  const id = nextId++
  const maxHp = config.hp
  const state = {
    id,
    x: config.x,
    y: config.y,
    hp: config.hp,
    large: config.large,
  }
  const spr = config.large ? enemyLarge : enemy

  if (config.me) {
    config.me.id = id
  }

  let time = 0
  let timeUp = false

  const showScale = tween.from(2).to(1, 150, Tween.inSine).start(false)
  const flash = tween
    .from(false)
    .to(true, 60)
    .to(false, 60)
    .to(true, 60)
    .to(false)
  const finScale = tween
    .from(1)
    .to(0, 200, Tween.inSine)
    .on(() => {
      Procs.remove(proc)
    })

  on.playerBulletHit = () => {
    if (timeUp) return
    if (!flash.running) {
      flash.start()
    }
    se.enemyHit.play()
    if (--state.hp <= 0 && Procs.remove(proc)) {
      store.heartRate++
      store.addHeart(maxHp)
      procs.effectBack.add(EnemyTake({ ...state, heart: maxHp }))
      event.emit('enemyTake', { id, large: config.large })
      event.emit('enemyDestroy', { id })

      if (config.large) {
        se.enemyTakeLarge.play()
      } else {
        se.enemyTake.play()
      }
    }
  }

  /** @param {{id:number}} param */
  on.enemyTake = (param) => {
    if (config.parent?.id === param.id && Procs.remove(proc)) {
      store.addHeart(maxHp)
      procs.effectBack.add(EnemyTake({ ...state, heart: maxHp }))
      event.emit('enemyDestroy', { id })
      event.emit('enemyTake', { id, large: config.large })
    }
  }

  on.timeUp = () => {
    timeUp = true
    finScale.start()
    procs.effectBack.add(EnemyDestroy({ ...state }))
  }

  const proc = () => {
    const noHorOver = config.noOver || config.noHorOver
    const noVertOver = config.noOver || config.noVertOver
    if (
      state.hp <= 0 ||
      (!noHorOver &&
        (state.x <= -spr.body.originRight ||
          g.width + spr.body.originLeft <= state.x)) ||
      (!noVertOver &&
        (state.y <= store.screenTop - spr.body.originBottom ||
          g.height + spr.body.originTop <= state.y))
    ) {
      if (Procs.remove(proc)) {
        event.emit('enemyDestroy', { id })
      }
      return
    }

    time++

    event.subscribe(on)

    if (!timeUp) {
      onUpdate(state)
    }

    g.save()
    g.translate(state.x, state.y)

    if (!timeUp) {
      hit.emit('enemyHit', null, spr.body.toBox(0, 0), on)
    }

    event.emit('enemyPos', { id, x: state.x, y: state.y })
    g.scale(finScale.started ? finScale.value : showScale.update().value)
    g.drawSprite(flash.value ? spr.bodyFlash : spr.body)

    const gaugeSprite = flash.value ? spr.gaugeFlash : spr.gauge
    const oy = Math.ceil(gaugeSprite.height * (Math.max(0, state.hp) / maxHp))
    g.drawSprite(gaugeSprite.sub({ y: oy, height: -oy, originY: -oy }))

    g.restore()
  }

  procs.enemyNotice.add(EnemyNotice(config, id, proc))
  return proc
}
