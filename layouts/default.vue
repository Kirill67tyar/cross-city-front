<script setup>
import TheHeader from "~/components/Header/TheHeader.vue";
import TheFooter from "~/components/Footer/TheFooter.vue";

components: TheHeader;
</script>

<template>
  <div class="DefaultLayout">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<style scoped>
.DefaultLayout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
