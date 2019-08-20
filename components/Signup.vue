<template>
  <section class="section">
    <div class="modal-card signup-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ type }}</p>
      </header>
      <section class="modal-card-body">
        <slot name="body">
          <div class="social-button">
            <a id="facebook" @click.prevent="signup('facebook')">
              <span>Facebookで{{ type }}</span>
            </a>
            <a id="twitter" @click.prevent="signup('twitter')">
              <span>Twitterで{{ type }}</span>
            </a>
            <a id="google" @click.prevent="signup('google')">
              <span>Googleで{{ type }}</span>
            </a>
          </div>
        </slot>
      </section>
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() { return{} },
  methods: {
    ...mapActions(['setUser']),
    signup(service) {
      let provider = this.choseProvider(service)
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$parent.close()
        this.$parent.isSideMenu = false
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
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  created() {},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
}
</script>