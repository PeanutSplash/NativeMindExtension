<template>
  <div class="p-4 text-center">
    <h1 class="text-xl font-bold">
      {{ msg }}
    </h1>
    <button
      class="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
      @click="count++"
    >
      You clicked {{ count }} times
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>
