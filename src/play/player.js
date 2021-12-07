import { Tween, getArrowVec, Procs } from 'game'
import {
  store,
  g,
  pointer,
  fireKeys,
  arrowKeys,
  arrowButtons,
  arrowAxes,
  sprite,
  procs,
  event,
  hit,
  tween,
} from '@/r.js'
import PlayerBullet from './player-bullet.js'
import PlayerDestroy from './player-destroy.js'
const { player } = sprite

/**
 * @param {boolean} replay
 */
const Player = (replay) => {
  const on = /** @type {EventMap} */ ({})
  const initY = tween
    .from(g.height + player.normal.originTop)
    .wait(200)
    .to(g.height - 30, 200, Tween.outSine)
    .start()
  const flash = tween.from(false).start()

  for (let i = 0; i < 12; i++) {
    flash.to(true, 60).to(false, 60)
  }

  let timeUp = false
  let x = g.width / 2
  let y = 0

  on.enemyHit = on.enemyBulletHit = () => {
    if (!timeUp && flash.done && Procs.remove(proc)) {
      // store.heart = Math.floor(store.heart / 2)
      store.heartRate = 0
      store.clearing.start()
      event.emit('playerDestroy')
      procs.effectOverEnemy.add(PlayerDestroy(x, y))
      tween
        .from(0)
        .wait(1000)
        .on(() => {
          procs.player.add(Player(replay))
        })
        .start()
    }
  }

  on.timeUp = () => {
    timeUp = true
  }

  const proc = () => {
    event.subscribe(on)

    const spr = flash.value ? player.flash : player.normal

    if (!initY.done) {
      y = initY.value
      g.drawSprite(spr, x, y)
      return
    }

    if (timeUp && replay) {
      g.drawSprite(spr, x, y)
      return
    }

    let variant = false

    if (pointer.isDown) {
      const v = pointer.vec
      x += v.x * 1.4
      y += v.y * 1.4
      variant = pointer.downCount > 7
    } else {
      variant = fireKeys.reduce((n, k) => Math.max(n, k.downCount || 0), 0) > 7
      const v = getArrowVec(arrowKeys, arrowButtons, arrowAxes)
      x += v.x * (variant ? 1.5 : 4.5)
      y += v.y * (variant ? 1.5 : 4.5)
    }

    x = Math.min(Math.max(x, spr.originLeft), g.width - spr.originRight)
    y = Math.min(
      Math.max(y, store.screenTop + spr.originTop),
      g.height - spr.originBottom
    )

    if (
      (fireKeys.some((k) => k.isDown) && procs.playerBullet.isEmpty) ||
      (fireKeys.some((k) => k.isDownChange) && procs.playerBullet.size < 3)
    ) {
      procs.playerBullet.add(PlayerBullet(x, y - spr.originTop, variant))
    }

    store.playerPos = { x, y }

    if (!timeUp) {
      hit.emit(
        'playerHit',
        null,
        { x, y, width: 0, height: 0, originX: 0, originY: 0 },
        on
      )
    }

    g.drawSprite(spr, x, y)
  }

  return proc
}

export default Player
