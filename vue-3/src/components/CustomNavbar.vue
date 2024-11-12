<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <NavbarLink
            :page="page"
            :isActive="index === activePage"
            @click.prevent="navLinkClick(index)"
          />
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme">Toggle</button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import NavbarLink from './NavbarLink.vue'

export default {
  components: {
    NavbarLink,
  },
  props: ['pages', 'activePage', 'navLinkClick'],
  data: () => {
    return {
      theme: 'light',
    }
  },
  methods: {
    changeTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }
    },
  },
}
</script>
