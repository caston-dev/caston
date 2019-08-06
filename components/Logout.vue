<template>
  <section v-show="isOpen" class="is-fullhd">
    <b-modal :active.sync="isOpen" has-modal-card>
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">ログアウトしますか？</p>
          </header>
          <section class="modal-card-body">
            <div class="buttons">
              <button class="button" type="button" @click="$parent.closeLogoutModal()">キャンセル</button>
              <button class="button is-primary" @click.prevent="logout">ログアウト</button>
            </div>
          </section>
        </div>
      </form>
    </b-modal>
  </section>
</template>
<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  props: {
    'isLogout': {
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then(() => {
        this.$parent.closeLogoutModal()
        this.$parent.closeSideMenu()
        this.setUser(null)
        this.$router.push({
          path: '/'
        })
      }).catch((err) => {
        alert(err)
      });
    },
    cancel() {
      this.$emit('close-logout-modal')
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  created() {
    this.isOpen = this.isLogout
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  watch: {
    isLogout: {
      immediate: true,
      handler () {
        this.isOpen = this.isLogout
      }
    }
  }
}
</script>
