<script setup>
const items = [
  {
    title: "Эконом",
    text: "tariff info",
    price: 10,
  },
  {
    title: "Комфорт",
    text: "tariff info",
    price: 20,
  },
  {
    title: "Бизнес",
    text: "tariff info",
    price: 30,
  },
  {
    title: "Минивен",
    text: "tariff info",
    price: 40,
  },
  {
    title: "Автобус",
    text: "tariff info",
    price: 50,
  },
];
</script>

<template>
  <div class="slider-container container">
    <h2 class="slider-title">Информация о тарифах</h2>
    <Swiper
      :slides-per-view="3"
      :space-between="30"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="{ title, text, price } in items" :key="slide">
        <div class="slide-image-wrapper"></div>
        <div class="slide-info-wrapper">
          <h4 class="slide-info-title">{{ title }}</h4>
          <p class="slide-info-text">{{ text }}</p>
          <span class="slide-info-price">{{ price }}</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 810px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 100px !important;

  .slider-title {
    font-size: 28px;
    font-weight: 900;
    margin: 0 0 50px 0;
  }

  .swiper {
    max-width: 810px;
  }

  .swiper-slide {
    width: 100%;
    height: auto;
    max-width: 250px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    padding: 20px 0 100px 0;

    .slide-image-wrapper {
      width: 80px;
      height: 80px;
      display: block;
      margin: 0 0 80px 0;
      background-color: #fefefe;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }

    .slide-info-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
