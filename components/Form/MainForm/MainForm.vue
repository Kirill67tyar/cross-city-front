<script setup>
import { Form, Field } from "vee-validate";
import { DatePicker } from "v-calendar";
import * as Yup from "yup";
import "v-calendar/style.css";
import MainInput from "~/components/Input/MainInput/MainInput.vue";

const mainState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  date: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("*"),
  phone: Yup.string().required("*"),
  adress: Yup.string().required("*"),
  date: Yup.string().required("*"),
  tariff: Yup.string().required("*"),
});

const handleSubmit = (value) => {
  console.log("onSubmit", value);
};
</script>

<template>
  <section>
    <Form
      class="form-wrapper"
      @submit="handleSubmit"
      v-slot="{ errors }"
      :validationSchema="schema"
    >
      <h2 class="form-title">Заполните анкету для оформление заказа</h2>
      <div class="form-content-wrapper">
        <MainInput
          :type="'text'"
          :value="mainState.name"
          :name="'fullname'"
          :placeholder="`Иван Иванов`"
          :labelName="`Введите ваше Имя`"
        />
        <MainInput
          :type="'text'"
          :value="mainState.email"
          :name="'email'"
          :placeholder="`Введите вашу почту`"
          :labelName="`Введите Email`"
        />
        <MainInput
          :type="'text'"
          :value="mainState.phone"
          :name="'phone'"
          :placeholder="`+79990991111`"
          :labelName="`Введите ваш номер телефона`"
        />
        <MainInput
          :type="'text'"
          :value="mainState.location"
          :name="'location'"
          :placeholder="`Ул.Пушкина д.10`"
          :labelName="`Введите ваш адрес`"
        />
      </div>
      <DatePicker mode="dateTime" is24hr class="mb-5" />
      <div class="button-wrapper">
        <button class="main-form-button" type="submit">отправить</button>
      </div>
    </Form>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
