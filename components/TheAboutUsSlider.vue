<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
</script>

<template>
  <section class="about_us-slider-section section">
    <div class="about_us-slider-container container">
      <h2 class="about_us-slider-title">Отзывы</h2>
      <Swiper
        :slides-per-view="1"
        :space-between="150"
        :loop="true"
        :modules="[Navigation, Pagination]"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{
          el: '.swiper-pagination, .swiper-pagination-bullet',
        }"
        :swipe-handler="false"
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
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.about_us-slider-section {
  background: #2a4696;
  .about_us-slider-container {
    padding: 100px 0;

    .about_us-slider-title {
      font-size: 32px;
      font-weight: 900;
      color: #fff;
      margin: 0 0 50px 0;
    }
    .swiper {
      width: 100%;
      max-width: 1170px;
      padding: 60px 150px 120px 150px;
      background: #fff;
      border-radius: 5px;
      position: relative;

      .swiper-pagination {
        width: 300px;
        height: 10px;
        position: absolute;
        top: 400px;
        left: 440px;
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: 50px;
        height: 50px;
        background: #e0e0e0;
        border-radius: 50%;
        position: absolute;
        top: 220px;

        &::after {
          font-size: 22px;
          font-weight: 900;
          color: #151515;
        }
      }

      .swiper-button-prev {
        &::after {
          padding-right: 2px;
        }
      }

      .swiper-button-next {
        &::after {
          padding-left: 2px;
        }
      }

      .swiper-slide {
        width: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;

        .about_us-slide-image {
          width: 100%;
          max-width: 100px;
          height: auto;
          min-height: 100px;
          display: block;
          margin: 0 0 30px 0;
          background: #e0e0e0;
          border-radius: 50%;
        }
        .about_us-slide-text {
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.32px;
          line-height: 30px;
          color: #000000cc;
          margin: 0 0 20px 0;
        }

        .about_us-slide-info {
          display: flex;
          flex-direction: column;
          align-items: center;

          .about_us-slide-name {
            font-size: 20px;
            font-weight: 600;
            color: #151515;
            margin: 0 0 10px 0;
          }

          .about_us-slide-status {
            font-size: 16px;
            font-weight: 400;
            color: #2a4696;
          }
        }
      }
    }
  }
}
</style>
