import { Tween, Procs, toVec } from 'game'
import { g, sprite, tween, random, procs } from '@/r.js'
const { enemyTakeChip } = sprite

/**
 * @param {number} x
 * @param {number} y
 */
export function fireEnemyTakeChip(x, y) {
  firePattern[random.nextInt(firePattern.length)](x, y)
}

const firePattern = [fireChipSpark, fireChipVortex, fireChipSnake]

/**
 * @param {number} x
 * @param {number} y
 */
function fireChipVortex(x, y) {
  let angle = random.nextFloat(360)
  const va = random.nextInt(2) ? -72 : 72
  for (let i = 0; i < 5; i++) {
    angle += va
    const v1 = toVec(angle, 4)
    const v2 = toVec(angle, 24)
    const pos = tween
      .from({ x: x + v1.x, y: y + v1.y })
      .to({ x: x + v2.x, y: y + v2.y }, 400, Tween.outSine)
    procs.effectBack.add(EnemyTakeChip(pos, i * 60 + 200))
  }
}

/**
 * @param {number} x
 * @param {number} y
 */
function fireChipSpark(x, y) {
  for (let i = 0; i < 5; i++) {
    const v = toVec(random.nextFloat(360), random.nextFloat(4, 16))
    const pos = tween.from({ x: x + v.x, y: y + v.y })
    procs.effectBack.add(EnemyTakeChip(pos, 100 + i * 100))
  }
}

/**
 * @param {number} x
 * @param {number} y
 */
function fireChipSnake(x, y) {
  let angle = random.nextFloat(360)
  const va = random.nextFloat(-20, 20)
  for (let i = 1; i <= 5; i++) {
    angle += va
    const v1 = toVec(angle, i * 8)
    const v2 = toVec(angle, i * 10)
    const pos = tween
      .from({ x: x + v1.x, y: y + v1.y })
      .to({ x: x + v2.x, y: y + v2.y }, 400, Tween.outSine)
    procs.effectBack.add(EnemyTakeChip(pos, i * 60))
  }
}

/**
 * @param {Tween<{x:number,y:number}>} pos
 * @param {number} waitTime
 */
const EnemyTakeChip = (pos, waitTime) => {
  const wait = tween.from(0).wait(waitTime).start()
  pos.start(false)

  const scale = tween.from(1).to(0.7, 300, Tween.inSine).start(false)
  const opacity = tween
    .from(0)
    .to(0.4, 100)
    .wait(200)
    .to(0, 200)
    .on(() => {
      Procs.remove(proc)
    })
    .start(false)

  const proc = () => {
    if (!wait.done) return

    pos.update()
    g.save()
    g.opacity(opacity.update().value)
    g.translate(pos.value.x | 0, pos.value.y | 0)
    g.scale(scale.update().value)
    g.drawSprite(enemyTakeChip)
    g.restore()
  }

  return proc
}
