<script setup lang="ts">
import useActive from "~/composables/useActive/useActive";

const { handleClickActive } = useActive("");

const items = [
  {
    id: "0",
    title: "Title 0",
    text: "Sit non occaecat tempor in cillum id eu et excepteur id incididunt quis et esse. amet esse consectetur aliquip. Laborum incididunt ea ad ad ex eu.",
  },
  {
    id: "1",
    title: "Title 1",
    text: "Sit non occaecat tempor in cillum id eu et excepteur id incididunt quis et esse. amet esse consectetur aliquip. Laborum incididunt ea ad ad ex eu.",
  },
  {
    id: "2",
    title: "Title 2",
    text: "Sit non occaecat tempor in cillum id eu et excepteur id incididunt quis et esse. amet esse consectetur aliquip. Laborum incididunt ea ad ad ex eu.",
  },
  {
    id: "3",
    title: "Title 3",
    text: "Sit non occaecat tempor in cillum id eu et excepteur id incididunt quis et esse. amet esse consectetur aliquip. Laborum incididunt ea ad ad ex eu.",
  },
];
</script>

<template>
  <main class="fqo-main main">
    <TheInfoBanner title="fqo" />
    <div class="fqo-container container">
      <ul class="fqo-list">
        <li
          class="fqo-item"
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          @click="(e: any) => handleClickActive(e)"
        >
          <span class="fqo-item-arrow"></span>
          <h3 class="fqo-item-title">{{ item.title }}</h3>
          <p class="fqo-item-text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.fqo-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .fqo-item {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
    padding: 35px 80px 35px 45px;
    background: transparent;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    position: relative;

    .fqo-item-arrow {
      width: 18px;
      height: 18px;
      background-image: url("@/public/arrow.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      pointer-events: none;
      position: absolute;
      top: 40px;
      right: 20px;
    }

    &:last-child {
      margin: 0;
    }
    .fqo-item-title {
      width: 100%;
      display: block;
      font-size: 22px;
      font-weight: 600;
      color: #2c343b;
      margin: 0 0 40px 0;
      pointer-events: none;
    }

    .fqo-item-text {
      width: 100%;
      height: 0;
      display: block;
      font-size: 22px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.025em;
      pointer-events: none;
      opacity: 0;
    }
  }
}
</style>
~/composables/useActive
