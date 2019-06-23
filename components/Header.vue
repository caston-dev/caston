<template>
  <div class="header">
    <signup
    :is-signup="isSignup"
    @close-signup-modal="closeSignupModal"
    />
    <div class="header-inner">
      <nuxt-link class="logo" to="/">
        <!-- <n-logo/> -->
        <!-- <img src="~static/logo_nav.png" alt="Nuxt"/> -->
        CASTON
      </nuxt-link>
      <div class="menu">
        <div
        v-if="isMobile"
        class="sp-menu"
        >
          <!-- <div :class="{'icon menu': !visible, 'icon close': visible}"></div> -->
        </div>
        <div
        v-else
        class="pc-menu"
        >
          <ul>
            <li>
              <nuxt-link to="/">トップ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">CASTONとは？</nuxt-link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="" @click.prevent="openSignupModal">ログイン</a>
            </li>
            <li>
              <a href="" @click.prevent="openSignupModal">新規登録</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Signup from '~/components/Signup.vue'

export default {
  data() {
    return {
      isMobile: false,
      isSignup: false
    }
  },
  components: {
    Signup,
  },
  methods: {
    openSignupModal() {
      this.isSignup = true
    },
    closeSignupModal() {
      this.isSignup = false
    }
  },
  computed: {
  },
}
</script>

<style lang="scss">
.header {
  background-color: $theme-color;

  .header-inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 10px 20px;
  }

  .logo {
    color: $black-color;
    font-size: 24px;
    font-weight: bolder;
    text-decoration: none;
  }

  .menu {
    align-items: center;
    display: flex;
    justify-content: space-around;

    .pc-menu {
      align-items: center;
      display: flex;

      ul {
        align-items: center;
        display: flex;
        justify-content: space-around;
        list-style: none;
      }

      li {
        margin: 0 10px;
      }
    }

    a {
      color: $black-color;
      text-decoration: none;
    }
  }
}
</style>
