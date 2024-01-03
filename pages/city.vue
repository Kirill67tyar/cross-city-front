<script setup lang="ts">
useHead({
  title: "Города",
  meta: [
    {
      name: "description",
      content: "Мы осуществляем поездки в города и области по всей России",
    },
  ],
});

const { data } = await useFetch(
  "https://cross-city-taxi.ru/core/api/cities/list/"
);

const cities = useParse(data.value);
</script>

<template>
  <section class="flex flex-grow-[4] mt-24">
    <ListsCities :items="cities" />
  </section>
</template>

<style scoped></style>
