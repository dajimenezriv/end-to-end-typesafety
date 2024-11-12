<template>
  <a
    class="nav-link"
    aria-current="page"
    :class="activeClasses"
    :title="`This link goes to ${page.title}`"
    >{{ page.title }}</a
  >
</template>

<script lang="ts">
export default {
  props: ['page', 'isActive'],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      }
    },
  },
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
