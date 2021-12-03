import { Procs } from 'game'
import { store, procs, event } from '@/r.js'
import EnemyNormalFixed from './enemy-normal-fixed.js'
import EnemyNormalFall from './enemy-normal-fall.js'
import EnemyNormalZigzag from './enemy-normal-zigzag.js'
import EnemyNormalVortex from './enemy-normal-vortex.js'
import EnemyNormalTurn from './enemy-normal-turn.js'
import EnemyNormalCurve from './enemy-normal-curve.js'
import EnemyNormalMissile from './enemy-normal-missile.js'
import EnemyNormalRocket from './enemy-normal-rocket.js'
import EnemyLargeSearch from './enemy-large-search.js'
import EnemyLargeRoll from './enemy-large-roll.js'
import EnemyLargeSnake from './enemy-large-snake.js'
import EnemyLargeDouble from './enemy-large-double.js'

/**
 * @param {Mode} mode
 */
export default (mode) => {
  const on = /** @type {EventMap} */ ({})

  let lap = 0
  let rank = mode === 'ex' ? 2 : 0
  let enemyCount = 0

  on.statusInitIn = () => {
    waves[0](lap, rank)
  }

  on.timeStart = () => {
    enemyCount = 0
  }

  on.enemyDestroy = () => {
    enemyCount--
  }

  on.timeUp = () => {
    Procs.remove(proc)
  }

  store.isFirstEnemy = true
  store.enemyWaveId = 0
  enemyCount = 1

  const proc = () => {
    event.subscribe(on)

    if (enemyCount <= 0) {
      enemyCount = procs.enemyNotice.size
      const waveIndex = ++store.enemyWaveId % waves.length
      store.isFirstEnemy = true
      waves[waveIndex](lap, rank)

      if (waveIndex === waves.length - 1) {
        lap++
        rank = Math.min(rank + 1, 2)
      }
    }
  }

  return proc
}

const waves = [
  EnemyNormalFixed,
  EnemyNormalTurn,
  EnemyLargeSearch,
  EnemyNormalMissile,
  EnemyNormalRocket,
  EnemyLargeRoll,
  EnemyNormalFall,
  EnemyNormalZigzag,
  EnemyLargeSnake,
  EnemyNormalCurve,
  EnemyNormalVortex,
  EnemyLargeDouble,
]
