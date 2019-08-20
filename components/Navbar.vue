<template>
  <!-- <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~static/images/logo-icon.png" alt="CASTON"/>
      </a>
      <a
      role="button"
      class="navbar-burger burger has-text-white"
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
        <a class="navbar-item has-text-white">
          ホーム
        </a>
        <a class="navbar-item has-text-white">
          CASTONとは？
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!isAuthenticated">
            <a class="button is-primary is-inverted" @click.prevent="openSignupModal('登録')">
              <strong>新規登録</strong>
            </a>
            <a class="button is-primary is-inverted is-outlined" @click.prevent="openSignupModal('ログイン')">
              ログイン
            </a>
          </div>
          <div class="buttons" v-if="isAuthenticated">
            <nuxt-link :to="'/profile?id=' + user.uid">
              プロフィール
            </nuxt-link>
            <a class="button is-primary is-inverted is-outlined" @click.prevent="openLogoutModal">
              ログアウト
            </a>
          </div>
        </div>
      </div>
    </div>
    <transition name="menu">
      <side-menu :is-side-menu="isSideMenu" />
    </transition>
  </nav> -->
  <b-navbar fixed-top class="">
        <template slot="brand">
            <b-navbar-item href="/">
                <img src="images/logo-text-and-image.png" alt="CASTON">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <nuxt-link to="" class="has-text-dark">
                    CASTONとは？
                </nuxt-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <nuxt-link to="" class="has-text-dark">
                    利用規約
                </nuxt-link>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="#">
                <nuxt-link to="" class="has-text-dark">
                    プロフィール
                </nuxt-link>
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>新規登録</strong>
                    </a>
                    <a class="button is-light">
                        ログイン
                    </a>
                </div>
            </b-navbar-item>
        </template>
  </b-navbar>
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
      isSideMenu: false
    }
  },
  components: {
    Signup,
    Logout,
    SideMenu
  },
  methods: {
    openSignupModal(type) {
      this.$modal.open({
        parent: this,
        component: Signup,
        hasModalCard: true,
        props: {
          type: type
        }
      });
    },
    closeSignupModal() {
      this.$modal.close({
        parent: this,
        component: Signup
      })
    },
    openLogoutModal() {
      this.$modal.open({
        parent : this,
        component: Logout,
        hasModalCard: true,
        events: {
            'success-response': value => {
            console.log(value)
          }
        }
      });
    },
    closeLogoutModal() {
      this.$modal.close({
        parent: this,
        component: Logout
      })
    },
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
}
</script>