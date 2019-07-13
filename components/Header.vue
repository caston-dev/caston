<template>
  <div class="header">
    <signup
    :is-signup="isSignup"
    @close-signup-modal="closeSignupModal"
    />
    <logout
    :is-logout="isLogout"
    @close-logout-modal="closeLogoutModal"
    />
    <div class="header-inner">
      <nuxt-link class="logo" to="/">
        <img src="~static/images/logo-icon.png" alt="Nuxt"/>
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
            <li v-if="!isAuthenticated">
              <a href="" @click.prevent="openSignupModal">ログイン</a>
            </li>
            <li v-if="!isAuthenticated">
              <a href="" @click.prevent="openSignupModal">新規登録</a>
            </li>
            <li v-if="isAuthenticated">
              <a href="" @click.prevent="openLogoutModal">ログアウト</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Signup from '~/components/Signup'
import Logout from '~/components/Logout'

export default {
  data() {
    return {
      isMobile: false,
      isSignup: false,
      isLogout: false,
      isLoggedIn: false
    }
  },
  components: {
    Signup,
    Logout
  },
  methods: {
    openSignupModal() {
      this.isSignup = true
    },
    closeSignupModal() {
      this.isSignup = false
    },
    openLogoutModal() {
      this.isLogout = true
    },
    closeLogoutModal() {
      this.isLogout = false
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  created() {
  }
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
    padding: 20px 20px;

    .logo {
      align-items: center;
      color: $white-color;
      display: flex;
      font-size: 20px;
      font-weight: bolder;
      text-decoration: none;

      img {
        height: 20px;
        margin: 0 6px 0 0;
        width: 20px;
      }
    }
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
      color: $white-color;
      text-decoration: none;
    }
  }
}
</style>
