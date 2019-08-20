<template>
  <div class="has-background-light">
    <navbar/>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>
