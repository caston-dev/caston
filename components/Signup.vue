<template>
  <section>
    <b-modal :active.sync="isOpen" has-modal-card :can-cancel="false" full-screen>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">新規登録</p>
        </header>
        <section class="modal-card-body">
          <slot name="body">
            <div class="social-button">
              <a
              id="facebook"
              @click.prevent="signup('facebook')"
              >
                <span>Facebookで登録する</span>
              </a>
              <a
              id="twitter"
              @click.prevent="signup('twitter')"
              >
                <span>Twitterで登録する</span>
              </a>
              <a
              id="google"
              @click.prevent="signup('google')"
              >
                <span>Googleで登録する</span>
              </a>
            </div>
          </slot>
        </section>
        <footer class="modal-card-foot is-centered">
          <button class="button" type="button" @click="$parent.closeSignupModal()">キャンセル</button>
          <button class="button is-primary">登録する</button>
        </footer>
      </div>
    </b-modal>
  </section>
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
        this.$parent.closeSignupModal()
        this.$parent.closeSideMenu()
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
        case 'facebook':
          provider = new firebase.auth.FacebookAuthProvider();
          return provider
          break;
        case 'twitter':
          provider = new firebase.auth.TwitterAuthProvider();
          return provider
          break;
        case 'google':
          provider = new firebase.auth.GoogleAuthProvider();
          return provider
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
  beforeDestroy() {
    $parent.closeSignupModal()
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
