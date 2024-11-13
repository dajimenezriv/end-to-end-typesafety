<template>
  <div>
    <form action="" class="container mb-3">
      <div class="mb-3">
        <label for="" class="form-label">Page Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="mb-1">
        <label for="" class="form-label">Content</label>
        <textarea type="text" class="form-control" v-model="content"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm">
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  emits: {
    pageCreated(page: { title: string; content: string }) {
      return true
    },
  },
  computed: {
    isFormInvalid() {
      return !this.title || !this.content
    },
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    submitForm() {
      if (this.isFormInvalid) {
        alert('Please fill in all fields')
        return
      }

      this.$emit('pageCreated', { title: this.title, content: this.content })
      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.content = ''
    },
  },
  watch: {
    title(newTitle: string, oldTile: string) {
      if (this.content === oldTile) {
        this.content = newTitle
      }
    },
  },
}
</script>
