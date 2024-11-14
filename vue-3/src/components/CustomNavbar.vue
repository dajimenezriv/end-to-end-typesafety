<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavbarLink
          v-for="(page, index) in pages"
          class="nav-item"
          :key="index"
          :index="index"
          :page="page"
          :isActive="index === activePage"
        />

        <li>
          <RouterLink to="/pages/create" class="nav-link">Create Page</RouterLink>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="store.toggleTheme()">Toggle</button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import type { TPage } from '@/page.entity'
import NavbarLink from './NavbarLink.vue'
import { useStore } from '@/store'
import { computed, type PropType } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    NavbarLink,
    RouterLink,
  },
  props: {
    pages: {
      type: Array as PropType<Array<TPage>>,
      required: true,
    },
    activePage: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const store = useStore()
    const theme = computed(() => store.theme)
    return { store, theme }
  },
}
</script>
