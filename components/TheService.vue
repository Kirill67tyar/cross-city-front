<script setup lang="ts"></script>

<template>
  <div class="service-container">
    <h2 class="service-title">О сервисе</h2>
    <ul class="service-list">
      <li class="service-item" v-for="item in 3">
        <div class="service-image-wrapper"></div>
        <div class="service-info-wrapper">
          <h4 class="service-info-title">Title {{ item }}</h4>
          <p class="service-info-text">
            Adipisicing est nostrud deserunt nostrud in sint deserunt.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.service-container {
  width: 100%;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 100px 30px;
  margin: 0 0 80px 0;
  background: #2a4696;

  .service-title {
    display: block;
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 50px 0;
  }

  .service-list {
    width: 100%;
    display: flex;
    justify-content: center;
    background: transparent;

    .service-item {
      min-height: 350px;
      display: flex;
      flex-basis: 30%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 13px 23px;
      margin: 0 20px 0 0;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

      &:last-child {
        margin: 0;
      }

      .service-image-wrapper {
        width: 100%;
        height: auto;
        max-width: 88px;
        min-height: 88px;
        display: block;
        background-color: #e0e0e0;
        margin: 0 0 40px 0;
      }

      .service-info-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .service-info-title {
          display: block;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 20px 0;
        }

        .service-info-text {
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
        }
      }
    }
  }
}
</style>
