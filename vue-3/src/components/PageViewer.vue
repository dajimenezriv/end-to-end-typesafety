<template>
  <div class="container">
    <!-- <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p> -->
    <h1>Hey</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    page: {
      type: Object,
      required: true,
      default() {
        return {
          title: 'Default title',
          content: 'Default content',
        }
      },
    },
  },
  created() {
    const params = this.$route.params
    console.log(params)
  },
}
</script>
