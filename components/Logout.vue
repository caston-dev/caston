<template>
  <section class="section">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">ログアウトしますか？</p>
      </header>
      <section class="modal-card-body">
        <div class="buttons">
          <button class="button" type="button" @click="$parent.close()">キャンセル</button>
          <button class="button is-primary" @click.prevent="logout">ログアウト</button>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then(() => {
        this.$parent.close()
        // this.$parent.closeSideMenu()
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
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
}
</script>
