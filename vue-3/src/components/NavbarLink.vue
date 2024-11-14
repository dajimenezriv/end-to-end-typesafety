<template>
  <li>
    <a
      class="nav-link"
      aria-current="page"
      :class="activeClasses"
      :title="`This link goes to ${page.title}`"
      @click.prevent="activeLink"
      >{{ page.title }}</a
    >
  </li>
</template>

<script lang="ts">
import type { TPage } from '@/page.entity'
import { EMITTER } from '@/utils/events'
import type { PropType } from 'vue'

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    page: {
      type: Object as PropType<TPage>,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      }
    },
  },
  methods: {
    activeLink() {
      EMITTER.emit('navbarActived', this.index)
    },
  },
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
