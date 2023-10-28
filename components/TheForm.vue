<script setup lang="ts">
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("*"),
  phone: Yup.string().required("*"),
  adress: Yup.string().required("*"),
  date: Yup.string().required("*"),
  tariff: Yup.string().required("*"),
});

const fields = [
  {
    label: "Your Name",
    name: "name",
    as: "input",
    placeholder: "Введите имя",
  },
  {
    label: "Your Phone",
    name: "phone",
    as: "input",
    placeholder: "Введите номер",
  },
  {
    label: "Your Adress",
    name: "adress",
    as: "input",
    placeholder: "Адрес",
  },
  {
    label: "Your Date",
    name: "date",
    as: "input",
    placeholder: "Выберете дату",
  },
];

const handleSubmit = (value: any) => {
  console.log("onSubmit", value);
};
</script>

<template>
  <Form
    class="form-wrapper"
    @submit="handleSubmit"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <h2 class="form-title">Заполните анкету для оформление заказа</h2>
    <div class="form-content-wrapper">
      <div v-for="field in fields" :key="field.name" class="input-wrapper">
        <div class="form-error">{{ errors.name }}</div>
        <label
          :for="field.name"
          style="color: black; font-size: 17px; font-weight: 600"
          >{{ field.label }}</label
        >
        <Field
          :as="field.as"
          :id="field.name"
          :name="field.name"
          :placeholder="field.placeholder"
          class="input"
        />
      </div>
    </div>
    <div class="button-wrapper">
      <button class="form-button" type="submit">отправить</button>
    </div>
  </Form>
</template>

<style scoped>
.form-wrapper {
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin: 0 0 100px 0;
  z-index: 1;

  .form-title {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    margin: 0 0 50px 0;
  }

  .form-content-wrapper {
    width: 100%;
    max-width: 405px;
    min-height: 210px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-wrap: wrap;
    margin: 0 0 50px 0;
    padding: 0 15px 0 0;

    .form-error {
      color: red;
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;

      .input {
        width: 100%;
        display: block;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        padding: 13px 0 5px 10px;
        margin: 0 0 10px 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid;
        outline: none;
        position: relative;
      }
    }

    .text {
      font-size: 14px;
      font-weight: 400;
      color: #000;
    }

    .user-name {
      background-image: url("../public/user.png");
      background-repeat: no-repeat;
      background-position: left bottom 5px;
      background-size: 18px;
    }

    .user-adress {
      background-image: url("../public/gps-navigation.png");
      background-repeat: no-repeat;
      background-position: left -2px bottom 5px;
      background-size: 20px;
    }

    .user-email {
      background-image: url("../public/email.png");
      background-repeat: no-repeat;
      background-position: left bottom 7px;
      background-size: 16px;
    }

    .sending-time,
    .date {
      background-image: url("../public/clock.png");
      background-repeat: no-repeat;
      background-position: left bottom 7px;
      background-size: 16px;
    }

    .defalut-selected {
      width: 100%;
      padding: 6px 13px;
      background-color: #fff;
      border-bottom: 1px solid;
      position: relative;

      &::after {
        content: "";
        width: 22px;
        height: 22px;
        background-image: url("../public/down-arrow.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        top: 3px;
        right: 0;
      }
    }

    .selected-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      .form-select {
        padding: 5px;
        background-color: #fff;
        border: 1px solid #fafafa;

        .selected-text {
          color: #000;
        }
      }
    }
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
    .form-button {
      max-width: 180px;
      max-height: 60px;
      display: flex;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      padding: 16px 44px;
      color: #ffffff;
      background-color: #09b294;
      border: 1px solid #09b294;
      border-radius: 4px;
      outline: none;
    }
  }
}
</style>
