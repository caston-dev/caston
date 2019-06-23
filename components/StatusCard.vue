<template>
  <div class="status-card">
    <div class="status-card-inner">
      <h3>あなたは 監督 or 俳優 のどちらですか？</h3>
      <div class="status-options">
        <a class="status-option-link" href="" @click.prevent="onClickOption(0)">
          <div class="status-option-column" :class="{ active: isActive === 0 }">
            <label for="">監督</label>
          </div>
        </a>
        <a class="status-option-link" href="" @click.prevent="onClickOption(1)">
          <div class="status-option-column" :class="{ active: isActive === 1 }">
            <label for="">俳優</label>
          </div>
        </a>
      </div>
      <button class="next-button" @click.prevent="saveStatus">次へ</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'user'
  ],
  data() {
    return {
      userObject: {},
      status: 0,
      isActive: 0
    }
  },
  methods: {
    onClickOption(status) {
      this.status = status
      this.isActive = status
    },
    onClickNextButton() {

    }
  },
}
</script>

<style lang="scss">
.status-card {
  height: 100vh;
  position: relative;
  width: 100vw;
}

.status-card-inner {
  background-color: #fff;
  left: 50%;
  padding: 40px;
  position: absolute;
  text-align: center;
  top: calc(50% - 60px);
  transform : translate(-50%,-50%);
  -webkit-transform : translate(-50%,-50%);
  width: 400px;

  .next-button {
    background-color: $blue-color;
    border: none;
    border-radius: 3px;
    color: $white-color;
    cursor: pointer;
    font-size: 18px;
    padding: 10px 20px;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  h3 {
    font-weight: normal;
  }
}

.status-options {
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 50px 0;

  .status-option-link {
    text-decoration: none;
  }

  .status-option-column {
    border: 1px solid $opacity-gray-color;
    border-radius: 3px;
    padding: 30px;
    transition: border 0.1s linear;

    label {
      color: $black-color;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .active {
    border: 3px solid $blue-color;
    transition: border 0.1s linear;
  }
}
</style>
