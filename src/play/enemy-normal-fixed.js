import { times, map } from 'game'
import { tween, g, procs, random, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 4 + lap2 * 2
  const gap = 28 - lap2 * 4
  let dir = store.playerPos.x < g.width / 2 ? -1 : 1
  let x = (g.width - (len - 1) * gap * dir) / 2
  let y = 120
  const wait = 300

  for (const j of times(2)) {
    for (const i of times(len)) {
      Enemy({
        lap,
        rank,
        hp: 1,
        x,
        y,
        wait,
      })
      x += gap * dir
    }
    dir = -dir
    x += gap * dir
    y -= gap
  }
}

/**
 * @param {EnemyConfig} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const wait = tween
    .from(0)
    .wait(random.nextInt(mapRank(300, 0), mapRank(2000, 200)))
    .start(false)
  const rapid = tween.from(false).to(true)

  for (let i = 0; i < config.rank; i++) {
    rapid.wait(mapRank(300, 100)).to(true)
  }

  return EnemyBase({ ...config }, (state) => {
    if (wait.update().done) {
      wait.wait(random.nextInt(mapRank(2000, 500), mapRank(5000, 800)))
      rapid.start(false)
    }
    if (rapid.update().getAndSet(false)) {
      procs.enemyBullet.add(
        EnemyBullet({ ...state, angle: 90, speed: mapRank(1, 3) })
      )
    }
  })
}
