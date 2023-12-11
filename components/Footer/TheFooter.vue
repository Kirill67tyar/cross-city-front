<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info-wrapper">
        <div class="footer-image-wrapper">
          <img src="@/public/logo.png" alt="logo" class="footer-image" />
        </div>
        <h1 class="footer-image-title">cross taxi</h1>
        <a href="#main-form">
          <span class="footer-anchor-link">Оформить</span>
        </a>
      </div>
      <nav class="footer-nav">
        <ul class="footer-navigation-list">
          <span class="footer-list-title">О компании</span>
          <li class="footer-navigation-item footer-text">
            <a href="/about-us">О нас</a>
          </li>
          <li class="footer-navigation-item footer-text">
            <a href="/careers">Вакансии</a>
          </li>
        </ul>

        <ul class="footer-navigation-list">
          <span class="footer-list-title">Ссылки</span>
          <li class="footer-navigation-item footer-text">
            <a href="/contacts">Связаться с нами</a>
          </li>
          <li class="footer-navigation-item footer-text">
            <a href="/fqo">Часто задаваемые вопросы</a>
          </li>
          <li class="footer-navigation-item footer-text">
            <a href="/city">Города</a>
          </li>
        </ul>

        <div class="footer-contacts-wrapper">
          <span class="footer-list-title">Контакты</span>
          <div class="footer-contacts-info">
            <span class="footer-phone footer-text">+74952302427</span>
            <span class="footer-phone footer-text"
              >CrossCity2000@yandex.ru</span
            >
          </div>
          <ul class="contacts-list">
            <li class="contacts-item">
              <NuxtLink to="https://t.me/GalinaMoscow">
                <div class="contacts-image-wrapper">
                  <img
                    src="../../public/telegram.png"
                    alt="telegram"
                    class="contacts-image"
                  />
                </div>
              </NuxtLink>
            </li>
            <li class="contacts-item">
              <NuxtLink to="https://wa.me/+79255798917">
                <div class="contacts-image-wrapper">
                  <img
                    src="../../public/whatsapp.png"
                    alt="whatsapp"
                    class="contacts-image"
                  />
                </div>
              </NuxtLink>
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
