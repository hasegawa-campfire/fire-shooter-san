import {
  EventMap as _EventMap,
  SpriteParam as _SpriteParam,
  Box as _Box,
  Rect as _Rect,
} from 'game'

/**
 * @typedef Entry
 * @property {string} id
 * @property {string} uid
 * @property {string} name
 * @property {string} replayId
 * @property {number} score
 */

/**
 * @typedef Result
 * @property {string} id
 * @property {number} version
 * @property {number} score
 * @property {string} log
 */

declare global {
  type EventMap = _EventMap
  type SpriteParam = _SpriteParam
  type Box = _Box
  type Rect = _Rect
  type ModeCtor = () => Function
  type EnemyConfig = {
    lap: number
    rank: number
    x: number
    y: number
    hp: number
    wait?: number
    noOver?: boolean
    noHorOver?: boolean
    noVertOver?: boolean
    large?: boolean
    showTime?: number
    me?: {
      id: number
    }
    parent?: {
      id: number
    }
  }
  type Mode = 'normal' | 'ex'
  type Entry = {
    id: string
    uid: string
    name: string
    replayId: string
    score: number
    mode: Mode
  }
  type Replay = {
    id: string
    version: number
    score: number
    log: string
    mode: Mode
    seed: number
  }
  type Result = {
    replayId: string
    newRecord: boolean
  }
  type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>
}
