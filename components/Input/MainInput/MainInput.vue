<script setup lang="ts">
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  type: string;
  value: string;
  name: string;
  placeholder: string;
  labelName: string;
}>();

const propsItem = useParse(props);

// console.log(propsItem);
</script>

<template>
  <div class="mb-4">
    <label :for="propsItem.name" class="input-label">{{ labelName }}</label>
    <div class="input-wrapper">
      <input
        :type="propsItem.type"
        :name="propsItem.name"
        :id="propsItem.name"
        class="input"
        :placeholder="propsItem.placeholder"
        v-model="propsItem.value"
        aria-invalid="false"
      />
      <!-- <div class="error-input-wrapper">
        <ExclamationCircleIcon class="error-input-icon" aria-hidden="true" />
      </div> -->
    </div>
    <!-- <p class="error-input-text" id="email-error">
      Вы ввели некорректные данные
    </p> -->
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
