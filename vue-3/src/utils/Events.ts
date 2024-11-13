type TArgs = Array<unknown>
type TFn = (...args: TArgs) => unknown
const EVENTS = new Map<string, Array<TFn>>()

export default {
  $on(event: string, fn: TFn) {
    if (!EVENTS.has(event)) EVENTS.set(event, [])
    EVENTS.get(event)!.push(fn)
  },
  $off(event: string, fn: TFn) {
    throw { message: 'Not implemented' }
  },
  $emit(event: string, ...args: TArgs) {
    const events = EVENTS.get(event)
    if (events) events.forEach((fn) => fn(...args))
  },
}

export const NAVBAR_ACTIVED = 'NAVBAR_ACTIVED'
