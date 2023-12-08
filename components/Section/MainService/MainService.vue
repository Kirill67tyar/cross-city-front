<script setup></script>

<template>
  <section class="service-section">
    <h2 class="service-title">О сервисе</h2>
    <ul class="service-list">
      <li class="service-item" id="0" key="0">
        <div class="service-image-wrapper">
          <img
            src="@/public/services/route.png"
            alt="services"
            class="service-image"
          />
        </div>
        <div class="service-info-wrapper">
          <h4 class="service-info-title">Междугородние поездки</h4>
        </div>
      </li>
      <li class="service-item" id="1" key="1">
        <div class="service-image-wrapper">
          <img
            src="@/public/services/plane-alt.png"
            alt="services"
            class="service-image"
          />
        </div>
        <div class="service-info-wrapper">
          <h4 class="service-info-title">Такси в аэропорт</h4>
        </div>
      </li>
      <li class="service-item" id="2" key="2">
        <div class="service-image-wrapper">
          <img
            src="@/public/services/suitcase-alt.png"
            alt="services"
            class="service-image"
          />
        </div>
        <div class="service-info-wrapper">
          <h4 class="service-info-title">Доставка багажа</h4>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
