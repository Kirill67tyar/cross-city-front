<script setup>
useHead({
  title: "Вакансии",
  meta: [
    {
      name: "description",
      content:
        "На нашем сайте Вы можете ознакомиться с вакансиями водителей, или связаться с диспетчером, телефон: +74952302427",
    },
  ],
});
</script>

<template>
  <div>
    <BannerInfo title="Карьера" />
    <SectionCareerInfo />
  </div>
</template>

<style scoped>
@import "@/assets/styles/careers-page/styles.css";
</style>
