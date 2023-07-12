<script setup>
import RecipeCard from './RecipeCard.vue';
import MyInput from './MyInput.vue';
import {ref} from 'vue';

let searchQuery = ref(0);
const recipes = ref(
    [
      {
        title: 'Strawberry cake',
        imgUrl: 'https://special-recipe.space/media/recipe_images/strawberry-cheesecake.jpg',
        description: 'Dessert with delicious creamy cheesecake & fresh strawberry topping.',
        cookingTime: '13 hours 40 minutes.',
      },
      {
        title: 'Strawberry cake',
        imgUrl: 'https://special-recipe.space/media/recipe_images/strawberry-cheesecake.jpg',
        description: 'Dessert with delicious creamy cheesecake & fresh strawberry topping.',
        cookingTime: '15 hours 40 minutes.',
      },
      {
        title: 'Strawberry cake',
        imgUrl: 'https://special-recipe.space/media/recipe_images/strawberry-cheesecake.jpg',
        description: 'Dessert with delicious creamy cheesecake & fresh strawberry topping.',
        cookingTime: '13 hours 40 minutes.',
      },
    ],
)

const addToBasket = (index) => {
  console.log(index)
}
</script>

<template>
  <div class="product-list">
    <h1>Рецепты:</h1>
    <my-input v-model="searchQuery"/>
    <input type="text" v-model="searchQuery">
    {{ searchQuery }}
    <button type="button">Find</button>
    <ul class="list-default flex">
      <li
          v-for="(recipe, index) in recipes"
          :key="index"
      >
        <recipe-card
            :title="recipe.title"
            :imgUrl="recipe.imgUrl"
            :description="recipe.description"
            :cookingTime="recipe.cookingTime"
            @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>