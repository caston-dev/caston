<template>
  <div class="index">
    <section class="index-head">
      <div class="index-head-inner">
        <div class="index-head-text">
          <h1>CASTON</h1>
          <p>
            作りたい/撮りたいテーマがあるけど出演者が見つからずに妥協したりあきらめたことはないですか？
          </p>
          <p>
            <strong>CASTON</strong>はそんな悩みを解消するクリエイターと俳優のマッチングサービスです。
          </p>
        </div>
        <div class="index-head-image">
          <img src="~/static/images/top-icon.png" alt="CASTON">
        </div>
      </div>
      <div class="more-button">
        <nuxt-link
        v-scroll-to="'#tab'"
        to>
          scroll
          <img class="bounce" src="~/static/images/arrow-down-icon.png" alt="scroll">
        </nuxt-link>
      </div>
    </section>
    <section class="index-about">
      <div class="index-about-inner">
        <div class="index-about-tab-items" id="tab">
          <IndexTabItem
          v-for="item in list"
          v-bind="item" :key="item.id"
          v-model="currentId"
          ></IndexTabItem>
        </div>
        <div class="index-about-tab-content" :key="currentId">
          <div class="index-about-tab-content-inner">
            {{ current.content }}
          </div>
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
.index-head {
  background-color: $theme-color;
  position: relative;

  .index-head-inner {
    height: 100vh;

    @include for-phone-only {
      display: block;
      padding: 0 20px;
    }

    @include for-tablet-portrait-up {
      align-items: center;
      display: flex;
      justify-content: center;
      max-width: 1080px;
      margin: 0 auto;
      width: 100vw;
    }

    .index-head-text {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 4;

      @include for-phone-only {
        padding-top: 80px;
      }

      h1 {
        color: $white-color;
        font-weight: bolder;

        @include for-phone-only {
          font-size: 64px;
          
        }

        @include for-tablet-landscape-up {
          font-size: 120px;
          margin: 0 0 20px;
        }
      }

      p {
        color: $white-color;
        font-weight: bold;
        letter-spacing: 2.9px;
        line-height: 2.1em;

        @include for-phone-only {
          font-size: 16px;
          margin: 0;
        }

        @include for-tablet-landscape-up {
          font-size: 20px;
          margin: 0 0 20px;
        }
      }
    }

    .index-head-image {
      flex: 3;

      img {
        width: 100%;

        @include for-phone-only {
          display: none;
        }

        @include for-tablet-landscape-up {
          display: block;
        }
      }
    }
  }

  .more-button {
    bottom: 5vh;
    position: absolute;
    text-align: center;
    width: 100%;

    a {
      align-items: center;
      border: 0;
      border-radius: 5px 5px 0 0;
      color: $white-color;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      text-decoration: none;

      img {
        animation-duration: 1s;
        animation-iteration-count: infinite;
        height: 30px;
        transform-origin: bottom;
        width: 30px;
      }
    }
  }
}

.index-about {
  background-color: $theme-color;
  height: 100vh;
  padding: 120px 0;
  width: 100vw;

  .index-about-inner {
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1080px;

    @include for-phone-only {
      padding: 0 20px;
    }

    .index-about-tab-items {
      align-items: center;
      display: flex;
      justify-content: space-around;
    }

    .index-about-tab-content {
      background-color: $white-color;
      border-radius: 0 0 8px 8px;
      padding: 30px;

      .index-about-tab-content-inner {
        transition: .5s;
      }
    }
  }
}

.index-strength {
  background: $white-color;
  height: 100vh;
  width: 100vw;
}

// Animation
.bounce {
  animation-name: bounce;
  animation-timing-function: linear;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(15px); }
  100% { transform: translateY(0); }
}

.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}

</style>
