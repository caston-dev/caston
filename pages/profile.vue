<template>
  <div class="profile">
    <!-- <walkthrough v-show="isNew"></walkthrough> -->
    <div class="profile-inner">
      <div class="profile-card">
        <div class="profile-image">
          <img src="https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="プロフィール画像">
        </div>
        <div class="profile-head">
          <div class="profile-icon">
            <img src="https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="プロフィール画像">
          </div>
          <div class="profile-name">
            <h2>{{ profile.name }}</h2>
            <p>{{ profile.name }}</p>
          </div>
        </div>
        <div class="profile-body">

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>出身</h3>
              <a href="#" @click.prevent="form.birthPlace = !form.birthPlace">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <b-field v-if="form.birthPlace">
                <b-input v-model="profile.birthPlace"></b-input>
              </b-field>
              <p v-else>{{ profile.birthPlace }}</p>
              <div
              class="form-button"
              v-show="form.birthPlace"
              >
                <button @click.prevent="onClickCancelButton('birthPlace')">キャンセル</button>
                <button @click="onClickSaveButton('birthPlace')">保存</button>
              </div>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>現在住んでいる地域</h3>
              <a href="#" @click.prevent="form.livingPlace = !form.livingPlace">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <b-field v-if="form.livingPlace">
                <b-input v-model="profile.livingPlace"></b-input>
              </b-field>
              <p v-else>{{ profile.livingPlace }}</p>
              <div
              class="form-button"
              v-show="form.livingPlace"
              >
                <button @click.prevent="onClickCancelButton('livingPlace')">キャンセル</button>
                <button @click="onClickSaveButton('livingPlace')">保存</button>
              </div>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>経歴</h3>
              <a href="#" @click.prevent="form.careers = !form.careers">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="career in profile.careers" :key="career.title">
                <li v-if="form.careers">
                  <b-field>
                    <b-input v-model="career.title"></b-input>
                  </b-field>
                </li>
                <li v-else>
                  <p>{{ career.title }}</p>
                </li>
              </ul>
              <div
              class="form-button"
              v-show="form.careers"
              >
                <button @click.prevent="onClickCancelButton('careers')">キャンセル</button>
                <button @click="onClickSaveButton('careers')">保存</button>
              </div>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>出演作品</h3>
              <a href="#" @click.prevent="form.appearances = !form.appearances">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="appearance in profile.appearances" :key="appearance.title">
                <li v-if="form.appearances">
                  <b-field>
                    <b-input v-model="appearance.title"></b-input>
                  </b-field>
                </li>
                <li v-else>
                  <p>{{ appearance.title }}</p>
                </li>
              </ul>
              <div
              class="form-button"
              v-show="form.appearances"
              >
                <button @click.prevent="onClickCancelButton('appearances')">キャンセル</button>
                <button @click="onClickSaveButton('appearances')">保存</button>
              </div>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>資格・特技</h3>
              <a href="#" @click.prevent="form.certifications = !form.certifications">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="certification in profile.certifications" :key="certification.title">
                <li v-if="form.certifications">
                  <b-field>
                    <b-input v-model="certification.title"></b-input>
                  </b-field>
                </li>
                <li v-else>
                  <p>{{ certification.title }}</p>
                </li>
              </ul>
              <div
              class="form-button"
              v-show="form.certifications"
              >
                <button @click.prevent="onClickCancelButton('certifications')">キャンセル</button>
                <button @click="onClickSaveButton('certifications')">保存</button>
              </div>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>好きな映画や演劇</h3>
              <a href="#" @click.prevent="form.favorites = !form.favorites">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="favorite in profile.favorites" :key="favorite.title">
                <li v-if="form.favorites">
                  <b-field>
                    <b-input v-model="favorite.title"></b-input>
                  </b-field>
                </li>
                <li v-else>
                  <p>{{ favorite.title }}</p>
                </li>
              </ul>
              <div
              class="form-button"
              v-show="form.favorites"
              >
                <button @click.prevent="onClickCancelButton('favorites')">キャンセル</button>
                <button @click="onClickSaveButton('favorites')">保存</button>
              </div>
            </div>
          </div>

        </div>

        <!-- もしログインユーザーとプロフィールのユーザーが同一ではない場合 -->
        <div class="profile-message-button">
          <a href="#">
            メッセージを送る
          </a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'
