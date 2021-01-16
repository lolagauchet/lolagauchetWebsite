<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <h1 class="header__title">
          DÉVELOPPEUSE FRONT END <span class="header__title-city">nantes</span>
        </h1>
        <TagContainer>
          <TagItem> Drupal </TagItem>
          <TagItem> Vue.js </TagItem>
          <TagItem> React </TagItem>
        </TagContainer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-image: url('~assets/img/portrait.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  height: 430px;
  justify-content: flex-end;
  position: relative;
  @media screen and (max-width: $mobile) {
    background-size: cover;
    background-position: center center;
    height: 260px;
  }
  &:after {
    background: linear-gradient(180deg, #0c1110 0%, #090e0d 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  &__content {
    margin-right: 0;
    margin-left: auto;
    text-align: left;
    width: 50%;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 40px;
    @media screen and (max-width: $mobile) {
      margin-bottom: 20px;
    }
    &-city {
      display: block;
      color: $white;
      font-weight: 300;
      font-size: 24px;
      @media screen and (max-width: $mobile) {
        font-size: 22px;
      }
      @media screen and (max-width: $small) {
        font-size: 20px;
      }
    }
  }
}
</style>
