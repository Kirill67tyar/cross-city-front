<script setup lang="ts"></script>

<template>
  <div class="question-container">
    <h3 class="question-title">Questions</h3>
    <ul class="question-list">
      <li class="question-item" v-for="item in 3">
        <div class="question-info-wrapper">
          <div class="question-user-image-wrapper">
            <img
              src="../public/user.png"
              alt="user"
              class="question-user-image"
            />
          </div>
          <div class="question-user-info-wrapper">
            <h3 class="user-name">user name {{ item }}</h3>
            <span class="user-status">user status</span>
          </div>
        </div>
        <div class="question-text-wrapper">
          <p class="question-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. {{ item }}
          </p>
          <span class="question-date">date {{ item }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.question-container {
  width: 100%;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 100px 30px;
  background: #2a4696;

  .question-title {
    display: block;
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 50px 0;
  }

  .question-list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 13px 23px;
    background: transparent;

    .question-item {
      min-height: 300px;
      display: flex;
      flex-basis: 33%;
      flex-direction: column;
      align-items: center;
      margin: 0 20px 0 0;
      background: #fff;
      border-radius: 9px;

      &:last-child {
        margin: 0;
      }

      .question-info-wrapper {
        width: 100%;
        display: flex;
        padding: 30px 30px 20px 45px;
        border-bottom: 1px solid #ebebeb;

        .question-user-image-wrapper {
          width: 100%;
          max-width: 74px;
          height: auto;
          min-height: 74px;
          display: block;
          margin: 0 10px 0 0;
          background: #fefefe;
          box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
          border-radius: 50%;

          .question-user-image {
            width: 100%;
            max-width: 100%;
            height: auto;
            min-height: 100%;
            display: block;
          }
        }

        .question-user-info-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .user-name {
            display: block;
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 10px 0;
          }

          .user-status {
            display: block;
            font-size: 18px;
            font-weight: 400;
            color: #2a4696;
          }
        }
      }

      .question-text-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px 30px 20px 45px;

        .question-text,
        .question-date {
          display: block;
          font-size: 16px;
          font-weight: 400;
        }

        .question-text {
          line-height: 24px;
          margin: 0 0 20px 0;
        }

        .question-date {
          display: block;
        }
      }
    }
  }
}
</style>
