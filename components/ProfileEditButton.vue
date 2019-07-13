<template>
  <div class="edit-button">
    <button @click="open">
      <img src="~static/images/profile-edit-icon.png" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$emit('open-profile-edit-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-button {
  position: absolute;
  top: -40px;
  right: 30px;

  button {
    align-items: center;
    background-color: $blue-color;
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    color: $white-color;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: space-around;
    height: 75px;
    padding: 15px;
    transition: .3s;
    width: 75px;

    // :hover {
    //   box-shadow: 0 0 4px rgba(0,0,0,0.2);
    // }

    img {
      margin: 0 auto;
      height: 30px;
      width: 30px;

      :hover {
        border: none;
      }
    }
  }
}
</style>
