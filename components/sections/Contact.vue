<template>
  <div class="contact container" id="contact" data-sal="slide-up">
    <div class="contact__infos">
      <h2><span>intéressé pour</span><span> travailler ensemble ?</span></h2>
      <p>N’hésitez pas à me contacter si mon profil vous intéresse.</p>
    </div>
    <div class="contact__form">
      <ContactForm />
    </div>
    <div class="contact__socials-wrapper">
      <p class="contact__socials-sub">
        <span class="line">Pour plus d'informations</span>
      </p>

      <div class="contact__socials-list">
        <a
          href="/Lola_Gauchet_CV.pdf"
          class="button contact__socials-cv"
          target="_blank"
          rel="noopener"
          name="Lien vers CV"
          >Voir mon CV</a
        >
        <a
          href="https://www.linkedin.com/in/lola-gauchet/"
          class="contact__socials-linkedin"
          target="_blank"
          rel="noopener"
          name="Linkedin logo"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0H4.5C2.025 0 0 2.025 0 4.5V40.5C0 42.975 2.025 45 4.5 45H40.5C42.975 45 45 42.975 45 40.5V4.5C45 2.025 42.975 0 40.5 0ZM13.5 38.25H6.75V18H13.5V38.25ZM10.125 14.175C7.875 14.175 6.075 12.375 6.075 10.125C6.075 7.875 7.875 6.075 10.125 6.075C12.375 6.075 14.175 7.875 14.175 10.125C14.175 12.375 12.375 14.175 10.125 14.175ZM38.25 38.25H31.5V26.325C31.5 24.5251 29.925 22.95 28.125 22.95C26.325 22.95 24.75 24.5251 24.75 26.325V38.25H18V18H24.75V20.7C25.875 18.9 28.35 17.55 30.375 17.55C34.65 17.55 38.25 21.15 38.25 25.425V38.25Z"
              fill="black"
            />
          </svg>
        </a>
        <a
          href="https://github.com/lolagauchet"
          class="contact__socials-github"
          target="_blank"
          rel="noopener"
          name="Github logo"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0C10.74 0 0 10.5598 0 23.5836C0 34.0055 6.876 42.8434 16.41 45.9593C17.61 46.1813 18.05 45.4513 18.05 44.8253C18.05 44.2653 18.03 42.7814 18.02 40.8154C11.344 42.2374 9.936 37.6514 9.936 37.6514C8.844 34.9295 7.266 34.2015 7.266 34.2015C5.092 32.7395 7.434 32.7695 7.434 32.7695C9.844 32.9335 11.11 35.1995 11.11 35.1995C13.25 38.8054 16.728 37.7634 18.1 37.1614C18.316 35.6355 18.934 34.5975 19.62 34.0075C14.29 33.4175 8.688 31.3895 8.688 22.3537C8.688 19.7797 9.618 17.6757 11.158 16.0258C10.888 15.4298 10.078 13.0318 11.368 9.78385C11.368 9.78385 13.378 9.15186 17.968 12.2018C19.888 11.6778 21.928 11.4178 23.968 11.4058C26.008 11.4178 28.048 11.6778 29.968 12.2018C34.528 9.15186 36.538 9.78385 36.538 9.78385C37.828 13.0318 37.018 15.4298 36.778 16.0258C38.308 17.6757 39.238 19.7797 39.238 22.3537C39.238 31.4135 33.628 33.4075 28.288 33.9875C29.128 34.6955 29.908 36.1415 29.908 38.3514C29.908 41.5074 29.878 44.0433 29.878 44.8093C29.878 45.4273 30.298 46.1653 31.528 45.9293C41.13 42.8334 48 33.9895 48 23.5836C48 10.5598 37.254 0 24 0Z"
              fill="#212121"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  @media screen and (max-width: $mobile) {
    margin-top: 80px;
  }
  @media screen and (max-width: $mobile) {
    margin-top: 40px;
  }
  .button {
    background-color: $black;
    border: 1px solid $black;
    color: $white;
    font-size: 16px;
    padding: 10px 16px;
    transition: $transition;
    &:hover {
      background-color: $white;
      color: $black;
    }
  }
  &__form {
    width: 50%;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }
  }
  &__infos {
    padding-right: 60px;
    width: 50%;
    @media screen and (max-width: $tablet) {
      margin-bottom: 40px;
      padding-right: 0;
      width: 100%;
    }
    > p,
    > span {
      font-weight: 300;
    }
  }
  &__socials {
    &-sub {
      margin-bottom: 20px;
      @media screen and (max-width: $tablet) {
        margin-top: 40px;
      }
    }
    &-list {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      a {
        @media screen and (max-width: $mobile) {
          margin-top: 10px;
        }
        svg {
          height: 40px;
          width: 40px;
          path {
            transition: $transition;
          }
          &:hover path {
            fill: lighten($black, 10%);
          }
        }
      }
    }
    &-linkedin,
    &-github {
      line-height: 0;
      margin-left: 20px;
    }
  }
}
</style>
