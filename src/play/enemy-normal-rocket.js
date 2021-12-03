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
  const x = store.playerPos.x < g.width / 2 ? g.width - 30 : 30
  const y = g.height - 40
  const wait = 400

  for (const i of times(len)) {
    Enemy({
      lap,
      rank,
      hp: 1,
      x: x,
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
  const toX =
    config.x < g.width / 2
      ? g.width + sprite.enemy.body.originLeft
      : -sprite.enemy.body.originRight
  const x = tween
    .from(config.x)
    .to(toX, mapRank(2500, 1500), Tween.inSine)
    .start(false)
  const y = tween
    .from(config.y)
    .to(
      store.screenTop - sprite.enemy.body.originBottom - 10,
      mapRank(2500, 1500),
      Tween.outSine
    )
    .start(false)
  const fire = tween
    .from(false)
    .loopStart()
    .wait(mapRank(400, 50))
    .to(true)
    .loopEnd()
    .start(false)

  return EnemyBase({ noHorOver: true, ...config }, (state) => {
    state.x = x.update().value
    state.y = y.update().value

    if (fire.update().getAndSet(false)) {
      const ma = mapRank(30, 45)
      const angle = random.nextFloat(90 - ma, 90 + ma)
      const speed = random.nextFloat(1, 2)
      procs.enemyBullet.add(EnemyBullet({ ...state, angle, speed }))
    }
  })
}
