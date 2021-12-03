import {
  runner,
  g,
  tween,
  event,
  hit,
  key,
  pointer,
  procs,
  se,
  bgm,
  color,
  store,
} from '@/r.js'
import Title from './title/index.js'
import { setReplayId, onReplay, getMode } from '@/leaderboard/index.js'

function reset() {
  tween.clear()
  Object.values(key).forEach((k) => k.endLog())
  pointer.endLog()
  Object.values(procs).forEach((p) => p.clear())
}

function update() {
  g.clear()
  event.clear()
  hit.clear()
  Object.values(key).forEach((k) => k.update())
  pointer.update()
  tween.update()
}

/**
 * @param {boolean} value
 */
function setAudioMute(value) {
  Object.values(se).forEach((a) => a.setMute(value))
  Object.values(bgm).forEach((a) => a.setMute(value))
}

const on = /** @type {EventMap} */ ({})
let sceneCtor = Title
let scene = sceneCtor()

const overlayIn = tween.from(0).wait(100).to(g.height, 200).start()
const overlayOut = tween
  .from(-g.height)
  .to(0, 200)
  .on(() => {
    reset()
    scene = sceneCtor()
    overlayIn.start()
  })

/**
 * @param {()=>()=>void} ctor
 */
on.sceneChange = (ctor) => {
  sceneCtor = ctor
  overlayOut.start()
}

onReplay(() => event.emit('sceneChange', Title))
setAudioMute(localStorage.getItem('mute') === 'true')

store.mode = getMode()

runner.proc = () => {
  update()
  event.subscribe(on)

  if (key.reset.isDownChange && !overlayOut.running) {
    event.emit('sceneChange', () => {
      setReplayId('')
      return Title()
    })
  }

  scene()

  const overlay = [overlayIn, overlayOut].find((tw) => tw.running)
  if (overlay) {
    g.drawRect(0, overlay.value, g.width, g.height, color.base)
  }
}
