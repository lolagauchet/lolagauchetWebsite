<template>
  <div
    class="card"
    :class="{
      left: left,
      right: right,
      orange: orange,
      grey: grey,
      pink: pink,
      green: green,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    orange: { type: Boolean, default: false },
    grey: { type: Boolean, default: false },
    pink: { type: Boolean, default: false },
    green: { type: Boolean, default: false },
  },
}
</script>
<style lang="scss" scoped>
.card {
  padding: 16px 38px;
  @media screen and (max-width: $mobile) {
    padding: 20px;
  }
  &.left {
    border-left: 4px solid;
    &.pink {
      border-left-color: $pink;
      box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
    }
    &.grey {
      border-left-color: $grey;
      box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
    }
    &.green {
      border-left-color: $green;
      box-shadow: 3px 0px 4px rgba(215, 207, 207, 0.25);
    }
  }
  &.right {
    border-right: 4px solid;
    position: relative;
    &.orange {
      border-right-color: $orange;
      box-shadow: -3px -3px 7px rgba(215, 207, 207, 0.25);
      &:after {
        content: '';
        width: 90%;
        position: absolute;
        height: 1px;
        background-color: rgba(211, 208, 208, 0.3);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &.pink {
      border-right-color: $pink;
      box-shadow: -3px 4px 4px rgba(215, 207, 207, 0.25);
    }
    &.grey {
      border-right-color: $grey;
      box-shadow: -3px 0px 4px rgba(215, 207, 207, 0.25);
      position: relative;
      &:after {
        content: '';
        width: 90%;
        position: absolute;
        // height: 1px;
        border-top: 1px solid rgba(211, 208, 208, 0.3);
        // background-color:
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
