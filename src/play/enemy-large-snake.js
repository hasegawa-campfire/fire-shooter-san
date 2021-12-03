import { Tween, toAngle, normalizeVec, map } from 'game'
import { tween, event, procs, g, store, sprite } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const x = g.width / 2
  const y = 100

  const share = { id: 0, history: [{ x, y, bullets: null }] }

  for (let i = 4; 0 < i; i--) {
    store.isFirstEnemy = true

    EnemySub({
      lap,
      rank,
      hp: 2 + lap,
      x,
      y,
      parent: share,
      no: i,
    })
  }

  Enemy({
    lap,
    rank,
    hp: 4 + lap * 2,
    x,
    y,
    me: share,
  })
}

/**
 * @typedef ShareData
 * @property {number} id
 * @property {{x:number,y:number,bullets:{angle:number,speed:number}[]|null}[]} history
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
  const spr = sprite.enemyLarge.body
  const speed = tween
    .from(mapRank(3, 5))
    .wait(mapRank(1500, 500))
    .to(0, mapRank(1000, 400), Tween.inSine)
  let v = { x: 0, y: 0 }

  return EnemyBase({ large: true, ...config }, (state) => {
    event.subscribe(on)
    speed.update()

    state.x += v.x * speed.value
    state.y += v.y * speed.value

    let bullets = /** @type {{angle:Number,speed:number}[]|null} */ (null)

    if (!speed.running) {
      speed.start(false)
      v = normalizeVec(state.x - store.playerPos.x, state.y - store.playerPos.y)
      const angle = toAngle(
        store.playerPos.x - state.x,
        store.playerPos.y - state.y
      )
      bullets = []
      const s = mapRank(2, 1)
      const max = [2, 3, 5][config.rank]
      for (let i = 0; i < max; i++) {
        bullets.push({ angle: angle + i * mapRank(30, 45), speed: s })
        if (0 < i && i < 4) {
          bullets.push({ angle: angle - i * mapRank(30, 45), speed: s })
        }
      }
      for (const b of bullets) {
        procs.enemyBullet.add(
          EnemyBullet({ ...state, angle: b.angle, speed: b.speed })
        )
      }
    }

    if (state.x < spr.originLeft || g.width - spr.originRight <= state.x) {
      v.x = -v.x
      state.x += v.x * speed.value
    }

    if (
      state.y < store.screenTop + spr.originTop ||
      g.height - spr.originBottom <= state.y
    ) {
      v.y = -v.y
      state.y += v.y * speed.value
    }

    config.me.history.push({ x: state.x, y: state.y, bullets })
  })
}

/**
 * @typedef ConfigSub
 * @property {number} no
 * @property {ShareData} parent
 */
/**
 * @param {EnemyConfig&ConfigSub} config
 */
const EnemySub = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const parent = config.parent
  const historyIndex = config.no * mapRank(8, 4)
  const vs = config.no * mapRank(0.2, 0.1)

  return EnemyBase({ noOver: true, ...config }, (state) => {
    const index = parent.history.length - 1 - historyIndex
    const his = parent.history[Math.max(0, index)]
    state.x = his.x
    state.y = his.y

    if (his.bullets && 0 <= index) {
      for (const b of his.bullets) {
        procs.enemyBullet.add(
          EnemyBullet({
            ...state,
            id: parent.id,
            angle: b.angle,
            speed: b.speed - vs,
          })
        )
      }
    }
  })
}
