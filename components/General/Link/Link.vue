<script setup>
const linkProp = defineProps({
  url: String,
})
</script>

<template>
  <NuxtLink :to="url">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

</style>