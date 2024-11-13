import { defineStore } from 'pinia'
import type { TPage } from './page.entity'

type TState = {
  theme: 'light' | 'dark'
  pages: Array<TPage>
}

export const useStore = defineStore('store', {
  persist: { storage: localStorage },
  state: (): TState => ({
    theme: 'light',
    pages: [
      {
        title: 'Page 1',
        content: 'Page 1 content',
      },
      {
        title: 'Page 2',
        content: 'Page 2 content',
      },
      {
        title: 'Page 3',
        content: 'Page 3 content',
      },
    ],
  }),
  actions: {
    toggleTheme() {
      if (this.theme === 'light') this.theme = 'dark'
      else this.theme = 'light'
    },
  },
})
