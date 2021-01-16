<template>
  <div class="footer">
    <div class="container">
      <div class="footer__content">
        <p class="footer__content-infos">
          Lola Gauchet - Développeuse Front-End - Nantes -
          lola.gauchet@gmail.com
        </p>
        <p class="footer__content-copyright">
          Fait avec
          <a href="https://fr.nuxtjs.org/" target="_blank"> NuxtJs </a>
          | Copyright © 2020 Lola Gauchet | All rights reserved
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $background;
  margin-top: 60px;
  padding: 24px 0;
  &__content {
    font-weight: 300;
    text-align: center;
    &-infos {
      font-size: 14px;
    }
    &-copyright {
      font-size: 12px;
      margin-top: 10px;
      a {
        border-bottom: 1px solid $black;
        &:hover {
          color: lighten($black, 0.6);
        }
      }
    }
  }
}
</style>
