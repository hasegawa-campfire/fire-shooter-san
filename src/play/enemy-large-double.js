import { toVec, map, toAngle, Tween } from 'game'
import { tween, procs, g, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const x = g.width / 2
  const y = 135

  for (const angle of [0, 180]) {
    store.isFirstEnemy = true
    Enemy({
      lap,
      rank,
      hp: 4 + lap * 2,
      x,
      y,
      angle,
    })
  }
}

/**
 * @typedef Config
 * @property {number} angle
 */
/**
 * @param {EnemyConfig&Config} config
 */
const Enemy = (config) => {
  /** @param {number} a @param {number} b */
  const mapRank = (a, b) => map(a, b, config.rank / 2)
  const fire = tween
    .from(false)
    .wait(mapRank(400, 0))
    .loopStart()
    .to(true)
    .wait(mapRank(150, 150))
    .loopEnd()
    .start(false)

  const dist = mapRank(60, 70)
  const v = toVec(config.angle)
  const x = config.x + v.x * dist
  const y = config.y + v.y * dist
  let fireAngle = -1

  return EnemyBase({ large: true, ...config, x, y }, (state) => {
    config.angle += mapRank(0.5, 1.5)

    const v = toVec(config.angle)
    state.x = config.x + v.x * dist
    state.y = config.y + v.y * dist

    if (fire.update().getAndSet(false)) {
      if (fireAngle < 0) {
        const pa = toAngle(store.playerPos.x - x, store.playerPos.y - y)
        fireAngle = Math.round(pa / 45) * 45 + 360
      } else {
        fireAngle += 45
      }
      for (let i = 0; i < 1 + config.rank ** 2; i++) {
        const speed =
          config.rank === 0
            ? tween.from(4).to(2, 200, Tween.inSine)
            : config.rank === 1
            ? tween.from(4 - i / 2).to(2 - i / 2, 200, Tween.inSine)
            : tween.from(8 - i * 2).to(1, 200, Tween.inSine)

        procs.enemyBullet.add(
          EnemyBullet({
            ...state,
            angle: fireAngle,
            speed: speed.start(),
          })
        )
      }
    }
  })
}
