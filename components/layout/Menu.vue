<template>
  <div class="menu container">
    <p class="menu__name">lola gauchet</p>
    <div class="menu__wrapper">
      <ul class="menu__list">
        <li class="menu__item">
          <NuxtLink to="#exp">Expériences & parcours</NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink to="#projects">Projets</NuxtLink>
        </li>
      </ul>
      <Button to="#contact">Discutons</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  &__wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  span {
    width: 30%;
    height: 2px;
    background-color: $green;
  }
  &__name {
    font-weight: 500;
    text-transform: uppercase;
  }
  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    margin-right: 20px;
    @media screen and (max-width: $small) {
      display: none;
    }
  }
  &__item {
    padding: 0 10px;
    a {
      font-size: 16px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 3px solid $green;
        bottom: -4px;
        left: 0;
        padding-bottom: 4px;
        transform: scaleX(0);
        z-index: -1;
        transition: transform 0.3s ease-in-out;
        @media screen and (max-width: $mobile) {
          font-size: 14px;
        }
      }
      &:hover:before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
