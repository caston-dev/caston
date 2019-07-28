<template>
  <aside v-show="isOpen" class="menu column is-fullheight section">
    <p class="menu-label">
      メニュー
    </p>
    <ul class="menu-list">
      <li>
        <a href="/">
          <span class="icon"><i class="fa fa-home"></i></span> トップ
        </a>
      </li>
      <li>
        <a href="/about">
          <span class="icon"><i class="fa fa-info"></i></span> CASTONとは？
        </a>
      </li>
    </ul>
    <p class="menu-label">
      CASTONへようこそ
    </p>
    <ul class="menu-list" v-if="!isAuthenticated">
      <li>
        <a @click="$parent.openSignupModal()" class="is-active">
          <span class="icon"><i class="fa fa-info"></i></span> 新規登録
        </a>
      </li>
      <li>
        <a @click="$parent.openSignupModal()">
          <span class="icon"><i class="fa fa-info"></i></span> ログイン
        </a>
      </li>
    </ul>
    <ul class="menu-list" v-else>
      <li>
        <a @click="$parent.openLogoutModal()">
          <span class="icon"><i class="fa fa-info"></i></span> ログアウト
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  props: {
    'isSideMenu': {
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isSideMenu: {
      immediate: true,
      handler () {
        this.isOpen = this.isSideMenu
      }
    }
  }
}
</script>
