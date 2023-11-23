<script setup lang="ts">
import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  type: string;
  value: string;
  name: string;
  placeholder: string;
  labelName: string;
}>();
</script>

<template>
  <div class="mb-4">
    <label for="email" class="input-label">{{ labelName }}</label>
    <div class="input-wrapper">
      <input
        :type="type"
        :name="name"
        :id="name"
        class="input"
        :placeholder="placeholder"
        :value="value"
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
