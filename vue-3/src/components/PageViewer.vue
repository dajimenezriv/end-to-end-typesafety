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

const PARAMS = z.object({ index: z.coerce.number() })

export default {
  setup() {
    const store = useStore()
    const pages = computed(() => store.pages)
    return { store, pages }
  },
  async created() {
    const params = this.$route.params
    const parsedParams = await PARAMS.safeParseAsync(params)
    const index = parsedParams.data?.index ?? 0
    this.page = this.pages[index]
  },
  data() {
    return {
      page: null as TPage | null,
    }
  },
}
</script>
