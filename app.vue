<script setup>
import TheHeader from "~/components/Header/TheHeader.vue";
import TheFooter from "~/components/Footer/TheFooter";

const nuxtApp = useNuxtApp();
const loading = ref(false);

const handlePageStart = () => {
  loading.value = true;
};

const handlePageFinish = () => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

onMounted(() => {
  nuxtApp.hook("page:start", handlePageStart());
  nuxtApp.hook("page:finish", handlePageFinish());
});

components: {
  TheFooter, TheHeader;
}
</script>
<template>
  <div>
    <NuxtLayout>
      <Loader v-if="loading" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "@/assets/styles/global.css";
</style>
