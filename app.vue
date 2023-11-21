<script>
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/TheFooter";
import global from "./assets/styles/global.css";

export default {
  components: { TheFooter, TheHeader },
};
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style></style>
