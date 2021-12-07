import {
  Runner,
  Graphic,
  EventManager,
  HitManager,
  GamepadButtonInput,
  GamepadAxesInput,
  KeyInput,
  PointerInput,
  TweenManager,
  Procs,
  Sprite,
  Se,
  Random,
  Bgm,
  Color,
} from 'game'
import imageMap from './image.js'

export const version = 0

export const runner = new Runner({ fps: 60 })

export const g = new Graphic({
  width: 160,
  height: 240,
  el: '#app',
})

export const event = new EventManager()

export const hit = new HitManager(g)

export const key = {
  left: new KeyInput(['ArrowLeft', 'a']),
  right: new KeyInput(['ArrowRight', 'd']),
  up: new KeyInput(['ArrowUp', 'w']),
  down: new KeyInput(['ArrowDown', 's']),
  fire: new KeyInput([' ', 'z', '.', 'Control']),
  reset: new KeyInput(['Enter', 'Escape']),
}

export const pointer = new PointerInput(g)

export const pad = {
  left: new GamepadButtonInput([14]),
  right: new GamepadButtonInput([15]),
  up: new GamepadButtonInput([12]),
  down: new GamepadButtonInput([13]),
  fire: new GamepadButtonInput([0, 1, 2, 3, 4, 5]),
  reset: new GamepadButtonInput([6, 7, 8, 9, 10, 11]),
}

export const axes = {
  left: new GamepadAxesInput([
    [0, false],
    [2, false],
  ]),
  right: new GamepadAxesInput([
    [0, true],
    [2, true],
  ]),
  up: new GamepadAxesInput([
    [1, false],
    [3, false],
  ]),
  down: new GamepadAxesInput([
    [1, true],
    [3, true],
  ]),
}

export const arrowKeys = [key.up, key.right, key.down, key.left]
export const arrowButtons = [pad.up, pad.right, pad.down, pad.left]
export const arrowAxes = [axes.up, axes.right, axes.down, axes.left]
export const fireKeys = [key.fire, pointer, pad.fire]
export const resetKeys = [key.reset, pad.reset]
export const anyKeys = [...arrowKeys, ...fireKeys, ...arrowButtons]
export const recordKeys = [...anyKeys, ...arrowAxes]

export const tween = new TweenManager(runner)

export const procs = {
  bg: new Procs(),
  effectBack: new Procs(),
  enemyNotice: new Procs(),
  player: new Procs(),
  playerBullet: new Procs(),
  effectOverPlayer: new Procs(),
  enemy: new Procs(),
  enemyBullet: new Procs(),
  effectOverEnemy: new Procs(),
  ui: new Procs(),
}

export const random = new Random()

export const sprite = Sprite.loadMap(
  new URL('./assets/image.png', import.meta.url),
  imageMap
)

export const se = {
  uiButton: new Se(
    new URL('./assets/se/sonohoka_pyokottohaeru.wav', import.meta.url),
    0.5,
    0.04
  ),
  titleStart: new Se(
    new URL('./assets/se/hit_kyouda4.wav', import.meta.url),
    0.8
  ),
  titleModeChange: new Se(
    new URL('./assets/se/se_etc_003.wav', import.meta.url),
    0.4
  ),
  playerFire: new Se(
    new URL('./assets/se/se_shot_003.wav', import.meta.url),
    0.4,
    0.02
  ),
  playerHit: new Se(
    new URL('./assets/se/kaminarikei_chisaikaminari.wav', import.meta.url),
    1
  ),
  enemyShow: new Se(new URL('./assets/se/wind3.wav', import.meta.url), 1, 0.04),
  enemyHit: new Se(
    new URL('./assets/se/cancel2.wav', import.meta.url),
    0.5,
    0.04
  ),
  enemyFire: new Se(
    new URL('./assets/se/shoot9.wav', import.meta.url),
    0.6,
    0.02
  ),
  enemyFireLarge: new Se(
    new URL('./assets/se/mamono_tsukon2.wav', import.meta.url),
    0.9,
    0.04
  ),
  enemyTake: new Se(
    new URL('./assets/se/se_powerup_004.wav', import.meta.url),
    0.45,
    0.02
  ),
  enemyTakeLarge: new Se(
    new URL('./assets/se/se_powerup_008.wav', import.meta.url),
    0.6,
    0.04
  ),
  resultCounting: new Se(
    new URL('./assets/se/souchi_kaifukusouchi.wav', import.meta.url),
    0.5,
    0.02
  ),
  resultSuccess: new Se(
    new URL('./assets/se/hit_tsujou3.wav', import.meta.url),
    1
  ),
}

export const bgm = {
  play: new Bgm(new URL('./assets/bgm/audiostock_49758.mp3', import.meta.url)),
  result: new Bgm(
    new URL('./assets/bgm/audiostock_49543.mp3', import.meta.url),
    0.9
    // { start: 1.844, end: 9.229 }
  ),
  // result: new Bgm(
  //   new URL('./assets/bgm/fireball.mp3', import.meta.url),
  //   0.75
  //   // { start: 3, end: 9.868 }
  // ),
}

export const store = {
  /** @type {Mode} */
  mode: 'normal',
  screenTop: 0,
  isFirstEnemy: false,
  enemyWaveId: 0,
  playerPos: { x: 0, y: 0 },
  isSuccess: false,
  heart: 0,
  heartRate: 0,
  deathCount: 0,
  /** @param {number} value */
  addHeart(value) {
    this.heart += this.getHeartRate() * value
  },
  getHeartRate() {
    const rate = this.heartRate || 1
    return this.isSuccess ? rate : Math.min(rate, 16)
  },
  clearing: tween.from(0).wait(1500),
}

export const color = {
  white: Color.parse('#ffffff'),
  base: Color.parse('#ffffff'),
  main: Color.parse('#f64744'),
  accent: Color.parse('#f69c44'),
}

import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent as _logEvent } from 'firebase/analytics'
import { firebaseConfig } from 'env'

export const firebaseApp = initializeApp(firebaseConfig)
export const logEvent = _logEvent.bind(null, getAnalytics(firebaseApp))
