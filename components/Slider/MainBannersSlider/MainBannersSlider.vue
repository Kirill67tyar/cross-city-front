<script setup>
import { Autoplay } from "swiper/modules";
</script>

<template>
  <section class="main-banners-section relative">
    <div
      ref="scrambleText"
      class="w-full h-auto flex justify-center items-center text-2xl font-bold text-white absolute top-[150px] right-0 left-0 z-40"
    ></div>

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
        <SwiperSlide id="2" key="2">
          <div class="slider-img-wrapper">
            <img
              src="@/public/banner/night.jpg"
              alt="hero"
              class="banner-img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <LayersDark />
    </div>
    <div class="social-button-wrapper">
      <NuxtLink to="https://t.me/GalinaMoscow" class="social-button">
        <img src="@/public/telegram.png" alt="telegram" class="social-image" />
      </NuxtLink>
      <NuxtLink to="https://wa.me/+79255798917" class="social-button">
        <img src="@/public/whatsapp.png" alt="whatsapp" class="social-image"
      /></NuxtLink>
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
