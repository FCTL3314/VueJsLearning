<script setup>
import RecipeCard from './RecipeCard.vue';
import MySearch from './MySearch.vue';
import {ref} from 'vue';

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

const recipesSearch = (query) => {
  console.log(`Загрузить товары: ${query}`)
}

const addToBasket = (index) => {
  console.log(index)
}
</script>

<template>
  <div class="product-list">
    <h1>Рецепты:</h1>
    <my-search @search="recipesSearch"/>
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