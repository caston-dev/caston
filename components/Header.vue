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
        <img src="~static/images/logo-icon.png" alt="CASTON"/>
        CASTON
      </nuxt-link>
      <div class="menu">
        <div
        class="sp-menu"
        >
          <div class="sp-menu-icon">
            <img src="~static/images/setting-icon.png" alt="メニュー">
          </div>
        </div>
        <div
        class="pc-menu"
        >
          <ul>
            <li>
              <nuxt-link to="/about">CASTONとは？</nuxt-link>
            </li>
            <li v-if="!isAuthenticated">
              <a href="" @click.prevent="openSignupModal">ログイン</a>
            </li>
            <!-- <li v-if="!isAuthenticated">
              <a href="" @click.prevent="openSignupModal">新規登録</a>
            </li> -->
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
  position: fixed;
  width: 100vw;
  z-index: 2;

  .header-inner {
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1080px;

    @include for-phone-only {
      height: 60px;
      padding: 0 20px;
    }

    .logo {
      align-items: center;
      color: $white-color;
      display: flex;
      font-size: 20px;
      font-weight: bolder;
      text-decoration: none;

      @include for-phone-only {
        font-size: 16px;
      }

      img {
        margin: 0 6px 0 0;

        @include for-phone-only {
          height: 16px;
          width: 16px;
        }

        @include for-tablet-portrait-up {
          height: 20px;
          width: 20px;
        }
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

      @include for-phone-only {
        display: none;
      }

      @include for-tablet-portrait-up {
        display: flex;
      }

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

    .sp-menu {
      @include for-phone-only {
        display: block;
      }

      @include for-tablet-portrait-up {
        display: none;
      }

      .sp-menu-icon {
        height: 20px;
        width: 20px;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    a {
      color: $white-color;
      text-decoration: none;
    }
  }
}
</style>
