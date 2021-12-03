import { times, toVec, Tween, map, toAngle } from 'game'
import { procs, g, tween, random, store } from '@/r.js'
import EnemyBase from './enemy-base.js'
import EnemyBullet from './enemy-bullet.js'

/**
 * @param {number} lap
 * @param {number} rank
 */
export default (lap, rank) => {
  const lap2 = lap > 0 ? 1 : 0
  const len = 2 + lap2 * 2
  const va = len === 2 ? 180 : 90
  const x = g.width / 2
  const y = 130
  const wait = 500
  const baseAngle = random.nextInt(4) * 90 + 45

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x,
      y: y,
      wait,
      angle: baseAngle - va * i,
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
  let angle = config.angle
  const dist = tween
    .from(80)
    .to(30, 2000, Tween.outSine)
    .to(200, 2000, Tween.inSine)
    .start(false)
  const fire = tween
    .from(false)
    .loopStart()
    .wait(mapRank(300, 80))
    .to(true)
    .loopEnd()
    .start(false)

  const v = toVec(angle)
  const x = config.x + v.x * dist.value
  const y = config.y + v.y * dist.value
  const speed = mapRank(2, 3)

  return EnemyBase({ ...config, x, y }, (state) => {
    dist.update()
    fire.update()

    angle += speed
    const v = toVec(angle)
    state.x = config.x + v.x * dist.value
    state.y = config.y + v.y * dist.value

    if (fire.getAndSet(false)) {
      const pa = toAngle(
        store.playerPos.x - state.x,
        store.playerPos.y - state.y
      )
      const speed = tween
        .from(0.5)
        .to(mapRank(2, 3), mapRank(500, 300), Tween.inSine)
        .start()
      procs.enemyBullet.add(EnemyBullet({ ...state, angle: pa, speed }))
    }
  })
}
