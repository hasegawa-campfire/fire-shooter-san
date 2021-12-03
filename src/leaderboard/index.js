import { toDelimited } from 'game'
import { getMeName, updateMeName, onMeChanged, getMeId } from './auth.js'
import {
  fetchEntries,
  fetchMeEntry,
  updateEntryName,
  createReplay,
  createEntry,
  updateEntry,
} from './store.js'
import { version, logEvent } from '@/r.js'
export { fetchReplay } from './store.js'

const defaultName = 'no name'
const modes = /** @type {Mode[]} */ (['normal', 'ex'])
const modeLabels = /** @type {Record<Mode,string>} */ ({
  normal: 'NORMAL',
  ex: 'EX',
})

const $entryList = document.querySelector('.leaderboard .entry-list')
const $aboutButton = document.querySelector('.leaderboard .about-button')
const $userButton = document.querySelector('.leaderboard .user-button')
const $about = document.querySelector('.about')
const $aboutModalClose = document.querySelector('.about .modal-close')
const $user = document.querySelector('.user')
const $userModal = document.querySelector('.user .modal')
const $userForm = document.querySelector('.user .form')
const $userFormTextfield = document.querySelector('.user .form-textfield')
const $userFormSave = document.querySelector('.user .form-save')
const $userRecordList = document.querySelector('.user .record-list')
const $userModalClose = document.querySelector('.user .modal-close')

if (
  !($entryList instanceof HTMLElement) ||
  !($aboutButton instanceof HTMLElement) ||
  !($userButton instanceof HTMLElement) ||
  !($about instanceof HTMLElement) ||
  !($aboutModalClose instanceof HTMLElement) ||
  !($user instanceof HTMLElement) ||
  !($userModal instanceof HTMLElement) ||
  !($userForm instanceof HTMLFormElement) ||
  !($userFormTextfield instanceof HTMLInputElement) ||
  !($userFormSave instanceof HTMLButtonElement) ||
  !($userRecordList instanceof HTMLElement) ||
  !($userModalClose instanceof HTMLElement)
)
  throw Error('invalid element')

/** @type {Record<Mode,{meEntry?:Entry|undefined,entries?:Entry[]}>} */
const cache = { normal: {}, ex: {} }

/** @param {Mode} mode */
async function getMeEntry(mode) {
  let meEntry = cache[mode].meEntry
  if (!meEntry) {
    meEntry = cache[mode].meEntry = await fetchMeEntry(version, mode)
  }
  return meEntry
}

/** @param {Mode} mode */
async function getEntries(mode) {
  let entries = cache[mode].entries
  if (!entries) {
    entries = cache[mode].entries = await fetchEntries(version, mode)
  }
  return entries
}

/**
 * @param {Omit<Replay,'id'>} data
 */
export async function registerReplay(data) {
  const replay = await createReplay(data)
  const meEntry = await getMeEntry(replay.mode)
  let newRecord = false

  if (!meEntry) {
    newRecord = true
    cache[replay.mode].meEntry = await createEntry(replay)
  } else if (meEntry.score < data.score) {
    newRecord = true
    meEntry.score = data.score
    await updateEntry(meEntry, replay)
  }

  if (newRecord) {
    delete cache[replay.mode].entries
    if (replay.mode === getMode()) {
      renderEntryList(replay.mode)
    }
  }

  return {
    replayId: replay.id,
    newRecord,
  }
}

/** @param {Mode} mode */
async function renderEntryList(mode) {
  const entries = await getEntries(mode)
  const htmls = entries.map(
    (entry, i) => `
      <div class="entry ${getMeId() === entry.uid ? 'me' : ''}">
        <div class="entry-order">${i + 1}.</div>
        <div class="entry-name">${entry.name || defaultName}</div>
        <div class="entry-score">￥${toDelimited(entry.score)}</div>
        <div class="entry-replay clickable" data-r="${entry.replayId}"></div>
      </div>`
  )
  if ($entryList) $entryList.innerHTML = htmls.join('')
}

/** @type {((replayId:string)=>void)|null} */
let onReplayListener = null

/**
 * @param {(replayId:string)=>void} listener
 */
export function onReplay(listener) {
  onReplayListener = listener
}

