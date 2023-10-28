<script>
export default {
  name: "TheFooter",
};
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info-wrapper">
        <div class="footer-image-wrapper">
          <img src="../public/taxi.png" alt="" class="footer-image" />
          <span class="footer-image-title">cross taxi</span>
        </div>
        <p class="footer-info-text text">
          Enim sit laboris velit sit sit. Qui nulla proident elit magna occaecat
          velit.
        </p>
        <span class="footer-anchor-link">Оформить</span>
      </div>
      <nav class="footer-nav">
        <ul class="footer-navigation-list">
          <span class="footer-list-title">О компании</span>
          <li class="footer-navigation-item text">
            <NuxtLink to="/about-us">О нас</NuxtLink>
          </li>
          <li class="footer-navigation-item text">Карьера</li>
          <li class="footer-navigation-item text">Отзывы</li>
        </ul>

        <ul class="footer-navigation-list">
          <span class="footer-list-title">Ссылки</span>
          <li class="footer-navigation-item text">Сервис</li>
          <li class="footer-navigation-item text">Связаться с нами</li>
          <li class="footer-navigation-item text">
            <NuxtLink to="/fqo">FAQ</NuxtLink>
          </li>
        </ul>

        <div class="footer-contacts-wrapper">
          <span class="footer-list-title">Контакты</span>
          <div class="footer-contacts-info">
            <span class="footer-email text">email</span>
            <span class="footer-phone text">phone</span>
          </div>
          <ul class="contacts-list">
            <li class="contacts-item">
              <img
                src="../public/telegram.png"
                alt="telegram"
                class="contacts-image"
              />
            </li>
            <li class="contacts-item">
              <img src="../public/mail.png" alt="mail" class="contacts-image" />
            </li>
            <li class="contacts-item">
              <img
                src="../public/whatsapp.png"
                alt="whatsapp"
                class="contacts-image"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  flex-grow: 0;
  background: #fff;
  padding: 70px 23px;

  .footer-container {
    width: 100%;
    display: flex;

    .text {
      font-size: 14px;
      font-weight: 400;
    }

    .footer-list-title {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 10px 0;
    }

    .footer-info-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 50px 0 0;
      .footer-image-wrapper {
        width: 100%;
        max-width: 50px;
        display: flex;
        align-items: center;
        margin: 0 0 10px 0;
        .footer-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 10px 0 0;
        }
        .footer-image-title {
          font-size: 16px;
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
        }
      }
      .footer-info-text {
        width: 100%;
        max-width: 250px;
        line-height: 20px;
        margin: 0 0 10px 0;
      }

      .footer-anchor-link {
        width: 100%;
        max-width: 140px;
        height: auto;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #000;
        border-radius: 5px;
        background: transparent;
      }
    }

    .footer-nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .footer-navigation-list {
        max-width: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .footer-navigation-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-basis: 30%;
          white-space: nowrap;
          margin: 0.5em;
        }
      }
    }
    .footer-contacts-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .footer-contacts-info {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0 0 20px 0;
      }
      .contacts-list {
        width: 100%;
        display: flex;

        .contacts-item {
          width: 100%;
          max-width: 30px;
          height: auto;
          min-height: 30px;
          display: flex;
          flex-basis: 30%;
          border-radius: 50%;
          margin: 0 10px;

          .contacts-image {
            width: 100%;
            min-height: 100%;
            display: block;
          }
        }
      }
    }
  }
}
</style>
