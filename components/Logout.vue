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
  width: 440px;
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

  .buttons {
    align-items: center;
    display: flex;
    justify-content: space-around;

    .logout {
      background-color: $blue-color;
      color: $white-color;
    }

    .cancel {
      background-color: $gray-color;
      color: $white-color;
    }

    a {
      border-radius: 2px;
      color: $white-color;
      font-size: 14px;
      letter-spacing: .15em;
      margin: 10px 0;
      padding: 15px 10px;
      text-decoration: none;
      width: 45%;
    }
  }

  p {
    margin: 10px 0 20px;
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
