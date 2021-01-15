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
  background-image: url('~assets/img/portrait.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 430px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: $mobile) {
    background-size: cover;
    background-position: center center;
  }
  &:after {
    background: linear-gradient(180deg, #0c1110 0%, #090e0d 100%);
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
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
    &-city {
      font-weight: 300;
      font-size: 24px;
      color: $white;
      display: block;
    }
  }
}
</style>
