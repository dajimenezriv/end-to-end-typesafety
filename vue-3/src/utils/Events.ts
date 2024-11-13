import mitt from 'mitt'

type TEmitter = {
  navbarActived: number
}

export const EMITTER = mitt<TEmitter>()
