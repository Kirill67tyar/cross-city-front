<script setup>
const emit = defineEmits(["customEvent"]);

const closeClicked = () => {
  emit("customEvent");
};
</script>

<template>
  <div class="success-popup-container before:content-['']">
    <div class="success-popup-wrapper">
      <span class="success-popup-close" @click="closeClicked">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-6 h-6 stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>

      <p class="success-popup-text">
        Ваше сообщение удачно отправлено, мы свяжемся с Вами в самое ближайшее
        время.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
