<script setup></script>

<template>
  <main class="main">
    <SliderMainBannersSlider />
    <FormMainForm />
    <SectionMainService />
    <SliderTariffsCarousel />
    <TheQuestions />
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
