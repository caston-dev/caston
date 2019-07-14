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
.tab-item {
  align-items: center;
  background-color: $theme-color;
  border: 0;
  border-radius: 8px 8px 0 0;
  color: $white-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: .5;
  text-align: center;
  transition: .3s;
  width: 100%;

  h3 {
    margin: 0;

    @include for-phone-only {
      font-size: 12px;
      padding: 20px 0;
    }

    @include for-tablet-portrait-up {
      font-size: 18px;
      padding: 30px 0;
    }
  }
}
.tab-item:hover {

}
.active {
  background-color: $white-color;
  color: $black-color;
  cursor: none;
  opacity: 1;
}
</style>
