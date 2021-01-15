<template>
  <nuxt-link :to="to" v-scroll-to="{ el: to }">
    <slot />
  </nuxt-link>
</template>
