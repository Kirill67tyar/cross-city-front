<script setup>
useHead({
  title: "О компании «Кросс сити такси»",
  meta: [
    {
      name: "description",
      content:
        "Кросс сити такси» предоставляет междугородние перевозки с огромным выбором машин, от легковых до микроавтобусов, и заботится о том, чтобы Ваша поездка была комфортной",
    },
  ],
});
</script>

<template>
  <div>
    <BannerInfo title="О нас" />
    <SectionAboutUsInfo />
    <section class="about_us-section bg-[#2a4696]">
      <ListsServices />
    </section>
    <SectionAboutUsWork />
    <SliderAboutUs />
  </div>
</template>

<style>
@import "@/assets/styles/about-us-page/styles.css";
</style>
