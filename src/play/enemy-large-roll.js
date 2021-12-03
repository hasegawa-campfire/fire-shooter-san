import { Tween, toVec, map, toAngle } from 'game'
import { event, g, procs, store, tween } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const x = g.width / 2
  const y = g.height - 50

  const share = { id: 0, x, y, fire: false, rapidNo: 0 }

  Enemy({
    lap,
    rank,
    hp: 4 + lap * 2,
    x,
    y,
    y2: 80,
    me: share,
  })

  for (let i = 0; i < 360; i += 90) {
    store.isFirstEnemy = true
    EnemySub({
      lap,
      rank,
      hp: 2 + lap,
      parent: share,
      angle: i - 45,
      dist: 50,
    })
  }
}

/**
 * @typedef ShareData
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {boolean} fire
 * @property {number} rapidNo
 */

/**
 * @typedef Config
 * @property {number} y2
 * @property {ShareData} me
 */
/**
 * @param {EnemyConfig&Config} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const on = /** @type {EventMap} */ ({})
  const fire = tween
    .from(false)
    .wait(mapRank(500, 200))
    .loopStart()
    .to(true)
    .wait(mapRank(1500, 1000))
    .loopEnd()
    .start(false)
  const y = tween
    .from(config.y)
    .loopStart()
    .to(config.y2, 4000, Tween.inOutSine)
    .to(config.y, 4000, Tween.inOutSine)
    .loopEnd()
    .start(false)
  const ox = tween
    .from(0)
    .loopStart()
    .to(mapRank(16, 22), 1000, Tween.outSine)
    .to(-mapRank(16, 22), 2000, Tween.inOutSine)
    .to(0, 1000, Tween.inSine)
    .loopEnd()
    .start(false)
  const rapid = tween.from(false).to(true)

  for (let i = 0; i < 1 + config.rank * 3; i++) {
    rapid.wait(mapRank(150, 40)).to(true)
  }

  let rapidNo = 0
  let angle = 0

  return EnemyBase({ large: true, ...config }, (state) => {
    event.subscribe(on)

    state.x = config.x + ox.update().value
    state.y = y.update().value

    if (fire.update().getAndSet(false)) {
      rapid.start(false)
      rapidNo = 0
      angle = toAngle(store.playerPos.x - state.x, store.playerPos.y - state.y)
    }
    if (rapid.update().getAndSet(false)) {
      procs.enemyBullet.add(
        EnemyBullet({
          ...state,
          angle,
          speed: mapRank(2.5, 1.5 + rapidNo * 0.3),
        })
      )
      config.me.fire = true
      config.me.rapidNo = rapidNo++
    } else {
      config.me.fire = false
      config.me.rapidNo = 0
    }

    config.me.x = state.x
    config.me.y = state.y
  })
}

/**
 * @typedef ConfigSub
 * @property {number} angle
 * @property {number} dist
 * @property {ShareData} parent
 */
/**
 * @param {Optional<EnemyConfig,'x'|'y'>&ConfigSub} config
 */
const EnemySub = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const parent = config.parent

  const v = toVec(config.angle)
  const x = parent.x + v.x * config.dist
  const y = parent.y + (v.y * config.dist) / 2
  let angle = 0

  return EnemyBase({ x, y, noOver: true, ...config }, (state) => {
    config.angle += mapRank(2, 1)

    const v = toVec(config.angle)
    state.x = parent.x + v.x * config.dist
    state.y = parent.y + (v.y * config.dist) / 2

    if (parent.fire) {
      if (parent.rapidNo === 0) {
        angle = toAngle(
          store.playerPos.x - state.x,
          store.playerPos.y - state.y
        )
      }

      procs.enemyBullet.add(
        EnemyBullet({
          ...state,
          id: parent.id,
          angle: angle,
          speed: mapRank(1.5, 1 + parent.rapidNo * 0.2),
        })
      )
    }
  })
}
