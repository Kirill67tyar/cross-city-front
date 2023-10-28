<script setup lang="ts">
const cities = [
  "Архангельск",
  "Астрахань",
  "Белгород",
  "Брянск",
  "Великий Новгород",
  "Владимир",
  "Волгоград",
  "Вологда",
  "Воронеж",
  "Донецк",
  "Иваново",
  "Казань",
  "Калуга",
  "Киров",
  "Кострома",
  "Краснодар",
  "Курск",
  "Липецк",
  "Минск",
  "Нижний Новгород",
  "Орёл",
  "Осташков",
  "Пенза",
  "Петрозаводск",
  "Псков",
  "Ростов-на-Дону",
  "Рязань",
  "Самара",
  "Санкт-Петербург",
  "Саранск",
  "Саратов",
  "Смоленск",
  "Суздаль",
  "Тамбов",
  "Тверь",
  "Тула",
  "Уфа",
  "Чебоксары",
  "Ярославль",
];
</script>

<template>
  <main class="city-main main">
    <div class="container city-container">
      <ul class="city-list">
        <li class="city-item" v-for="name in cities" :id="name">
          <span class="city-name">{{ name }}</span>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.city-main {
  margin: 100px 0 0 0;

  .city-container {
    align-items: center;
    justify-content: center;
  }

  .city-list {
    width: 100%;
    max-height: 635px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
    .city-item {
      display: flex;
      flex-basis: 33%;
      justify-content: center;
      padding: 5px 0;
      margin: 0 0 10px 0;

      .city-name {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>
