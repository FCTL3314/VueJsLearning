<script setup>
import {ref, defineEmits} from 'vue';

defineEmits(['search'])
let searchQuery = ref('')
</script>

<template>
  <input
      type="text"
      class="search"
      v-model="searchQuery"
  />
  <button @click="$emit('search', searchQuery)" type="button">Find</button>
</template>

<style scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>