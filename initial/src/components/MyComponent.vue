<template>
  <div class="root">
    <h1>Поиск по имени:</h1>
    <input type="text" @input="query = $event.target.value">
    <p>
      Всего имён: {{ names.length }}, Совпадений: {{ filterNames.length }}.
    </p>
    <ul>
      <li v-for="(name, index) in filterNames" :key="name">
        {{ index }}. {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      query: '',
      names: ['Nikita', 'Kirill', 'Stanislav', 'Artem'],
    }
  },
  computed: {
    filterNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.query.toLowerCase()))
    }
  },
}
</script>