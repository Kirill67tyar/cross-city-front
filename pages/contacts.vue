<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

useHead({
  title: "Контактная информация",
  meta: [
    {
      name: "description",
      content: "Заказ такси круглосуточно, телефон: +74952302427",
    },
  ],
});

const schema = Yup.object().shape({
  name: Yup.string().required("*"),
  mail: Yup.string().required("*"),
  message: Yup.string().required("*"),
  phone: Yup.string().required("*"),
});
</script>

<template>
  <section class="contacts-section">
    <BannerInfo title="Контакты" />
    <div class="contacts-wrapper">
      <div class="contacts-info-wrapper">
        <h2 class="contacts-info-title">Информация о контактах</h2>
        <ListsContacts />
      </div>
      <FormContacts />
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/styles/contacts-page/styles.css";
</style>
