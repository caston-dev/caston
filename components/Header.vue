<template>
  <div class="header">
    <signup/>
    <div class="header-inner">
      <nuxt-link class="logo" to="/">
        <!-- <n-logo/> -->
        <!-- <img src="~static/logo_nav.png" alt="Nuxt"/> -->
      </nuxt-link>
      <div class="menu">
        <div
        v-if="isMobile"
        @click="toggle"
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
              <nuxt-link to="/about">ログイン</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/signup">新規登録</nuxt-link>
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
      isMobile: false
    }
  },
  components: {
    Signup,
  },
  methods: {
    toggle() {
      this.$store.commit('toggle', 'visibleHeader')
    },
    showLogos() {
      this.$router.push('/logos')
    }
  },
  computed: {
    // visible() { return this.$store.state.visibleHeader }
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
  }

  .logo {

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
      color: $gray-color;
      text-decoration: none;
    }
  }
}
</style>
