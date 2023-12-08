<script setup lang="ts">
import { Disclosure, DisclosurePanel } from "@headlessui/vue";
import navigation from "~/constants/header-navigation";
</script>

<template>
  <Disclosure as="nav" class="header-navigation sm:flex">
    <ul class="navigation-list">
      <li
        class="navigation-item"
        :id="id"
        v-for="{ id, name, to } in navigation"
        :key="id"
      >
        <a :href.prevent="to">{{ name }}</a>
      </li>
    </ul>
  </Disclosure>
</template>

<style scoped>
@import "./styles.css";
</style>
