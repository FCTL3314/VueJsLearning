<template>
  <div class="root">
    <img width="640" :class="imageFilters" :style="imageRotation" src="../assets/nature_image.jpg" alt="nature_image">
    <button @click="imageFilters.sepia = !imageFilters.sepia">Sepia</button>
    <button @click="imageFilters.border = !imageFilters.border">Border</button>
    <input :min="imageFilters.rotation.minDeg" :max="imageFilters.rotation.maxDeg" type="range" @input="imageFilters.rotation.current = $event.target.value">
    <span>{{ imageFilters.rotation.current }}</span>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      imageFilters: {
        sepia: false,
        border: false,
        rotation: {
          maxDeg: 360,
          minDeg: 0,
          current: 0,
        }
      },
    }
  },
  computed: {
    imageRotation() {
      return {
        rotate: `${this.imageFilters.rotation.current}deg`
      }
    }
  }
}
</script>

<style>
img {
  transition: 0.2s ease;
}

img.sepia {
  filter: sepia(100%);
}

img.border {
  border: 5px dashed #464646;
}
</style>