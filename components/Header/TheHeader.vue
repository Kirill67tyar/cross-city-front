<script setup>
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.vue";
import HeaderBurger from "./HeaderBurger/HeaderBurger.vue";
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-info-container">
        <div class="header-image-wrapper">
          <a href="/">
            <img src="@/public/logo.png" class="header-image" alt="icon" />
          </a>
        </div>
      </div>
      <HeaderNavigation />
      <HeaderBurger />
      <div class="phone-link-wrapper">
        <NuxtLink href="tel:+74952302427" class="phone-link after:content-['']"
          >Позвонить</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "./styles.css";
</style>
