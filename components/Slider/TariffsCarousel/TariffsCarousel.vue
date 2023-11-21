<script setup></script>

<template>
  <section class="tariffs-slider-section">
    <h2 class="tariffs-slider-title">Информация о тарифах</h2>
    <div class="swiper-wrapper">
      <Swiper>
        <SwiperSlide v-for="item in 9">
          <div class="swiper-img-wrapper"></div>
          <div class="swiper-info-wrapper">
            <h4 class="swiper-info-title">{{ item }}</h4>
            <p class="swiper-info-text">text</p>
            <span class="swiper-info-price"> price </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
@import "./styles";
</style>
