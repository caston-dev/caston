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
</style>
