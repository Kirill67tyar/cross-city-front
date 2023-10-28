<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <section class="info-hero-wrapper">
    <h1 class="info-hero-title">{{ title }}</h1>
  </section>
</template>

<style scoped>
.info-hero-wrapper {
  width: 100%;
  height: auto;
  min-height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../public/contacts-hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 0 50px 0;

  .info-hero-title {
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.32px;
    color: #fff;
  }
}
</style>
