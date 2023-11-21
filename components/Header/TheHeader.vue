<script setup>
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.vue";
import HeaderBurger from "./HeaderBurger/HeaderBurger.vue";
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-info-container">
        <div class="header-image-wrapper">
          <img src="../../public/taxi.png" class="header-image" alt="icon" />
        </div>
        <h1 class="header-title">cross taxi</h1>
      </div>
      <HeaderNavigation />
      <HeaderBurger />
      <div class="phone-link-wrapper">
        <NuxtLink href="tel:+79857356401" class="phone-link after:content-['']"
          >Позвонить</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "./styles.css";
</style>
