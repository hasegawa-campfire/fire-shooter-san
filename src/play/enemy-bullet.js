import { toVec, Procs, Tween } from 'game'
import { store, g, event, hit, sprite, procs, se, tween } from '@/r.js'
import EnemyBulletTake from './enemy-bullet-take.js'
import EnemyBulletDestroy from './enemy-bullet-destroy.js'
const { enemyBullet, enemyBulletLarge } = sprite

/**
 * @param {object} config
 * @param {number} config.x
 * @param {number} config.y
 * @param {number} config.id
 * @param {number|Tween<number>} config.angle
 * @param {number|Tween<number>} config.speed
 * @param {boolean} [config.large]
 */
export default (config) => {
  const on = /** @type {EventMap} */ ({})
  const anime = tween
    .from(0)
    .loopStart()
    .to(1, 500, Tween.frameSteps(2))
    .to(0)
    .loopEnd()
    .start(false)

  let { x, y } = config

  /**
   * @param {{id:number}} param
   */
  on.enemyTake = (param) => {
    if (param.id === config.id && Procs.remove(proc)) {
      const heart = config.large ? 2 : 1
      store.addHeart(heart)
      procs.effectBack.add(EnemyBulletTake({ ...config, x, y, heart }))
    }
  }

  /**
   * @param {{id:number}} param
   */
  on.enemyDestroy = (param) => {
    if (param.id === config.id) {
      tween
        .from(0)
        .wait(1000)
        .on(() => {
          if (Procs.remove(proc)) {
            procs.effectBack.add(EnemyBulletDestroy({ ...config, x, y }))
          }
        })
        .start()
    }
  }

  if (config.large) {
    se.enemyFireLarge.play()
  } else {
    se.enemyFire.play()
  }

  const proc = () => {
    if (store.clearing.running && Procs.remove(proc)) {
      procs.effectBack.add(EnemyBulletDestroy({ ...config, x, y }))
      return
    }

    const spr = (config.large ? enemyBulletLarge : enemyBullet)[
      anime.update().value
    ]

    const v = toVec(
      config.angle instanceof Tween ? config.angle.value : config.angle,
      config.speed instanceof Tween ? config.speed.value : config.speed
    )
    x += v.x
    y += v.y

    if (
      (x <= -spr.originRight && v.x <= 0) ||
      (g.width + spr.originLeft <= x && 0 <= v.x) ||
      (y <= store.screenTop - spr.originBottom && v.y <= 0) ||
      (g.height + spr.originTop <= y && 0 <= v.y)
    ) {
      Procs.remove(proc)
      return
    }

    event.subscribe(on)

    hit.emit('enemyBulletHit', null, spr.toBox(x, y), on)

    g.drawSprite(spr, x, y)
  }

  return proc
}
