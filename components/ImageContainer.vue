<template>
  <div
    class="image__container"
    :class="{
      bluepale: bluepale,
      pink: pink,
      greenpale: greenpale,
      blue: blue,
      black: black,
      grey: grey,
      green: green,
    }"
  >
    <img :src="`${src}`" :alt="alt" loading="lazy" />
  </div>
</template>

<script>
export default {
  props: {
    bluepale: { type: Boolean, default: false },
    pink: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
    greenpale: { type: Boolean, default: false },
    black: { type: Boolean, default: false },
    grey: { type: Boolean, default: false },
    green: { type: Boolean, default: false },
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
}
</script>
<style lang="scss" scoped>
.image__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  height: 315px;
  box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
  @media screen and (max-width: $mobile) {
    margin-bottom: 10px;
    height: 200px;
  }
  &:nth-child(even) {
    margin-left: 30px;
    @media screen and (max-width: $mobile) {
      margin-left: 0;
    }
  }
  img {
    object-fit: contain;
    width: 387px;
    max-width: 100%;
    @media screen and (max-width: $mobile) {
      width: 80%;
      height: 80%;
    }
  }
  &.bluepale {
    background-color: #9fccf5;
  }
  &.pink {
    background-color: #b0606e;
  }
  &.greenpale {
    background-color: #b8eae4;
  }
  &.blue {
    background-color: #0097a0;
  }
  &.black {
    background-color: #000000;
  }
  &.grey {
    background-color: #f4f4f4;
  }
  &.green {
    background-color: #89d590;
  }
}
</style>
