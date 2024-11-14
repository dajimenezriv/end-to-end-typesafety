<template>
  <div class="container">
    <h1>{{ page?.title }}</h1>
    <p>{{ page?.content }}</p>
  </div>
</template>

<script lang="ts">
import type { TPage } from '@/page.entity'
import { useStore } from '@/store'
import { computed } from 'vue'
import z from 'zod'

// const PARAMS = z.object({ index: z.coerce.number() })

export default {
  props: {
    index: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore()
    const pages = computed(() => store.pages)
    return { store, pages }
  },
  created() {
    this.loadPage(this.index)
    // this.$watch(
    //   () => this.$route.params,
    //   async (params) => {
    //     const parsedParams = await PARAMS.safeParseAsync(params)
    //     const index = parsedParams.data?.index ?? 0
    //     this.page = this.pages[index]
    //   },
    // )
  },
  data() {
    return {
      page: null as TPage | null,
    }
  },
  watch: {
    index(index: string | string[]) {
      this.loadPage(index)
    },
  },
  methods: {
    loadPage(index: string | string[]) {
      const parsedIndex = z.coerce.number().safeParse(index)
      this.page = this.pages[parsedIndex.data ?? 0]
    },
  },
}
</script>
