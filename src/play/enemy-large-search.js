import { toAngle, normalizeAngle, toVec, map } from 'game'
import { tween, event, procs, g, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const x = g.width / 2
  const y = 60

  const share = { id: 0, x, y, angle: 90, fire: false }

  Enemy({
    lap,
    rank,
    hp: 4 + lap * 2,
    x,
    y,
    me: share,
  })

  for (const [angle, dist] of [
    [-100, 50],
    [-60, 30],
    [60, 30],
    [100, 50],
  ]) {
    store.isFirstEnemy = true
    EnemySub({
      lap,
      rank,
      hp: 2 + lap,
      parent: share,
      angle,
      dist,
    })
  }
}

/**
 * @typedef ShareData
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {number} angle
 * @property {boolean} fire
 */

/**
 * @typedef Config
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
  const rapid = tween.from(false).to(true)
  let angle = 90
  let fireAngle = 0

  for (let i = 0; i < 1 + config.rank * 3; i++) {
    rapid.wait(mapRank(150, 80)).to(true)
  }

  return EnemyBase({ large: true, noOver: true, ...config }, (state) => {
    event.subscribe(on)

    if (!rapid.running && !rapid.value) {
      const angleDelta = normalizeAngle(
        toAngle(store.playerPos.x - state.x, store.playerPos.y - state.y) -
          angle
      )
      const max = mapRank(1, 2)
      angle += Math.min(Math.max(-max, angleDelta), max)
    }

    if (fire.update().getAndSet(false)) {
      rapid.start(false)
      fireAngle = angle
    }
    if (rapid.update().getAndSet(false)) {
      procs.enemyBullet.add(
        EnemyBullet({ ...state, angle: fireAngle, speed: mapRank(2.5, 2) })
      )
      config.me.fire = true
    } else {
      config.me.fire = false
    }

    const v = toVec(angle)
    state.x += v.x * 0.3
    state.y += v.y * 0.3

    config.me.x = state.x
    config.me.y = state.y
    config.me.angle = angle
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
  const v = toVec(parent.angle + config.angle)
  const x = parent.x + v.x * config.dist
  const y = parent.y + v.y * config.dist

  return EnemyBase({ x, y, noOver: true, ...config }, (state) => {
    const v = toVec(parent.angle + config.angle)
    state.x = parent.x + v.x * config.dist
    state.y = parent.y + v.y * config.dist

    if (parent.fire) {
      procs.enemyBullet.add(
        EnemyBullet({
          ...state,
          id: parent.id,
          angle: parent.angle,
          speed: mapRank(1.5, 1),
        })
      )
    }
  })
}
