<template>
  <CustomNavbar :pages="pages" :activePage="activePage" />

  <RouterView />
</template>

<script lang="ts">
import { computed } from 'vue';
import CustomNavbar from './components/CustomNavbar.vue'
import { useStore } from './store'
import { EMITTER } from './utils/events'

export default {
  components: {
    CustomNavbar,
  },
  setup() {
    const store = useStore()
    const pages = computed(() => store.pages)
    return { store, pages }
  },
  data() {
    return {
      activePage: 0,
    }
  },
  created() {
    EMITTER.on('navbarActived', (index: number) => {
      this.activePage = index
    })
  },
  methods: {
    pageCreated(page: { title: string; content: string }) {
      this.pages.push(page)
    },
  },
}
</script>
