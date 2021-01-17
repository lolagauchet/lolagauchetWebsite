<template>
  <div class="toto">
    <Introduction />
    <Exp />
    <Projects />
    <Contact />
  </div>
</template>

<script>
export default {
  layout: 'default',
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Lola Gauchet | Développeuse Front-End',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Je m'appelle Lola Gauchet, je suis développeuse Front-end spécialisée Drupal depuis 2ans. Ayant la volonté d’évoluer sur des projets en Vue.js ou React je suis actuellement à la recherche d’un nouveau poste. Allier expérience utilisateur et bonnes pratiques web est source de motivation pour moi. Je suis motivée pour rendre vie à vos designs afin de délivrer des outils digitaux performants et adaptés à la demande client.",
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Lola Gauchet | Développeuse Front-End',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Je m'appelle Lola Gauchet, je suis développeuse Front-end spécialisée Drupal depuis 2ans. Ayant la volonté d’évoluer sur des projets en Vue.js ou React je suis actuellement à la recherche d’un nouveau poste.",
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'www.lolagauchet.fr',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'www.lolagauchet.fr/og.jpg',
      },
    ],
  },
}
</script>

<style>
</style>
