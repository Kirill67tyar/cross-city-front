<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info-wrapper">
        <div class="footer-image-wrapper">
          <img src="@/public/taxi.png" alt="" class="footer-image" />
          <span class="footer-image-title">cross taxi</span>
        </div>
        <p class="footer-info-text footer-text">
          Enim sit laboris velit sit sit. Qui nulla proident elit magna occaecat
          velit.
        </p>
        <span class="footer-anchor-link">Оформить</span>
      </div>
      <nav class="footer-nav">
        <ul class="footer-navigation-list">
          <span class="footer-list-title">О компании</span>
          <li class="footer-navigation-item footer-text">
            <NuxtLink to="/about-us">О нас</NuxtLink>
          </li>
          <li class="footer-navigation-item footer-text">Карьера</li>
          <li class="footer-navigation-item footer-text">Отзывы</li>
        </ul>

        <ul class="footer-navigation-list">
          <span class="footer-list-title">Ссылки</span>
          <li class="footer-navigation-item footer-text">Сервис</li>
          <li class="footer-navigation-item footer-text">Связаться с нами</li>
          <li class="footer-navigation-item footer-text">
            <NuxtLink to="/fqo">FAQ</NuxtLink>
          </li>
        </ul>

        <div class="footer-contacts-wrapper">
          <span class="footer-list-title">Контакты</span>
          <div class="footer-contacts-info">
            <span class="footer-email footer-text">email</span>
            <span class="footer-phone footer-text">phone</span>
          </div>
          <ul class="contacts-list">
            <li class="contacts-item">
              <div class="contacts-image-wrapper">
                <img
                  src="../../public/telegram.png"
                  alt="telegram"
                  class="contacts-image"
                />
              </div>
            </li>
            <li class="contacts-item">
              <div class="contacts-image-wrapper">
                <img
                  src="../../public/mail.png"
                  alt="mail"
                  class="contacts-image"
                />
              </div>
            </li>
            <li class="contacts-item">
              <div class="contacts-image-wrapper">
                <img
                  src="../../public/whatsapp.png"
                  alt="whatsapp"
                  class="contacts-image"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
@import "./styles.css";
</style>
