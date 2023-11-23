<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import MainInput from "~/components/Input/MainInput/MainInput.vue";

const formProps = defineProps({
  items: Array,
});

const tariffs = formProps.items;

const selected = ref(tariffs[0]);

const mainState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  tariffState: "",
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

        <!--Tailwind select-->

        <Listbox as="div" v-model="selected" class="mb-5">
          <ListboxLabel class="list-box-label">Выберете тариф</ListboxLabel>
          <div class="selected-button-wrapper">
            <ListboxButton class="list-box-button">
              <span class="list-box-selected">{{ selected.car_class }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions class="list-box-options">
                <ListboxOption
                  as="template"
                  v-for="tariff in tariffs"
                  :key="tariff.id"
                  :value="tariff"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ tariff.car_class }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <DatePicker
        v-model="mainState.date"
        mode="dateTime"
        is24hr
        class="mb-5"
      />
      <div class="button-wrapper">
        <button class="main-form-button" type="submit">отправить</button>
      </div>
    </Form>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
