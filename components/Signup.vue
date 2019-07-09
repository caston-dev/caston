<template>
  <transition name="modal">
    <div
    v-show="isOpen"
    class="signup"
    >
      <div class="modal-mask" @click="closeModal">
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
        var token = result.credential.accessToken
        var user = result.user
        var isNewUser = result.additionalUserInfo.isNewUser
        console.log(user)
        if (isNewUser) {
          // もし初回登録のユーザーの場合、Realtime Databaseにレコードを作成する

        }
        // this.$router.push({
        //   path: '/profile',
        //   query: {
        //     new: isNewUser
        //   },
        // })
      }).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        var email = error.email
        var credential = error.credential
        // ...
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
      handler () {
        this.isOpen = this.isSignup
      }
    }
  }
}
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  font-family: Helvetica, Arial, sans-serif;
  transition: all .3s ease;
  text-align: center;
  margin: 0px auto;
  width: 400px;
}

.modal-header {
  background-color: $theme-color;
  color: $white-color;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 20px 40px;
}

.modal-body {
  background: $white-color;
  margin: 0px auto;
  padding: 40px;

  .social-button {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    #facebook {
      border: 1px solid $facebook-color;
      background-color: $facebook-color;
    }

    #twitter {
      border: 1px solid $twitter-color;
      background-color: $twitter-color;
    }

    #google {
      border: 1px solid $google-color;
      background-color: $google-color;
    }

    a {
      border-radius: 2px;
      color: $white-color;
      font-size: 14px;
      letter-spacing: .15em;
      margin: 10px 0;
      padding: 15px 10px;
      text-decoration: none;
      width: 100%;
    }
  }

}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
