<script setup>
import flippingFunc from "@/helpers/flipping";
const textArray = ["text 1", "text 2", "text 3", "text 4", "text 5"];

onMounted: () => {
  return flippingFunc();
};
</script>

<template>
  <div class="flipping-text-container">
    <div class="flipping-wrapper">
      <p
        class="flipping-text"
        :ref="textRef"
        v-for="item in textArray"
        :key="item"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
