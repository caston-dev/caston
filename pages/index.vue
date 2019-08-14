<template>
  <div>
    <section class="hero is-medium is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            CASTON
          </h1>
          <!-- <p class="subtitle">
            作りたい/撮りたいテーマがあるけど出演者が見つからずに妥協したりあきらめたことはないですか？<br />
            <strong>CASTON</strong>はそんな悩みを解消するクリエイターと俳優のマッチングサービスです。
          </p> -->
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <!-- Put any content you want -->
              </article>
              <article class="tile is-child box">
                <!-- Put any content you want -->
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <!-- Put any content you want -->
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <!-- Put any content you want -->
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <!-- Put any content you want -->
          </article>
        </div>
      </div>
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
