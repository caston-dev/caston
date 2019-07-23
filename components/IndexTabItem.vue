<template>
  <a
  @click="$emit('input', id)"
  :class="[active, 'tab-item']"
  >
    <h3>{{ label }}</h3>
  </a>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    }
  }
}
</script>

<style lang="scss">
</style>
