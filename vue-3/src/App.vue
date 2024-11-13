<template>
  <CustomNavbar :pages="pages" :activePage="activePage" />

  <RouterView />

  <!-- <PageViewer v-if="pages.length > 0" :page="pages[activePage]" />

  <CreatePage @pageCreated="pageCreated" /> -->
</template>

<script lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { EMITTER } from './utils/Events'

export default {
  components: {
    CustomNavbar,
  },
  data() {
    return {
      activePage: 0,
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
    }
  },
  created() {
    this.getPages()

    EMITTER.on('navbarActived', (index: number) => {
      this.activePage = index
    })
  },
  methods: {
    async getPages() {
      const res = await fetch('pages.json')
      const data = await res.json()
      this.pages = data
    },
    pageCreated(page: { title: string; content: string }) {
      this.pages.push(page)
    },
  },
}
</script>
