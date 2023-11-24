<script setup>
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
    label: "Your Phone",
    name: "phone",
    as: "input",
    placeholder: "Введите номер",
    class: "contacts-input",
  },
  {
    label: "Your Message",
    name: "message",
    as: "textarea",
    placeholder: "Введите сообщение",
    class: "contacts-textarea",
  },
];
</script>

<template>
  <div class="contacts-form-wrapper">
    <h2 class="contacts-form-title">Отправить обращение</h2>
    <form class="contacts-form">
      <label
        class="contacts-form-label"
        v-for="field in fields"
        :key="field.name"
      >
        <span class="label-info">{{ field.label }}</span>
        <Field
          :as="field.as"
          :id="field.name"
          :name="field.name"
          :placeholder="field.placeholder"
          :class="field.class"
        />
      </label>
      <div class="contacts-button-wrapper">
        <button class="contacts-button">Отправить</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
