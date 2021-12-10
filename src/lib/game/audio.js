import { asyncEvent } from './util.js'
import { StatefulPromise } from './stateful-promise.js'

let pollTimerId = 0

const gamepadPromise = asyncEvent(window, 'gamepadconnected').then(() => {
  const check = () => {
    for (const gamepad of navigator.getGamepads()) {
      if (gamepad && gamepad.buttons.some((b) => b.pressed)) {
        return true
      }
    }
  }

  return new Promise((resolve) => {
    const poll = () => {
      if (check() || pollTimerId < 0) {
        resolve(true)
      } else {
        pollTimerId = requestAnimationFrame(poll)
      }
    }
    poll()
  })
})

/** @type {typeof window.AudioContext} */
// @ts-ignore
const AudioContext = window.webkitAudioContext || window.AudioContext

const ctxPromise = StatefulPromise.from(async () => {
  await Promise.race([
    asyncEvent(document, ['touchstart', 'mousedown', 'keydown']),
    gamepadPromise,
  ])

  cancelAnimationFrame(pollTimerId)
  pollTimerId = -1

  const ctx = new AudioContext()
  const applyState = () => {
    if (document.visibilityState === 'visible') {
      return ctx.resume()
    } else {
      return ctx.suspend()
    }
  }

  await applyState()
  document.addEventListener('visibilitychange', applyState)
  return ctx
})

/**
 * @typedef AudioParam
 * @property {number} [volume]
 * @property {number} [minTime]
 * @property {boolean|{start?:number,end?:number}} [loop]
 * @property {boolean} [mute]
 */

export class AudioBase {
  #baseVolume
  #volume = 1
  #minTime
  #loop
  #mute
  #startTime = Number.MIN_SAFE_INTEGER
  #audioBufferPromise
  #gainNodePromise
  /** @type {AudioBufferSourceNode|null} */
  #audioSource = null
  #playing = true

  /**
   * @param {URL|string} url
   * @param {AudioParam} param
   */
  constructor(url, param = {}) {
    this.#baseVolume = param.volume ?? 1
    this.#minTime = param.minTime ?? 0
    this.#loop = param.loop ?? false
    this.#mute = param.mute ?? false

    this.#audioBufferPromise = StatefulPromise.from(async () => {
      const res = await fetch(url instanceof URL ? url.href : url)
      const audioBuffer = await res.arrayBuffer()
      const audioContext = await ctxPromise
      return audioContext.decodeAudioData(audioBuffer)
    })

    this.#gainNodePromise = StatefulPromise.from(async () => {
      const audioContext = await ctxPromise
      const gainNode = audioContext.createGain()
      gainNode.gain.value = this.#mute ? 0 : this.#volume * this.#baseVolume
      gainNode.connect(audioContext.destination)
      return gainNode
    })
  }

  play() {
    this.#playing = true
    if (
      ctxPromise.isResolved() &&
      this.#audioBufferPromise.isResolved() &&
      this.#gainNodePromise.isResolved()
    ) {
      const currentTime = ctxPromise.value.currentTime - this.#startTime
      if (currentTime >= this.#minTime) {
        this.#audioSource?.stop()
        this.#audioSource = ctxPromise.value.createBufferSource()
        if (typeof this.#loop === 'boolean') {
          this.#audioSource.loop = this.#loop
        } else {
          this.#audioSource.loop = true
          this.#audioSource.loopStart = this.#loop.start ?? 0
          this.#audioSource.loopEnd = this.#loop.end ?? 0
        }
        this.#audioSource.buffer = this.#audioBufferPromise.value
        this.#audioSource.connect(this.#gainNodePromise.value)
        this.#audioSource.start()
        this.#startTime = ctxPromise.value.currentTime
      }
    } else {
      Promise.all([
        ctxPromise,
        this.#audioBufferPromise,
        this.#gainNodePromise,
      ]).then(() => {
        if (this.#playing) {
          this.play()
        }
      })
    }
  }

  stop() {
    this.#playing = false
    this.#audioSource?.stop()
    this.#audioSource = null
  }

  /**
   * @param {boolean} value
   */
  setMute(value) {
    this.#mute = value
    this.#updateVolume()
  }

  /**
   * @param {number} value
   */
  setVolume(value) {
    this.#volume = value
    this.#updateVolume()
  }

  #updateVolume() {
    if (this.#gainNodePromise.isResolved()) {
      this.#gainNodePromise.value.gain.value = this.#mute
        ? 0
        : this.#volume * this.#baseVolume
    }
  }
}

export class Se extends AudioBase {
  /**
   * @param {URL|string} url
   * @param {number} [volume]
   * @param {number} [minTime]
   */
  constructor(url, volume, minTime) {
    super(url, { volume, minTime })
  }
}

export class Bgm extends AudioBase {
  /**
   * @param {URL|string} url
   * @param {number} [volume]
   * @param {boolean|{start?:number,end?:number}} [loop]
   */
  constructor(url, volume, loop) {
    super(url, { volume, loop })
  }
}
