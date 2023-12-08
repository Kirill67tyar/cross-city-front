<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
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
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline";

const formProps = defineProps({
  items: Array,
});

const tariffs = formProps.items;
const selected = ref(tariffs[0]);
const visiblePopup = ref(false);
let checkBooleanRef = ref(false);

const mainState = ref({
  name: "",
  phone: "",
  location1: "",
  location2: "",
  tariffState: useParse(selected.value.id),
  date: "",
});

const schema = Yup.object().shape({
  name: Yup.string().required("").min(10).max(100),
  phone: Yup.string().required("").min(10),
  location1: Yup.string().required("").min(10).max(150),
  location2: Yup.string().required("").min(10).max(150),
  date: Yup.string().required("").min(10),
});

const handleSubmit = async ({ resetForm }) => {
  const { data } = await useFetch(
    "https://cross-city-taxi.ru/core/api/orders/create/",
    {
      method: "post",
      body: {
        from_place: mainState.value.location1,
        to_place: mainState.value.location2,
        departure_time: mainState.value.date,
        client: mainState.value.name,
        contact: mainState.value.phone,
        tariff: mainState.value.tariffState,
      },
    }
  ).finally(() => {
    mainState.value.name = "";
    mainState.value.phone = "";
    mainState.value.location1 = "";
    mainState.value.location2 = "";
    selected.value = tariffs[0];
    mainState.value.date = "";
    visiblePopup.value = true;
  });
};

const handleEvent = () => {
  visiblePopup.value = false;
};

watchEffect(() => {
  const { name, phone, location1, location2, date } = mainState.value;

  const isAnyFieldEmpty =
    !name || !phone || !location1 || !location2 || date === "";
  isAnyFieldEmpty ? (checkBooleanRef = false) : (checkBooleanRef = true);
});
</script>

<template>
  <section>
    <PopupSuccessPost v-if="visiblePopup" @customEvent="handleEvent" />
    <Form id="main-form" class="form-wrapper" :validationSchema="schema">
      <h2 class="form-title">Заполните анкету для оформление заказа</h2>
      <div class="form-content-wrapper">
        <div class="mb-4">
          <label for="name" class="input-label">Введите ваше имя</label>
          <div class="input-wrapper">
            <Field
              type="text"
              name="name"
              id="name"
              class="input"
              placeholder="Иван Иванов"
              v-model="mainState.name"
              aria-invalid="false"
            />
            <ErrorMessage name="name">
              <div class="error-input-wrapper">
                <ExclamationCircleIcon
                  class="error-input-icon"
                  aria-hidden="true"
                />
              </div>
            </ErrorMessage>
          </div>
        </div>

        <div class="mb-4">
          <label for="" class="input-label">Введите ваш номер телефона</label>
          <div class="input-wrapper">
            <Field
              type="text"
              name="phone"
              id="phone"
              class="input"
              v-maska
              data-maska="+7-(###)-###-##-##"
              placeholder="+7-(###)-###-##-##"
              v-model="mainState.phone"
              aria-invalid="false"
            />
            <ErrorMessage name="phone">
              <div class="error-input-wrapper">
                <ExclamationCircleIcon
                  class="error-input-icon"
                  aria-hidden="true"
                />
              </div>
            </ErrorMessage>
          </div>
        </div>

        <div class="mb-4">
          <label for="email" class="input-label"
            >Откуда хотите начать поездку</label
          >
          <div class="input-wrapper">
            <Field
              type="text"
              name="location1"
              id="location1"
              class="input"
              placeholder="г.Москва, ул.Пушкина д.10"
              v-model="mainState.location1"
              aria-invalid="false"
            />
            <ErrorMessage name="location1">
              <div class="error-input-wrapper">
                <ExclamationCircleIcon
                  class="error-input-icon"
                  aria-hidden="true"
                />
              </div>
            </ErrorMessage>
          </div>
        </div>

        <div class="mb-4">
          <label for="email" class="input-label">Куда вы хотите поехать</label>
          <div class="input-wrapper">
            <Field
              type="text"
              name="location2"
              id="location2"
              class="input"
              placeholder="г.Москва, ул.Пушкина д.15"
              v-model="mainState.location2"
              aria-invalid="false"
            />
            <ErrorMessage name="location2">
              <div class="error-input-wrapper">
                <ExclamationCircleIcon
                  class="error-input-icon"
                  aria-hidden="true"
                />
              </div>
            </ErrorMessage>
          </div>
        </div>

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
                      active ? 'text-white bg-[#2a4696]' : 'text-gray-900',
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
                        active ? 'text-white' : 'text-[#2a4696]',
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
        <button
          class="main-form-button"
          type="button"
          @click.prevent="handleSubmit"
          :disabled="!checkBooleanRef"
        >
          отправить
        </button>
      </div>
    </Form>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>
