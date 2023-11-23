<script setup>
import useParse from "@/composables/useParse/useParse";

const { data } = await useFetch(
  "https://cross-city-taxi.ru/core/api/tariffs/list/"
);

const tariffs = useParse(data.value);
</script>

<template>
  <main class="main">
    <SliderMainBannersSlider />
    <FormMainForm :items="tariffs" />
    <SectionMainService />
    <SliderTariffs :items="tariffs" />
    <SectionQuestion />
  </main>
</template>

<style scoped>
.hero-wrapper {
  width: 100%;
  height: 700px;
  display: flex;
  flex-grow: 1;

  margin: 0 0 50px 0;
  .hero-img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
