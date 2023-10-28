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
  <main class="main contacts-main">
    <TheInfoBanner title="Контакты" />
    <div class="container contacts-container">
      <div class="contacts-info-wrapper">
        <h2 class="contacts-info-title">Информация о контактах</h2>
        <p class="contacts-info-text">
          Lorem ipsum, dolor sit amet consectetur adip.
        </p>
        <ul class="contacts-list">
          <li class="contacts-item">
            <span class="contacts-item-text">@telegram</span>
          </li>
          <li class="contacts-item">
            <span class="contacts-item-text">email</span>
          </li>
          <li class="contacts-item">
            <span class="contacts-item-text">@whatsapp</span>
          </li>
        </ul>
      </div>
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
          <button class="contacts-button">Отправить</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contacts-main {
  .contacts-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: normal;
    padding: 85px 50px;
    background-color: #fff;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    position: relative;

    &::before {
      content: "";
      width: 100%;
      max-width: 500px;
      height: auto;
      min-height: 100%;
      background-color: #2a4696;
      position: absolute;
      top: 0;
      left: 0px;
      z-index: 0;
    }

    .contacts-info-wrapper {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      z-index: 1;

      .contacts-info-title {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 30px 0;
        color: #fff;
      }

      .contacts-info-text {
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 40px 0;
        color: #fff;
      }

      .contacts-list {
        display: flex;
        flex-direction: column;

        .contacts-item {
          width: 100%;
          display: flex;
          justify-content: start;
          margin: 0 0 20px 0;
          padding: 0 0 0 15px;

          .contacts-item-text {
            font-size: 18px;
            font-weight: 400;
            color: #fff;
          }
        }
      }
    }

    .contacts-form-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      .contacts-form-title {
        font-size: 28px;
        font-weight: 600;
        margin: 0 0 30px 0;
      }

      .contacts-form {
        width: 100%;
        min-height: 500px;
        display: flex;
        flex-wrap: wrap;
        padding: 20px 40px;
        background-color: #f9f8f8;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        .contacts-form-label {
          display: flex;
          flex-direction: column;
          margin: 0 60px 0 0;

          &:nth-child(2),
          &:nth-child(3) {
            margin: 0;
          }
          .label-info {
            display: block;
            font-size: 17px;
            font-weight: 600;
            color: black;
            margin: 0 0 20px 0;
          }
          .contacts-input {
            width: 350px;
            min-width: none;
            height: auto;
            min-height: 55px;
            display: block;
            padding: 15px 26px;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            background-color: #ffffff;
            border: 1px solid #ebebeb;
            border-radius: 4px;
          }

          .contacts-textarea {
            width: 760px;
            height: 185px;
            min-height: 55px;
            max-height: 315px;
            display: block;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            padding: 15px 26px;
            background-color: #ffffff;
            border: 1px solid #ebebeb;
            border-radius: 4px;
            resize: none;
          }
        }
      }

      .contacts-button {
        width: 100%;
        max-width: 350px;
        max-height: 56px;
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
        padding: 17px 35px;
        margin: 40px 0 0 0;
        background-color: #09b294;
        border: 1px solid #09b294;
        border-radius: 4px;
      }
    }
  }
}
</style>
