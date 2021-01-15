<template>
  <div>
    <Menu />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import sal from 'sal.js'
export default {
  mounted() {
    sal()
  },
}
</script>
<style lang="scss">
@import '../node_modules/sal.js/dist/sal.css';
</style>
