import { times, Tween, map } from 'game'
import { procs, g, sprite, tween, store, random } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 4 + lap2 * 2
  const gap = 25 - lap2 * 9
  const dir = store.playerPos.x < g.width / 2 ? -1 : 1
  const x = (g.width - (len - 1) * gap * dir) / 2
  const y = g.height - 50
  const wait = 300

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
  const fire = tween
    .from(false)
    .wait(mapRank(800, 500))
    .loopStart()
    .to(true)
    .wait(mapRank(1000, 200))
    .loopEnd()
    .start(false)
  const y = tween
    .from(config.y)
    .to(config.y + 10, mapRank(500, 300), Tween.inOutSine)
    .to(
      store.screenTop - sprite.enemy.body.originBottom,
      mapRank(2500, 1500),
      Tween.inSine
    )
    .start(false)
  let vx = 0
  let maxDx = 0
  let pxs = /** @type {number[]}} */ ([])
  let index = random.nextInt(mapRank(60, 20))
  const maxVx = mapRank(1, 2)

  return EnemyBase({ noHorOver: true, ...config }, (state) => {
    pxs.unshift(store.playerPos.x)
    const px = pxs[Math.min(pxs.length - 1, index)]
    maxDx += mapRank(0.0005, 0.001)
    vx += Math.min(Math.max(-maxDx, px - state.x), maxDx)
    state.x += Math.min(Math.max(-maxVx, vx), maxVx)
    state.y = y.update().value

    const a = mapRank(30, 20)
    if (fire.update().getAndSet(false)) {
      procs.enemyBullet.add(
        EnemyBullet({ ...state, angle: 90 - a, speed: 1 }),
        EnemyBullet({ ...state, angle: 90 + a, speed: 1 })
      )
    }
  })
}
