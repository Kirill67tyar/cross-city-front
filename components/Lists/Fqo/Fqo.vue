<script setup>
import fqoItems from "@/constants/fqo";
import useActive from "~/composables/useActive/useActive";

const { handleClickActive } = useActive("");
</script>

<template>
  <ul class="fqo-list">
    <li
      class="fqo-item"
      v-for="item in fqoItems"
      :id="item.id"
      :key="item.id"
      @click="(e) => handleClickActive(e)"
    >
      <span class="fqo-item-arrow"></span>
      <h3 class="fqo-item-title">{{ item.title }}</h3>
      <p class="fqo-item-text">{{ item.text }}</p>
    </li>
  </ul>
</template>

<style scoped>
@import "./styles.css";
</style>