export function getShareUrl() {
  const url = new URL(location.origin + location.pathname)
  const id = getReplayId()
  if (id) {
    url.searchParams.set('r', id)
  }
  return url.href
}

/**
 * @return {Mode}
 */
export function getMode() {
  const value = new URL(location.href).searchParams.get('mode')
  return value === 'ex' ? 'ex' : 'normal'
}

/**
 * @param {Mode} value
 */
export function setMode(value) {
  const url = new URL(location.href)
  if (value === 'normal') {
    url.searchParams.delete('mode')
  } else {
    url.searchParams.set('mode', value)
  }
  history.replaceState(history.state, '', url)
  renderEntryList(value)
}

let cacheReplayUrl = ''
let cacheReplayId = ''

export function getReplayId() {
  if (cacheReplayUrl !== location.href) {
    cacheReplayUrl = location.href
    cacheReplayId = new URL(cacheReplayUrl).searchParams.get('r') || ''
  }
  return cacheReplayId
}

/**
 * @param {string} id
 */
export function setReplayId(id) {
  if (getReplayId() === id) return
  const url = new URL(location.href)
  if (id) {
    url.searchParams.set('r', id)
  } else {
    url.searchParams.delete('r')
  }
  history.replaceState(history.state, '', url)
}

addEventListener('click', (e) => {
  if (e.target instanceof HTMLElement) {
    const a = e.target.closest('a')
    a && logEvent('link_click', { url: a.href })
  }
})

$aboutButton.addEventListener('click', () => {
  logEvent('about_open')
  $about.classList.add('opened')
})

$aboutModalClose.addEventListener('click', () => {
  $about.classList.remove('opened')
})

document.addEventListener('click', (e) => {
  if (onReplayListener && e.target instanceof HTMLElement) {
    const $play = e.target.closest('.entry-replay,.record-replay')
    if ($play instanceof HTMLElement && $play.dataset.r) {
      setReplayId($play.dataset.r)
      onReplayListener($play.dataset.r)
      $about.classList.remove('opened')
      $user.classList.remove('opened')
      window.scrollTo({ top: 100, behavior: 'smooth' })
    }
  }
})

$userButton.addEventListener('click', async () => {
  logEvent('user_open')
  $userFormTextfield.value = getMeName()
  $userFormSave.disabled = true
  $user.classList.add('opened')
  $userModal.classList.add('loading')

  try {
    const entries = await Promise.all(modes.map((mode) => getMeEntry(mode)))
    const existsEx = entries.some((entry) => entry?.mode === 'ex')
    let html = ''

    entries.forEach((entry, i) => {
      const modeHtml = `<div>${modeLabels[modes[i]]}</div>`
      if (entry) {
        html += `
          ${existsEx ? modeHtml : ''}
          <div>￥${toDelimited(entry.score)}</div>
          ${existsEx ? '' : '<div></div>'}
          <div class="record-replay clickable" data-r="${
            entry.replayId
          }"></div>`
      } else if (modes[i] !== 'ex') {
        html += `
          ${existsEx ? modeHtml : ''}
          <div>なし</div>
          ${existsEx ? '' : '<div></div>'}
          <div></div>`
      }
    })

    $userRecordList.innerHTML = html
  } catch (err) {
    console.log(err)
  }

  $userModal.classList.remove('loading')
  $userFormTextfield.focus()
})

$userModalClose.addEventListener('click', () => {
  $user.classList.remove('opened')
})

$userForm.addEventListener('submit', (e) => {
  e.preventDefault()
})

$userFormTextfield.addEventListener('input', () => {
  $userFormSave.disabled = false
})

$userFormSave.addEventListener('click', async () => {
  logEvent('user_save')
  $userFormSave.disabled = true
  $userModal.classList.add('loading')

  try {
    const name = $userFormTextfield.value
    const oldName = getMeName()

    await updateMeName(name)

    const newName = getMeName()

    if (oldName !== newName) {
      await Promise.all(
        modes.map(async (mode) => {
          const entry = await getMeEntry(mode)
          if (entry) {
            await updateEntryName(entry, name)
            entry.name = name
            delete cache[mode].entries
          }
        })
      )
    }
    renderEntryList(getMode())
  } catch {
    $userFormSave.disabled = false
  }

  $userModal.classList.remove('loading')
})

onMeChanged(() => {
  renderEntryList(getMode())
})
