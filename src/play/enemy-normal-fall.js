import { times, normalizeVec, toAngle, map } from 'game'
import { tween, event, procs, g, store, sprite } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 4 + lap2 * 2
  const gap = 20 - lap2 * 4
  const x = store.playerPos.x < g.width / 2 ? g.width - gap : gap
  const y = 80
  const wait = 600
  const dir = store.playerPos.x < g.width / 2 ? -1 : 1

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x + i * gap * dir,
      y: y,
      wait,
    })
  }
}

/**
 * @param {EnemyConfig} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const on = /** @type {EventMap} */ ({})
  const spr = sprite.enemy.body
  const fire = tween.from(true).start(false)
  let vx = 0
  let vy = 0

  for (let i = 0; i < config.rank; i++) {
    fire.wait(mapRank(1000, 600)).to(true)
  }

  return EnemyBase({ ...config }, (state) => {
    event.subscribe(on)

    if (fire.update().getAndSet(false)) {
      const v = normalizeVec(
        state.x - store.playerPos.x,
        state.y - store.playerPos.y
      )
      vx = v.x * 3
      vy = v.y * 3
      const angle = toAngle(
        store.playerPos.x - state.x,
        store.playerPos.y - state.y
      )
      const vs = mapRank(0.5, 1)
      for (let i = 0; i < config.rank + 2; i++) {
        procs.enemyBullet.add(
          EnemyBullet({ ...state, angle, speed: 1.5 + i * vs })
        )
      }
    } else {
      vx = vx + (0 - vx) / 20
      vy = vy + (4 - vy) / 20
    }

    state.x += vx
    state.y += vy

    if (state.x < spr.originLeft || g.width - spr.originRight < state.x) {
      vx = -vx
      state.x += vx
    }
  })
}
