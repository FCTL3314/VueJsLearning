<template>
  <div class="root">
    <label>
      Выберите кол-во продуктов:
      <button type="button" v-on:click="increaseNumber">+</button>
      <input type="number" min="1" max="10" :value="number">
      <button type="button" v-on:click="decreaseNumber">-</button>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        number: 1,
      }
    },
    methods: {
      increaseNumber() {
        if (this.number < 10) {
          this.number += 1
        }
      },
      decreaseNumber() {
        if (this.number > 1) {
          this.number -= 1
        }
      },
    }
  }
</script>