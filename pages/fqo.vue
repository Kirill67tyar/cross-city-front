<script setup>
useHead({
  title: "Вопросы и ответы – помощь клиентам такси",
  meta: [
    {
      name: "description",
      content:
          "При офоромлении поездки Вы можете задать любые интересующие вас вопросы диспетчеру, на самые частые из них мы предоставили ответы на сайте",
    },
  ],
});
</script>

<template>
  <section class="fqo-section mb-10">
    <BannerInfo title="Часто задаваемые вопросы"/>
    <div class="fqo-wrapper">
      <ListsFqo/>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/styles/fqo-page/styles.css";
</style>
