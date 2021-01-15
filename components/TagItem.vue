<template>
  <span class="tag__item">
    <slot />
  </span>
</template>


<style lang="scss" scoped>
.tag__item {
  background-color: $background;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 14px;
  margin: 4px 6px;
  @media screen and (max-width: $mobile) {
    font-size: 12px;
  }
  @media screen and (max-width: $small) {
    font-size: 10px;
  }
}
</style>
