<script setup lang="ts">
import { Navigation } from "swiper/modules";

import questions from "~/constants/questions";
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
        <SwiperSlide
          :id="id"
          v-for="{ id, name, description, date } in questions"
          :key="id"
        >
          <div class="about_us-slide-image"></div>
          <p class="about_us-slide-text">
            {{ description }}
          </p>
          <div class="about_us-slide-info">
            <h3 class="about_us-slide-name">{{ name }}</h3>
            <span class="about_us-slide-status">Постоянный клиент</span>
          </div>
        </SwiperSlide>

        <div class="swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div class="swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
