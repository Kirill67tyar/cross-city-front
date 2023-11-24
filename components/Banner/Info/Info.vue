<script setup>
const infoBannerProps = defineProps({
  title: String,
});
</script>

<template>
  <section class="info-banner-section">
    <h1 class="info-banner-title">{{ title }}</h1>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
