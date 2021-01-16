<template>
  <div class="menu container">
    <p class="menu__name">lola gauchet</p>
    <Button to="#contact">Discutons</Button>
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
    background-color: $green;
    height: 2px;
    width: 30%;
  }
  &__name {
    font-weight: 500;
    text-transform: uppercase;
  }
  &__list {
    display: flex;
    margin: 0;
    margin-right: 20px;
    padding: 0;
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
        border-bottom: 3px solid $green;
        bottom: -4px;
        content: '';
        left: 0;
        padding-bottom: 4px;
        position: absolute;
        transition: transform 0.3s ease-in-out;
        transform: scaleX(0);
        width: 100%;
        z-index: -1;
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
