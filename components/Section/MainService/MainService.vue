<script setup>
import services from "~/constants/main-service";
</script>

<template>
  <section class="service-section">
    <h2 class="service-title">О сервисе</h2>
    <ul class="service-list">
      <li
        class="service-item"
        :id="id"
        v-for="{ id, img, title, text } in services"
        :key="id"
      >
        <div class="service-image-wrapper"></div>
        <div class="service-info-wrapper">
          <h4 class="service-info-title">{{ title }}</h4>
          <p class="service-info-text">
            {{ text }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
