<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline";

const contactsState = ref({
  name: "",
  phone: "",
  mail: "",
  message: "",
});

const schema = Yup.object().shape({
  name: Yup.string().required("").min(10).max(50),
  phone: Yup.string().required("").min(10),
  mail: Yup.string().email().required("").min(10).max(50),
  message: Yup.string().required("").min(30).max(250),
});

const visiblePopup = ref(false);
let checkBooleanRef = ref(false);

const handleSubmit = async () => {
  const { data } = await useFetch(
    "https://cross-city-taxi.ru/core/api/feedback/create/",
    {
      method: "post",
      body: {
        name: contactsState.value.name,
        phone_number: contactsState.value.phone,
        mail: contactsState.value.mail,
        message: contactsState.value.message,
      },
    }
  ).finally(() => {
    contactsState.value.name = "";
    contactsState.value.phone = "";
    contactsState.value.mail = "";
    contactsState.value.message = "";

    visiblePopup.value = true;
  });
};

const handleEvent = () => {
  visiblePopup.value = false;
};

watchEffect(() => {
  const { name, phone, mail, message } = contactsState.value;

  const isAnyFieldEmpty = !name || !phone || !mail || !message === "";
  isAnyFieldEmpty ? (checkBooleanRef = false) : (checkBooleanRef = true);
});
</script>

<template>
  <div class="contacts-form-wrapper">
    <PopupSuccessPost v-if="visiblePopup" @customEvent="handleEvent" />
    <h2 class="contacts-form-title">Отправить обращение</h2>
    <Form class="contacts-form" :validationSchema="schema">
      <label class="contacts-form-label" key="name">
        <span class="label-info">Ваше имя</span>
        <Field
          id="name"
          name="name"
          placeholder="Введите имя"
          class="contacts-input"
          v-model="contactsState.name"
        />

        <ErrorMessage name="name">
          <div class="error-input-wrapper">
            <ExclamationCircleIcon
              class="error-input-icon"
              aria-hidden="true"
            />
          </div>
        </ErrorMessage>
      </label>
      <label class="contacts-form-label" key="phone">
        <span class="label-info">Ваш номер телефона</span>
        <Field
          id="phone"
          name="phone"
          class="contacts-input"
          v-maska
          data-maska="+7-(###)-###-##-##"
          placeholder="+7-(###)-###-##-##"
          v-model="contactsState.phone"
        />

        <ErrorMessage name="phone">
          <div class="error-input-wrapper">
            <ExclamationCircleIcon
              class="error-input-icon"
              aria-hidden="true"
            />
          </div>
        </ErrorMessage>
      </label>
      <label class="contacts-form-label" key="mail-label">
        <span class="label-info">Email</span>
        <Field
          id="mail"
          name="mail"
          placeholder="Введите почту"
          class="contacts-input"
          v-model="contactsState.mail"
        />

        <ErrorMessage name="mail">
          <div class="error-input-wrapper">
            <ExclamationCircleIcon
              class="error-input-icon"
              aria-hidden="true"
            />
          </div>
        </ErrorMessage>
      </label>
      <label class="contacts-form-label" key="message-label">
        <span class="label-info">Обращение</span>
        <Field
          as="textarea"
          id="message"
          name="message"
          placeholder="Введите сообщение"
          class="contacts-textarea"
          v-model="contactsState.message"
        />
        <span class="textarea-max-text"
          >максимальное количество 250 символов</span
        >
      </label>
      <div class="contacts-button-wrapper">
        <button
          type="button"
          class="contacts-button"
          @click="handleSubmit"
          :disabled="!checkBooleanRef"
        >
          Отправить
        </button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
