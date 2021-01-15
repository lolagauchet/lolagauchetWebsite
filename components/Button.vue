<template>
  <nuxt-link :to="to" class="button">
    <span> <slot /> </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
  },
}
</script>
<style lang="scss" scoped>
.button {
  span {
    background-color: $black;
    border: 1px solid $black;
    padding: 10px 16px;
    color: $white;
    font-size: 16px;
    transition: $transition;
  }
  &:hover span {
    background-color: $white;
    color: $black;
  }
}
</style>
