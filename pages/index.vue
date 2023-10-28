<script setup></script>

<template>
  <main class="main">
    <div class="hero-wrapper">
      <img src="@/public/hero2.jpg" alt="hero" class="hero-img" />
    </div>
    <div class="container">
      <TheForm />
    </div>
    <TheService />
    <TheSlider />
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
