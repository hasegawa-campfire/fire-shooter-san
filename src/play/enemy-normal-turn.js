import { times, map } from 'game'
import { procs, g, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 4 + lap2 * 2
  const gap = 20 - lap2 * 2
  const x = store.playerPos.x < g.width / 2 ? g.width - 30 : 30
  const y = g.height - len * gap - 60
  const wait = 500

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x,
      y: y + gap * i,
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
  let dirY = 0
  let dirX = 0
  let fired = false
  const speed = mapRank(2, 3.5)

  return EnemyBase({ ...config }, (state) => {
    if (dirY === 0) {
      dirY = store.playerPos.y < config.y ? -1 : 1
    }

    if (dirX === 0) {
      state.y += speed * dirY
      if (
        (dirY < 0 && store.playerPos.y >= state.y) ||
        (dirY > 0 && store.playerPos.y <= state.y)
      ) {
        dirX = store.playerPos.x < state.x ? -1 : 1
      }
    } else {
      state.x += speed * dirX
      if (
        !fired &&
        ((dirX < 0 && store.playerPos.x >= state.x) ||
          (dirX > 0 && store.playerPos.x <= state.x))
      ) {
        const angle = store.playerPos.y < state.y ? 270 : 90
        const vs = mapRank(0.5, 1)
        for (let i = 0; i < config.rank + 2; i++) {
          procs.enemyBullet.add(
            EnemyBullet({ ...state, angle, speed: 2 + i * vs })
          )
        }
        fired = true
      }
    }
  })
}
