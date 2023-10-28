<script setup lang="ts"></script>

<template>
  <main class="about_us-main main">
    <TheInfoBanner title="О нас" />
    <section class="about_us-info-section section">
      <div class="container">
        <div class="about_us-info-wrapper">
          <div class="about_us-info-content">
            <h2 class="about_us-info-title">PROVIDING QUALITY TAXI SERVICES</h2>
            <p class="about_us-info-text">
              Sunt turpises acquirere pius, clemens abactores. Cur vita mori?
              Dexter, secundus caculas callide demitto de fatalis, lotus fortis.
              Rusticus, neuter fugas interdum. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div class="about_us-image-wrapper"></div>
        </div>
      </div>
    </section>
    <section class="about_us-services-section section">
      <div class="about_us-services-container container">
        <ul class="about_us-services-list">
          <li class="about_us-services-item" v-for="item in 6">
            <img src="" class="about_us-services-image" />
            <h4 class="about_us-services-title">Private Driver {{ item }}</h4>
            <p class="about_us-services-text">
              Nunquam captis agripeta. Festus, bassus historias solite talem de
              nobilis, teres. {{ item }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="work-section section">
      <div class="work-container container">
        <div class="work-info-wrapper">
          <h2 class="work-info-title">How we work</h2>
          <p class="work-info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div class="work-info-button-wrapper">
            <button class="work-info-button">Заказать</button>
          </div>
        </div>
        <div class="work-step-wrapper">
          <ul class="work-step-list">
            <li class="work-step-item" v-for="item in 4">
              <div class="work-step-timeline"></div>
              <h4 class="work-step-title">
                <span class="work-step-span">STEP {{ item }}.</span>Choose a
                pickup address
              </h4>
              <p class="work-step-text">
                Pellentesque placerat eros ac finibus congue. Integer
                consectetur, lorem nec accumsan commodo, sem mauris
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <TheAboutUsSlider />
  </main>
</template>

<style>
.about_us-main {
  .section {
    width: 100%;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    margin: 0 0 50px 0;
  }
  .about_us-info-section {
    width: 100%;
    padding: 50px 30px;
    background: #fff;

    .about_us-info-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .about_us-info-content {
        width: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        .about_us-info-title {
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 30px 0;
        }
        .about_us-info-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0.32px;
          margin: 0 0 40px 0;
        }
      }
      .about_us-image-wrapper {
        width: 100%;
        max-width: 500px;
        height: auto;
        min-height: 300px;
        display: flex;
        background: #e0e0e0;
        border-radius: 5px;
      }
    }
  }
  .about_us-services-section {
    width: 100%;
    height: auto;
    min-height: 600px;
    display: flex;
    padding: 70px 0;
    background: #2a4696;

    .about_us-services-container {
      justify-content: center;

      .about_us-services-list {
        width: 100%;
        max-width: 1000px;
        height: auto;
        min-height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 5px 10px 2px rgba(255, 255, 255, 0.2);
      }
      .about_us-services-item {
        width: 100%;
        max-width: 315px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 22px;
        background: transparent;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;

        &:nth-child(3),
        &:nth-child(6) {
          border-right: none;
        }

        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          border-bottom: none;
        }

        .about_us-services-image {
          width: 100%;
          max-width: 88px;
          height: auto;
          min-height: 88px;
          display: block;
          margin: 0 0 30px 0;
          background: #e0e0e0;
        }

        .about_us-services-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 30px 0;
        }

        .about_us-services-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0.32px;
          padding: 0 0 0 25px;
        }
      }
    }
  }
  .work-section {
    width: 100%;
    height: auto;
    min-height: 800px;
    display: flex;
    padding: 0 30px;
    background: #fff;
    .work-container {
      flex-direction: row;
      align-items: normal;
      justify-content: space-between;
      .work-info-wrapper {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        padding: 100px 0 100px 60px;

        .work-info-title {
          font-size: 37px;
          font-weight: 700;
          color: #151515;
          margin: 0 0 25px 0;
        }
        .work-info-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 0 0 20px 0;
        }
        .work-info-button-wrapper {
          width: 100%;
          max-width: 175px;
          height: auto;
          min-height: 53px;
          display: flex;
          justify-content: start;
          .work-info-button {
            width: 100%;
            display: block;
            font-size: 14;
            font-weight: 600;
            color: #fff;
            padding: 17px 35px;
            background-color: #09b294;
            border: 1px solid #09b294;
            border-radius: 5px;
            outline: none;
          }
        }
      }
      .work-step-wrapper {
        width: 100%;
        max-width: 670px;
        display: flex;
        .work-step-list {
          display: flex;
          flex-direction: column;
          padding: 60px 0 100px 85px;
          border-left: 1px solid #ebebeb;
          .work-step-item {
            display: flex;
            flex-direction: column;
            margin: 44px 0 0 0;
            padding: 0 0 44px 0;
            border-bottom: 1px solid #ebebeb;
            position: relative;

            &:last-child {
              padding: 0;
              border: none;
            }

            &::before {
              content: "";
              width: 18px;
              height: 18px;
              background: #2a4696;
              border: 1px solid #fff;
              border-radius: 50%;
              position: absolute;
              top: 32px;
              right: 659px;
              z-index: 2;
            }

            &::after {
              content: "";
              width: 30px;
              height: 30px;
              background: #2a4696;
              border-radius: 50%;
              opacity: 0.5;
              position: absolute;
              top: 27px;
              right: 654px;
              z-index: 1;
            }
            .work-step-title {
              font-size: 20px;
              font-weight: 600;
              color: #151515;
              margin: 0 0 20px 0;

              .work-step-span {
                color: #2a4696;
                margin: 0 5px 0 0;
              }
            }
            .work-step-text {
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              color: #151515;
            }
          }
        }
      }
    }
  }
}
</style>
