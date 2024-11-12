<template>
  <CustomNavbar
    :pages="pages"
    :activePage="activePage"
    :navLinkClick="(index: number) => (activePage = index)"
  />

  <PageViewer v-if="pages.length > 0" :page="pages[activePage]" />
</template>

<script lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import PageViewer from './components/PageViewer.vue'

export default {
  components: {
    PageViewer,
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
  },
  methods: {
    async getPages() {
      const res = await fetch('pages.json')
      const data = await res.json()
      this.pages = data
    },
  },
}
</script>
