import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  limit,
  where,
  serverTimestamp,
} from 'firebase/firestore/lite'
import { getMeId, getMeName } from './auth.js'
import { firebaseApp } from '@/r.js'

/** @typedef {import('firebase/auth').User} User */

export const db = getFirestore(firebaseApp)

const replaysRef = collection(db, 'replays')
const entriesRef = collection(db, 'entries')

/**
 * @param {Entry} entry
 * @param {string} name
 */
export async function updateEntryName(entry, name) {
  await updateDoc(doc(entriesRef, entry.id), { name })
}

/**
 * @param {number} version
 * @param {string} mode
 * @return {Promise<Entry[]>}
 */
export async function fetchEntries(version, mode) {
  const querySnap = await getDocs(
    query(
      entriesRef,
      where('version', '==', version),
      where('mode', '==', mode),
      orderBy('score', 'desc'),
      limit(100)
    )
  )

  return querySnap.docs.map((docSnap) => {
    const docData = docSnap.data()
    return {
      id: docSnap.id,
      uid: docData.uid,
      name: docData.name,
      replayId: docData.replayId,
      score: docData.score,
      mode: docData.mode,
    }
  })
}

/**
 * @param {number} version
 * @param {string} mode
 * @return {Promise<Entry|undefined>}
 */
export async function fetchMeEntry(version, mode) {
  const querySnap = await getDocs(
    query(
      entriesRef,
      where('version', '==', version),
      where('mode', '==', mode),
      where('uid', '==', getMeId()),
      orderBy('score', 'desc'),
      limit(1)
    )
  )

  const docSnap = querySnap.docs[0]

  if (docSnap) {
    const docData = docSnap.data()
    return {
      id: docSnap.id,
      uid: docData.uid,
      name: docData.name,
      replayId: docData.replayId,
      score: docData.score,
      mode: docData.mode,
    }
  }
}

/**
 * @param {string} id
 * @return {Promise<Replay|undefined>}
 */
export async function fetchReplay(id) {
  const docSnap = await getDoc(doc(replaysRef, id))
  const docData = docSnap.data()

  if (docData) {
    return {
      id,
      version: docData.version,
      score: docData.score,
      log: docData.log,
      seed: docData.seed,
      mode: docData.mode,
    }
  }
}

/**
 * @param {Omit<Replay,'id'>} data
 * @return {Promise<Replay>}
 */
export async function createReplay(data) {
  const docRef = await addDoc(replaysRef, {
    uid: getMeId(),
    registeredAt: serverTimestamp(),
    log: data.log,
    version: data.version,
    score: data.score,
    mode: data.mode,
    seed: data.seed,
  })
  return { id: docRef.id, ...data }
}

/**
 * @param {Replay} replay
 * @return {Promise<Entry>}
 */
export async function createEntry(replay) {
  const docRef = await addDoc(entriesRef, {
    uid: getMeId(),
    name: getMeName(),
    registeredAt: serverTimestamp(),
    replayId: replay.id,
    version: replay.version,
    score: replay.score,
    mode: replay.mode,
  })
  return {
    id: docRef.id,
    uid: getMeId(),
    name: getMeName(),
    replayId: replay.id,
    score: replay.score,
    mode: replay.mode,
  }
}

/**
 * @param {Entry} entry
 * @param {Replay} replay
 */
export async function updateEntry(entry, replay) {
  await updateDoc(doc(entriesRef, entry.id), {
    registeredAt: serverTimestamp(),
    replayId: replay.id,
    score: replay.score,
  })
}
