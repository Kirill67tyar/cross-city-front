<script setup>
const citiesProps = defineProps({
  items: Array,
});

const cities = citiesProps.items;
</script>

<template>
  <ul class="cities-list">
    <li class="city-item" v-for="city in cities" :id="city">
      <span class="city-name">{{ city }}</span>
    </li>
  </ul>
</template>

<style scoped>
@import "./styles.css";
</style>
