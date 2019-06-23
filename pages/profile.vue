<template>
  <div class="profile">
    <status v-show="isNew"></status>
  </div>
</template>

<script>
import Status from '~/components/StatusCard.vue'

export default {
  components: {
    Status,
  },
  data() {
    return {
      isNew: false
    }
  },
  created() {
    if (this.$route.query.new === 'true') {
      this.isNew = true
    }
  }
}
</script>

<style lang="scss">

.profile {
  background: $theme-color;
  height: 100vh;
}
</style>
