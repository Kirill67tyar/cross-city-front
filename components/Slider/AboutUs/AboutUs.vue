<script setup lang="ts">
import { Navigation } from "swiper/modules";
</script>

<template>
  <section class="about_us-section">
    <div class="about_us-slider-wrapper">
      <h2 class="about_us-slider-title">Отзывы</h2>
      <Swiper
        :slides-per-view="1"
        :space-between="150"
        :loop="true"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :swipe-handler="false"
        class="swiper"
      >
        <SwiperSlide v-for="item in 6">
          <div class="about_us-slide-image"></div>
          <p class="about_us-slide-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque placerat eros ac finibus congue. Integer consectetur,
            lorem nec accumsan, sem mauris pharetra arcu, id viverra eros
          </p>
          <div class="about_us-slide-info">
            <h3 class="about_us-slide-name">Alice Doe</h3>
            <span class="about_us-slide-status">Regular Client {{ item }}</span>
          </div>
        </SwiperSlide>

        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
