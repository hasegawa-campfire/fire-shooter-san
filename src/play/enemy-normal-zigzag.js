import { times, toVec, map } from 'game'
import { procs, g, sprite, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 4 + lap2 * 2
  const x = store.playerPos.x < g.width / 2 ? g.width - 30 : 30
  const y = 50
  const wait = 400

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x,
      y: y,
      wait,
      no: i,
    })
  }
}

/**
 * @typedef Config
 * @property {number} no
 */
/**
 * @param {EnemyConfig&Config} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const v = toVec(90 + Math.sign(config.x - g.width / 2) * 75, mapRank(2, 4))
  const spr = sprite.enemy.body

  return EnemyBase({ ...config }, (state) => {
    state.x += v.x
    state.y += v.y

    if (state.x < spr.originLeft || g.width - spr.originRight <= state.x) {
      v.x = -v.x
      state.x += v.x
      const speed = mapRank(1.5, 2.5)
      const angle = v.x < 0 ? 180 : 0
      if (config.rank === 0) {
        const a = config.no * 5
        procs.enemyBullet.add(
          EnemyBullet({ ...state, angle: angle + 90 - a, speed }),
          EnemyBullet({ ...state, angle: angle - 90 + a, speed })
        )
      } else if (config.rank === 1) {
        procs.enemyBullet.add(
          EnemyBullet({ ...state, angle: angle + 90, speed }),
          EnemyBullet({ ...state, angle: angle - 90, speed }),
          EnemyBullet({ ...state, angle: angle + 60, speed }),
          EnemyBullet({ ...state, angle: angle - 60, speed })
        )
      } else {
        const va = config.rank === 2 ? 30 : 45
        for (let i = -90; i <= 90; i += va) {
          procs.enemyBullet.add(
            EnemyBullet({ ...state, angle: angle + i, speed })
          )
        }
      }
    }
  })
}
