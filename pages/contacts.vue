<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("*"),
  mail: Yup.string().required("*"),
  message: Yup.string().required("*"),
  phone: Yup.string().required("*"),
});

const fields = [
  {
    label: "Your Name",
    name: "name",
    as: "input",
    placeholder: "Введите имя",
    class: "contacts-input",
  },
  {
    label: "Your mail",
    name: "mail",
    as: "input",
    placeholder: "Введите почту",
    class: "contacts-input",
  },
  {
    label: "Your Message",
    name: "message",
    as: "textarea",
    placeholder: "Введите сообщение",
    class: "contacts-textarea",
  },
  {
    label: "Your Phone",
    name: "phone",
    as: "input",
    placeholder: "Введите номер",
    class: "contacts-input",
  },
];
</script>

<template>
  <section class="contacts-section">
    <BannerInfo title="Контакты" />
    <div class="contacts-wrapper">
      <div class="contacts-info-wrapper">
        <h2 class="contacts-info-title">Информация о контактах</h2>
        <p class="contacts-info-text">
          Lorem ipsum, dolor sit amet consectetur adip.
        </p>
        <ListsContacts />
      </div>
      <FormContacts />
    </div>
  </section>
</template>

<style scoped>
@import "../assets/styles/contacts-page/styles.css";
</style>
