<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import navigation from "~/constants/header-navigation";
</script>

<template>
  <Disclosure as="div" class="sm:hidden">
    <DisclosureButton class="fixed top-[13px] right-[2px] z-60">
      <Bars3Icon class="w-8 h-8 stroke-white" />
    </DisclosureButton>

    <transition>
      <DisclosurePanel class="burger-panel-wrapper">
        <DisclosureButton class="fixed top-[13px] right-[2px] z-60">
          <XMarkIcon class="w-8 h-8 stroke-black" />
        </DisclosureButton>

        <div
          class="burger-navigation-item"
          :id="id"
          v-for="{ id, name, to } in navigation"
          :key="id"
        >
          <NuxtLink :to="to">{{ name }}</NuxtLink>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<style scoped>
@import "./styles.css";
</style>
