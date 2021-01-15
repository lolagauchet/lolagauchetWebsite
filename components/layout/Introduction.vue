<template>
  <div class="introduction container">
    <h2 class="introduction__title small">
      <span> motivée </span>
      <span> & appliquée </span>
    </h2>
    <p class="introduction__desc large">
      Je suis une développeuse <span class="line">Front-end</span> spécialisée
      <span class="line">Drupal</span> depuis 2ans. Ayant la volontée d’évoluer
      sur des projets en <span class="line">Vue.js</span> ou
      <span class="line">React</span> je suis actuellement à la recherche d’un
      nouveau poste. Allier <span class="line">expérience utilisateur</span> et
      bonnes pratiques web est source de motivation pour moi. Je suis motivée
      pour rendre vie à vos design afin de délivrer des
      <span class="line">outils digitaux performants</span> et adaptés à la
      demande client.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.introduction {
  margin-top: 80px;
  display: flex;
  align-items: center;
  @media screen and (max-width: $mobile) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .large {
    margin-left: 30px;
    @media screen and (max-width: $mobile) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>
