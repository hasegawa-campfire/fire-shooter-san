import { times, toAngle, Tween, map } from 'game'
import { procs, g, sprite, tween, store } from '@/r.js'
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
  const x = store.playerPos.x < g.width / 2 ? 30 : g.width - 30
  const y = 50
  const wait = 400

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x,
      y: y + i * gap,
      y2: g.height - 40,
      wait,
    })
  }
}

/**
 * @typedef Config
 * @property {number} y2
 */
/**
 * @param {EnemyConfig&Config} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const toX =
    config.x < g.width / 2
      ? -sprite.enemy.body.originRight
      : g.width + sprite.enemy.body.originLeft
  const x = tween
    .from(config.x)
    .to(g.width - config.x, 1000, Tween.outSine)
    .to(toX, 1000, Tween.inSine)
    .start(false)
  const y = tween
    .from(config.y)
    .to(config.y2, 1700, Tween.inOutSine)
    .to(config.y2 - (config.y2 - config.y) / 5, 300, Tween.inSine)
    .start(false)
  const fire = tween.from(true).start(false)
  const rapid = tween.from(false).to(true)

  if (config.rank < 2) {
    fire.wait(1100).to(true)
  } else {
    fire.wait(500).to(true).wait(500).to(true)
  }

  for (let i = 0; i < config.rank * 2; i++) {
    rapid.wait(mapRank(150, 50)).to(true)
  }

  return EnemyBase({ ...config }, (state) => {
    state.x = x.update().value
    state.y = y.update().value

    if (fire.update().getAndSet(false)) {
      rapid.start(false)
    }

    if (rapid.update().getAndSet(false)) {
      const angle = toAngle(
        store.playerPos.x - state.x,
        store.playerPos.y - state.y
      )
      const va = mapRank(12, 8)
      const speed = mapRank(1.5, 3.5)
      procs.enemyBullet.add(
        EnemyBullet({ ...state, angle: angle + va, speed }),
        EnemyBullet({ ...state, angle: angle - va, speed })
      )
    }
  })
}
