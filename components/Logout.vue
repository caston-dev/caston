<template>
  <transition name="modal">
    <div
    v-show="isOpen"
    class="signup"
    >
      <div class="modal-mask" @click="cancel">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <p>ログアウトしますか？</p>
              <slot name="body">
                <div class="buttons">
                  <a
                  class="cancel"
                  @click.prevent="cancel"
                  href="#"
                  >
                    <span>キャンセル</span>
                  </a>
                  <a
                  class="logout"
                  @click.prevent="logout"
                  href="#"
                  >
                    <span>ログアウト</span>
                  </a>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
      this.$emit('close-logout-modal')
      firebase.auth().signOut().then(() => {
        this.setUser(null)
        this.$router.push({
          path: '/'
        })
      }).catch((err) => {
        // An error happened.
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
<style lang="scss" scoped>
</style>
