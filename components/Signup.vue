<template>
  <transition name="modal">
    <div
    v-show="isOpen"
    class="signup"
    >
      <div
      class="modal-mask"
      @click="closeModal"
      >
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                会員登録
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <div class="social-button">
                  <a
                  id="facebook"
                  @click.prevent="signup('facebook')"
                  href=""
                  >
                    <span>Facebookで登録する</span>
                  </a>
                  <a
                  id="twitter"
                  @click.prevent="signup('twitter')"
                  href=""
                  >
                    <span>Twitterで登録する</span>
                  </a>
                  <a
                  id="google"
                  @click.prevent="signup('google')"
                  href=""
                  >
                    <span>Googleで登録する</span>
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
    'isSignup': {
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
    signup(service) {
      let provider = this.choseProvider(service)
      firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user
        var isNewUser = result.additionalUserInfo.isNewUser
        if (isNewUser) {
          this.writeUserData(user, isNewUser)
        } else {
          this.moveToProfile(user.uid, isNewUser)
        }
      }).catch((err) => {
        alert(err.message)
      });
    },
    choseProvider(service) {
      var provider;
      switch (service) {
        case 'google':
          provider = new firebase.auth.GoogleAuthProvider();
          return provider
          break;
        case 'twitter':
          alert('Under construction...')
          // provider = new firebase.auth.TwitterAuthProvider();
          // return provider
          break;
        default:
          break;
      }
    },
    writeUserData(user, isNewUser) {
      firebase.database().ref('users/' + user.uid).set({
        userName: user.displayName,
        email: user.email
      }, (err) => {
        if (err) {
          alert(err)
        } else {
          this.moveToProfile(user.uid, isNewUser)
        }
      })
    },
    moveToProfile(userId, isNew) {
      this.$router.push({
        path: '/profile',
        query: {
          id: userId,
          new: isNew
        },
      })
    },
    closeModal() {
      this.$emit('close-signup-modal')
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  created() {
    this.isOpen = this.isSignup
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  watch: {
    isSignup: {
      immediate: true,
      handler() {
        this.isOpen = this.isSignup
      }
    }
  }
}
</script>
<style lang="scss">
</style>