import Status from '~/components/StatusCard.vue'
import Walkthrough from '~/components/Walkthrough.vue'

export default {
  components: {
    Walkthrough
  },
  data() {
    return {
      isNew: false,
      form: {
        name: false,
        birthPlace: false,
        livingPlace: false,
        careers: false,
        appearances: false,
        certifications: false,
        favorites: false
      },
      profile: {
        name: 'お名前',
        birthPlace: '出身地',
        livingPlace: '現在住んでいる地域',
        careers: [
          {
            title: '経歴のタイトル１',
            body: '経歴の内容'
          },
          {
            title: '経歴のタイトル２',
            body: '経歴の内容'
          },
          {
            title: '経歴のタイトル３',
            body: '経歴の内容'
          }
        ],
        appearances: [
          {
            title: '出演作１',
            role: '役'
          },
          {
            title: '出演作２',
            role: '役'
          },
          {
            title: '出演作３',
            role: '役'
          },
          {
            title: '出演作４',
            role: '役'
          }
        ],
        certifications: [
          {
            title: '資格名１',
            acquisitionDate: '1993/12/31'
          },
          {
            title: '資格名２',
            acquisitionDate: '1993/12/31'
          }
        ],
        favorites: [
          {
            title: 'ダイハード１'
          },
          {
            title: 'ダイハード２'
          },
          {
            title: 'ダイハード３'
          },
        ]
      }
    }
  },
  methods: {
    onClickCancelButton(key) {
      switch (key) {
        case 'birthPlace':
          this.form.birthPlace = false
          break;
        case 'careers':
          this.form.careers = false
          break;
        case 'livingPlace':
          this.form.livingPlace = false
          break;
        case 'appearances':
          this.form.appearances = false
          break;
        case 'certifications':
          this.form.certifications = false
          break;
        case 'favorites':
          this.form.favorites = false
          break;
        default:
          break;
      }
    },
    onClickSaveButton(key) {
      switch (key) {
        case 'birthPlace':

          break;
        default:

      }
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  created() {
    if (this.$route.query.new === 'true') {
      this.isNew = true
    }
  }
}
</script>

<style lang="scss" scoped>

.profile {
  background: $light-gray-color;
}

.profile-inner {
  padding: 100px 0;
}

.profile-card {
  background-color: $white-color;
  border-radius: 20px;
  box-shadow: 4px 4px 8px $light-gray-color;
  margin: 0 auto;
  width: 35%;

  .profile-image {
    height: 400px;
    width: 100%;

    img {
      border-radius: 20px 20px 0px 0px / 20px 20px 0px 0px;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .profile-head {
    align-items: center;
    border-bottom: 1px solid rgba(50, 49, 48, .1);
    display: flex;
    padding: 60px 20px 40px;

    .profile-icon {
      height: 60px;
      margin: 0 20px 0 0;
      width: 60px;

      img {
        border-radius: 50%;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    .profile-name {

      h2 {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }

      p {
        color: $gray-color;
        opacity: .5;
        margin: 0;
      }
    }
  }

  .profile-body {
    border-bottom: 1px solid rgba(50, 49, 48, .1);
    padding: 20px 20px 0;

    .profile-body-item {
      margin: 0 0 40px;

      .profile-body-item-head {
        align-items: center;
        display: flex;
        justify-content: space-between;

        h3 {
          font-size: 18px;
          font-weight: 600;
        }

        a {
          color: $gray-color;
          font-size: 12px;

          svg {
            margin: 0 2px 0 0;
          }
        }
      }

      .field {
        margin: 10px 0;
      }

      p {
        color: $gray-color;
        font-size: 16px;
        margin: 15px 0 0;
        opacity: .5;
      }
    }
  }

  .profile-message-button {
    padding: 60px 20px 60px;
    text-align: center;

    a {
      background-color: $blue-color;
      border-radius: 5px;
      color: $white-color;
      font-size: 18px;
      font-weight: bold;
      margin: 30px auto 0;
      padding: 15px 30px;
      text-decoration: none;
      width: 80%;
    }
  }

  /* Animation */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
