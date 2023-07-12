<script setup>
import {defineProps} from 'vue';

defineProps(['modelValue'])
</script>

<template>
  <input
      type="text"
      class="search"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>