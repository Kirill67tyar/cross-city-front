<script setup>
import questions from "~/constants/questions";
</script>

<template>
  <div class="question-section">
    <h3 class="question-title">Отзывы</h3>
    <ul class="question-list">
      <li
        class="question-item"
        v-for="{ id, name, description, date } in questions"
      >
        <div class="question-info-wrapper">
          <div class="question-user-info-wrapper">
            <h3 class="user-name">{{ name }}</h3>
            <span class="user-status">Пользователь</span>
          </div>
        </div>
        <div class="question-text-wrapper">
          <p class="question-text">
            {{ description }}
          </p>
          <span class="question-date">{{ date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
