<script setup>
import TheHeader from "~/components/Header/TheHeader.vue";
import TheFooter from "~/components/Footer/TheFooter.vue";
</script>

<template>
  <div class="DefaultLayout">
    <TheHeader/>
    <div id="anchor"/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<style scoped>
@import "styles.css";
</style>
