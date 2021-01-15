<template>
  <div class="exp container" id="exp">
    <div class="exp__wrapper exp__wrapper-2020">
      <Card right orange class="large" data-sal="slide-right">
        <h3 class="parcours__item-title">Développeuse web - Tangkoko</h3>
        <span class="subtitle parcours__item-sub"
          >septembre 2020 - décembre 2020</span
        >
        <TagContainer>
          <TagItem> Drupal 7/8 </TagItem>
          <TagItem> HTML </TagItem>
          <TagItem> JS </TagItem>
          <TagItem> Sass </TagItem>
          <TagItem> PHP </TagItem>
          <TagItem> Prestashop </TagItem>
          <TagItem> Magento2 </TagItem>
        </TagContainer>
      </Card>
      <h2 class="exp__list-title small" data-sal="slide-left">
        <span>Parcours</span><span>& expériences</span>
      </h2>
    </div>
    <div class="exp__wrapper exp__wrapper-2018">
      <Card right grey class="large" data-sal="slide-right">
        <h3 class="parcours__item-title">Développeuse web - Vupar Digital</h3>
        <span class="subtitle parcours__item-sub"
          >septembre 2018 - Aout 2020 | alternance</span
        >
        <TagContainer>
          <TagItem> Drupal 7/8 </TagItem>
          <TagItem> HTML </TagItem>
          <TagItem> JS </TagItem>
          <TagItem> Sass </TagItem>
          <TagItem> PHP </TagItem>
        </TagContainer>
      </Card>
      <Card left grey class="small" data-sal="slide-left">
        <h3 class="exp__item-title">Mastère Développement Web</h3>
        <span class="subtitle exp__item-sub">2018 - 2020 | ECV Digital</span>
        <TagContainer>
          <TagItem> React Native </TagItem>
          <TagItem> Vue.js </TagItem>
          <TagItem> UX / UI </TagItem>
          <TagItem> Symfony </TagItem>
        </TagContainer>
      </Card>
    </div>
    <div class="exp__wrapper exp__wrapper-2017">
      <Card right pink class="large" data-sal="slide-right">
        <h3 class="parcours__item-title">
          Développeuse Front-end - Together Digital | Dublin
        </h3>
        <span class="subtitle parcours__item-sub"
          >Avril 2018 - Aout 2018 | stage</span
        >
        <TagContainer>
          <TagItem> StoryBlock</TagItem>
          <TagItem> HTML </TagItem>
          <TagItem> JS/ES6 </TagItem>
          <TagItem> Sass </TagItem>
        </TagContainer>
      </Card>
      <Card left pink class="small" data-sal="slide-left">
        <h3 class="exp__item-title">Licence professionnelle Multimédia</h3>
        <span class="subtitle exp__item-sub">2017 - 2018</span>
        <TagContainer>
          <TagItem> Wordpress </TagItem>
          <TagItem> Webdesign </TagItem>
          <TagItem> Audiovisuel </TagItem>
        </TagContainer>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exp {
  margin-top: 100px;
  @media screen and (max-width: $mobile) {
    margin-top: 80px;
  }
  @media screen and (max-width: $mobile) {
    margin-top: 40px;
  }
  .card {
    padding: 16px 38px 12px;
    @media screen and (max-width: $mobile) {
      padding: 20px;
    }
    @media screen and (max-width: $mobile) {
      &.right {
        border-right: none;
      }
      &.right.orange {
        border-left: 4px solid $orange;
        box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
      }
      &.right.grey {
        border-left: 4px solid $grey;
        box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
      }
      &.right.pink {
        border-left: 4px solid $pink;
        box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
      }
    }
  }
  .large {
    margin-right: 30px;
    @media screen and (max-width: $mobile) {
      margin-right: 0;
    }
  }
  &__wrapper {
    display: flex;
    @media screen and (max-width: $mobile) {
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
  }
  &__list {
    &-title {
      align-items: flex-end;
      justify-content: center;
      border-left: 4px solid transparent;
      padding: 0 38px;
      @media screen and (max-width: $mobile) {
        align-items: flex-start;
        order: -1;
        padding: 0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
