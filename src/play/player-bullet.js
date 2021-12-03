import { normalizeAngle, toAngle, toVec, Procs } from 'game'
import { store, g, event, hit, procs, sprite, se } from '@/r.js'
import PlayerBulletAfter from './player-bullet-after.js'
import PlayerBulletHit from './player-bullet-hit.js'
const { playerBullet } = sprite

/**
 * @param {number} x
 * @param {number} y
 * @param {boolean} variant
 */
export default (x, y, variant) => {
  const on = /** @type {EventMap} */ ({})
  let targetPrevId = 0
  let targetId = 0
  let targetScore = Infinity
  let targetAngle = 0
  let angle = -90
  let effectCount = 0

  on.enemyHit = () => {
    Procs.remove(proc)
    procs.effectBack.add(PlayerBulletHit(x, y))
    event.emit('playerBulletRemove')
  }

  /** @param {{id:number,x:number,y:number}} pos */
  on.enemyPos = ({ id: eid, x: ex, y: ey }) => {
    const a = normalizeAngle(toAngle(ex - x, ey - y) - angle)
    const sc = Math.abs(a)
    if ((-40 < a && a < 40 && sc < targetScore) || targetPrevId === eid) {
      targetId = eid
      targetScore = targetPrevId === eid ? 0 : sc
      targetAngle = a
    }
  }

  se.playerFire.play()

  const proc = () => {
    if (targetId && angle !== targetAngle) {
      const max = variant ? 2 : 0.5
      angle += Math.min(Math.max(targetAngle, -max), max)
    }
    targetPrevId = targetId
    targetId = 0
    targetScore = Infinity

    const v = toVec(angle, variant ? 6 : 8)
    x += v.x
    y += v.y

    if (
      x <= -playerBullet.originRight ||
      g.width + playerBullet.originLeft <= x ||
      y <= store.screenTop - playerBullet.originBottom ||
      g.height + playerBullet.originTop <= y
    ) {
      Procs.remove(proc)
      event.emit('playerBulletRemove')
      return
    }

    if (effectCount++ % 3 == 0) {
      procs.effectBack.add(PlayerBulletAfter(x, y))
    }

    event.subscribe(on)
    hit.emit('playerBulletHit', null, playerBullet.toBox(x, y), on)

    g.drawSprite(playerBullet, x, y)
  }

  return proc
}
