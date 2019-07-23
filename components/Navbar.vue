<!-- <template>
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
            <li v-if="isAuthenticated">
              <a href="" @click.prevent="openLogoutModal">ログアウト</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template> -->







<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="~static/images/logo-icon.png" alt="CASTON"/>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          CASTONとは？
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>


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

<style lang="scss" scoped>
.navbar {
  background-color: $theme-color;
}
</style>
