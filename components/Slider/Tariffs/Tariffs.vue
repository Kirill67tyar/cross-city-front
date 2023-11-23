<script setup>
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
        :slides-per-view="2"
        :space-between="30"
        :breakpoints="{
          320: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }"
      >
        <SwiperSlide
          v-for="{ id, car_class, photo, price_per_km } in tariffs"
          :key="id"
        >
          <div class="slider-img-wrapper">
            <img :src="photo" :alt="car_class" class="slider-img" />
          </div>
          <div class="slider-info-wrapper">
            <h4 class="slider-info-title">{{ car_class }}</h4>
            <p class="slider-info-text">text</p>
            <span class="slider-info-price">{{ price_per_km }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
