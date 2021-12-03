import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
} from 'firebase/auth'
import { firebaseApp } from '@/r.js'

/** @typedef {import('firebase/auth').User} User */

export const auth = getAuth(firebaseApp)

/**
 * @param {(me:User|null)=>void} listener
 */
export function onMeChanged(listener) {
  return onAuthStateChanged(auth, listener)
}

export function getMe() {
  return auth.currentUser
}

export function getMeId() {
  return getMe()?.uid ?? ''
}

export function getMeName() {
  return getMe()?.displayName ?? ''
}

/**
 * @param {string} name
 */
export async function updateMeName(name) {
  const me = getMe()
  if (me) {
    await updateProfile(me, { displayName: name })
  }
}

onMeChanged((me) => !me && signInAnonymously(auth))
