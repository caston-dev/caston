<template>
  <div class="index">
    <section class="hero is-medium is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            CASTON
          </h1>
          <p class="subtitle">
            作りたい/撮りたいテーマがあるけど出演者が見つからずに妥協したりあきらめたことはないですか？<br />
            <strong>CASTON</strong>はそんな悩みを解消するクリエイターと俳優のマッチングサービスです。
          </p>
        </div>
      </div>
    </section>
    <section class="section">
    </section>
    <section class="section">
    </section>
    <section class="section">
    </section>
  </div>
</template>

<script>
import IndexTabItem from '../components/IndexTabItem'

export default {
  components: {
    IndexTabItem
  },
  data() {
    return {
      currentId: 1,
      list: [
        { id: 1, label: 'クリエイターの方はこちら', content: 'ここにクリエイターの方のコンテンツがきます' },
        { id: 2, label: '俳優の方はこちら', content: 'ここに俳優の方のコンテンツがきます' },
      ]
    }
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
