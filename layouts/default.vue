<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>
<script>
import Navbar from '~/components/Header.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
