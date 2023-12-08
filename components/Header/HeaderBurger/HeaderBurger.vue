<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import navigation from "~/constants/header-navigation";

const handleClickBurgerItems = (e) => {
  e.preventDefault();

  console.log(e);
};
</script>

<template>
  <Disclosure as="div" class="sm:hidden">
    <DisclosureButton class="fixed top-[13px] right-[2px] z-60">
      <Bars3Icon class="w-8 h-8 stroke-white" />
    </DisclosureButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-x-95 opacity-0"
      enter-to-class="transform scale-x-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-x-100 opacity-100"
      leave-to-class="transform scale-x-95 opacity-0"
    >
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
          <DisclosureButton>
            <a :href="to">{{ name }}</a>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<style scoped>
@import "./styles.css";
</style>
