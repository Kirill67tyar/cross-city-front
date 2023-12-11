<script setup>
import { Autoplay } from "swiper/modules";

const tariffsSlideProps = defineProps({
  items: Array,
});

const tariffs = tariffsSlideProps.items;
</script>

<template>
  <section class="tariffs-slider-section">
    <h2 class="tariffs-slider-title">Информация о тарифах</h2>
    <div class="swiper-wrapper">
      <Swiper
        class="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl"
        :modules="[Autoplay]"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :breakpoints="{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
      >
        <SwiperSlide
          v-for="{ id, car_class, photo, price_per_km } in tariffs"
          :key="id"
          class="swiper-slide"
        >
          <div class="slider-img-wrapper">
            <img :src="photo" :alt="car_class" class="slider-img" />
          </div>
          <div class="slider-info-wrapper">
            <h4 class="slider-info-title">{{ car_class }}</h4>
            <span class="slider-info-price" v-if="price_per_km !== '0'">{{
              price_per_km + " ₽/КМ"
            }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
