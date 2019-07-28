<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <signup :is-signup="isSignup" />
    <logout :is-logout="isLogout" />
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="~static/images/logo-icon.png" alt="CASTON"/>
      </a>
      <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar"
      @click="isSideMenu = !isSideMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          トップ
        </a>
        <a class="navbar-item">
          CASTONとは？
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!isAuthenticated">
            <a class="button is-primary" @click.prevent="openSignupModal">
              <strong>新規登録</strong>
            </a>
            <a class="button is-light" @click.prevent="openSignupModal">
              ログイン
            </a>
          </div>
          <div class="buttons" v-if="isAuthenticated">
            <a class="button is-light" @click.prevent="openLogoutModal">
              ログアウト
            </a>
          </div>
        </div>
      </div>
    </div>
    <transition name="menu">
      <side-menu :is-side-menu="isSideMenu" />
    </transition>
  </nav>
</template>

<script>
export default {
}
</script>

<script>
import { mapGetters, mapState } from 'vuex'
import Signup from '~/components/Signup'
import Logout from '~/components/Logout'
import SideMenu from '~/components/SideMenu'

export default {
  data() {
    return {
      isMobile: false,
      isSignup: false,
      isLogout: false,
      isLoggedIn: false,
      isSideMenu: false
    }
  },
  components: {
    Signup,
    Logout,
    SideMenu
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
    openSideMenu() {
      this.isSideMenu = true
    },
    closeSideMenu() {
      this.isSideMenu = false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
}
</script>

<style lang="scss" scoped>
.menu-enter-active, .menu-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.menu-enter, .menu-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
</style>
