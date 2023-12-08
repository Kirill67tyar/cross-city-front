<script setup>
import gsap from "gsap";
import SplitTextJS from "split-text-js";

const flippingFunc = () => {
  const titles = gsap.utils.toArray("p");
  const tl = gsap.timeline();

  titles.forEach((title) => {
    const splitTitle = new SplitTextJS(title);

    tl.from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
      },
      "<"
    ).to(
      splitTitle.chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.02,
      },
      "<1"
    );
  });
};

onMounted(() => {
  return flippingFunc();
});
</script>

<template>
  <div class="flipping-text-container">
    <div class="flipping-wrapper">
      <p class="flipping-text">1</p>
      <p class="flipping-text">2</p>
      <p class="flipping-text">3</p>
      <p class="flipping-text">4</p>
      <p class="flipping-text">5</p>
      <p class="flipping-text">6</p>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
