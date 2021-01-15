<template>
  <span class="tag__container">
    <slot />
  </span>
</template>


<style lang="scss" scoped>
.tag__container {
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
}
</style>
