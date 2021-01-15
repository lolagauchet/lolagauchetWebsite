<template>
  <div class="projects container" id="projects">
    <div class="projects__wrapper">
      <div class="small" data-sal="slide-right">
        <h2 class="projects__title"><span>Projets</span></h2>
        <Card left green data-sal="slide-up">
          <h3 class="projects__sub">+ de 20 projets Drupal depuis 2018</h3>
          <TagContainer>
            <TagItem> Drupal 8 </TagItem>
            <TagItem> HTML </TagItem>
            <TagItem> JS </TagItem>
            <TagItem> PHP </TagItem>
            <TagItem> Sass</TagItem>
            <TagItem> Gulp </TagItem>
          </TagContainer>
        </Card>
      </div>
      <ImageContainer bluepale class="large"
        ><img src="~assets/img/1.png" alt=""
      /></ImageContainer>
    </div>
    <div class="projects__wrapper" data-sal="slide-up">
      <ImageContainer pink class="large"
        ><img src="~assets/img/2.png" alt=""
      /></ImageContainer>
      <ImageContainer greenpale class="small"
        ><img src="~assets/img/3.png" alt=""
      /></ImageContainer>
    </div>
    <div class="projects__wrapper" data-sal="slide-up">
      <ImageContainer blue class="small"
        ><img src="~assets/img/4.png" alt=""
      /></ImageContainer>
      <ImageContainer black class="large"
        ><img src="~assets/img/5.png" alt=""
      /></ImageContainer>
    </div>
    <div class="projects__wrapper">
      <ImageContainer grey class="large" data-sal="slide-up"
        ><img src="~assets/img/6.png" alt=""
      /></ImageContainer>
      <div class="small card__wrapper" data-sal="slide-left">
        <Card left green>
          <h3 class="projects__sub">Développement Application Mobile</h3>
          <TagContainer>
            <TagItem> React Native </TagItem>
            <TagItem> Expo </TagItem>
            <TagItem> Redux </TagItem>
          </TagContainer>
        </Card>
      </div>
    </div>
    <div class="projects__wrapper" data-sal="slide-up">
      <ImageContainer grey class="small"
        ><img src="~assets/img/7.png" alt=""
      /></ImageContainer>
      <ImageContainer green class="large"
        ><img src="~assets/img/8.png" alt=""
      /></ImageContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  margin-top: 100px;
  @media screen and (max-width: $mobile) {
    margin-top: 80px;
  }
  @media screen and (max-width: $mobile) {
    margin-top: 40px;
  }
  .card {
    padding: 16px 38px 12px;
    margin-bottom: 30px;
    @media screen and (max-width: $mobile) {
      margin-bottom: 10px;
      padding: 20px;
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: 30px;
      @media screen and (max-width: $mobile) {
        margin-left: 0;
      }
      .card {
        padding: 30px 38px;
        width: 100%;
      }
    }
  }
  &__wrapper {
    display: flex;
    @media screen and (max-width: $mobile) {
      flex-wrap: wrap;
    }
  }
  &__title {
    margin-bottom: 40px;
  }
  &__sub {
    margin-bottom: 30px;
    @media screen and (max-width: $mobile) {
      margin-bottom: 10px;
    }
  }
}
</style>
