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
import { EMITTER } from '@/utils/Events'

export default {
  props: ['index', 'page', 'isActive'],
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
