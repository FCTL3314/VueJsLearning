<script setup>
import {defineProps} from 'vue';

const props = defineProps(
    {
      title: {
        type: String,
        validator(value) {
          return value.length < 50;
        }
      },
      imgUrl: String,
      description: String,
      cookingTime: {
        type: String,
        default: 'No data',
      },
    },
)

const addToBasket = () => {
  this.$emit('addToBasket')
}
</script>

<template>
  <div class="recipe-card">
    <img :src="props.imgUrl" alt="recipe-img" width="300">
    <div class="product-card__info">
      <h2>{{ props.title }}</h2>
      <p class="description">{{ props.description }}</p>
      <p class="cooking-time">{{ props.cookingTime }}</p>
      <button class="recipe-button" type="button" @click="addToBasket">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;
}

.product-card__info {
  margin-top: 20px;
}

.description {
  color: rgb(143, 143, 143);
}

.recipe-button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  display: block;
  cursor: pointer;
  margin-top: 20px;
}

</style>