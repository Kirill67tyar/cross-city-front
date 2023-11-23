<script setup>
import { Autoplay } from "swiper/modules";
</script>

<template>
  <section class="main-banners-section">
    <div class="slider-wrapper">
      <Swiper
        :modules="[Autoplay]"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide id="0" key="0">
          <div class="slider-img-wrapper">
            <img
              src="@/public/banner/main-banner.jpg"
              alt="hero"
              class="banner-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="1" key="1">
          <div class="slider-img-wrapper">
            <img
              src="@/public/banner/newdriver.jpg"
              alt="hero"
              class="banner-img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <LayersDark />
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
