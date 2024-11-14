<template>
  <p>firstCounter: {{ firstCounter }}</p>
  <p>secondCounter: {{ secondCounter.counter }}</p>
  <button @click="click">Click</button>
  <p>Number of pages: {{ pages.length }}</p>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { ref, reactive, computed } from 'vue'

const firstCounter = ref(0)
const secondCounter = reactive({ counter: 0 })
const store = useStore()

const pages = computed(() => store.pages)

const click = () => {
  firstCounter.value++
  secondCounter.counter++
}
</script>
