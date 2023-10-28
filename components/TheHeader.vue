<template>
  <header class="header">
    <div class="header-container">
      <div class="header-info-container">
        <div class="header-image-wrapper">
          <img src="../public/taxi.png" class="header-image" alt="icon" />
        </div>
        <h1 class="header-title">cross taxi</h1>
      </div>
      <nav class="header-navigation">
        <ul class="navigation-list">
          <li class="navigation-item">
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li class="navigation-item">
            <NuxtLink to="/city">Список городов</NuxtLink>
          </li>
          <li class="navigation-item">
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
          <li class="navigation-item">
            <NuxtLink to="/about-us">О нас</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="phone-link-wrapper">
        <NuxtLink href="tel:+79857356401" class="phone-link"
          >Позвонить</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 100px;
  display: flex;
  background: #fff;
  box-shadow: 0 2px 2px -2px #1c1d21;
  padding: 0 40px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  .header-container {
    width: 1440px;
    display: flex;
    margin: 0 auto;
    .header-info-container {
      min-width: 228px;
      display: flex;
      align-items: center;
      margin: 0 40px 0 0;

      .header-image-wrapper {
        width: 40px;
        height: 42px;
        margin: 0 10px 0 0;
        .header-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }
      .header-title {
        font-size: 26px;
        font-weight: 900;
        white-space: nowrap;
        text-transform: uppercase;
      }
    }

    .header-navigation {
      width: 100%;
      display: flex;
      align-items: center;
      .navigation-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .navigation-item {
          display: flex;
          flex-wrap: nowrap;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          margin: 0 10px;
        }
      }
    }
  }

  .phone-link-wrapper {
    display: flex;
    justify-content: center;
    align-self: stretch;
    align-items: center;
    background-color: transparent;
    padding: 12px 0 12px 40px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 58vw;
      background: linear-gradient(227deg, #1e2090 0%, #16389b 100%);
      border-radius: 10px;
      z-index: -1;
      border: 1px solid transparent;
      transform: skewX(-13deg);
    }

    .phone-link {
      min-width: 130px;
      display: block;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      color: #fff;
      padding: 11px 25px;
      border: 1px solid #fff;
      border-radius: 5px;
    }
  }
}
</style>
