<template>
  <div class="profile">
    <!-- <walkthrough v-show="isNew"></walkthrough> -->
    <ProfileEditModal
    v-show="isEditProfile"
    :is-edit-profile="isEditProfile"
    @close-profile-edit-modal="closeProfileEditModal"
    />
    <div class="profile-inner">
      <div class="profile-card">
        <div class="profile-image">
          <img
          :src="uploadedImage"
          v-if="uploadedImage"
          />
          <img
          v-else
          src="~static/images/profile-icon.png"
          alt="プロフィール画像"
          />
        </div>
        <div class="profile-edit-button">
          <ProfileEditButton
          @open-profile-edit-modal="openProfileEditModal"
          />
        </div>
        <div class="profile-head">
          <div class="profile-icon">
            <img
            :src="uploadedImage"
            v-if="uploadedImage"
            />
            <img
            v-else
            src="~static/images/profile-icon.png"
            alt="プロフィールアイコン画像"
            />
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
            </div>
            <div class="profile-body-item-body">
              <p>{{ profile.birthPlace }}</p>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>現在住んでいる地域</h3>
            </div>
            <div class="profile-body-item-body">
              <p>{{ profile.livingPlace }}</p>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>経歴</h3>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="career in profile.careers" :key="career.title">
                <li>
                  <p>{{ career.title }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>出演作品</h3>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="appearance in profile.appearances" :key="appearance.title">
                <li>
                  <p>{{ appearance.title }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>資格・特技</h3>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="certification in profile.certifications" :key="certification.title">
                <li>
                  <p>{{ certification.title }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>好きな映画や演劇</h3>
            </div>
            <div class="profile-body-item-body">
              <ul v-for="favorite in profile.favorites" :key="favorite.title">
                <li>
                  <p>{{ favorite.title }}</p>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- もしログインユーザーとプロフィールのユーザーが同一ではない場合 -->
        <!-- <div class="profile-message-button">
          <a href="#">
            メッセージを送る
          </a>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'
import Status from '~/components/StatusCard'
import Walkthrough from '~/components/Walkthrough'
import ProfileEditButton from '~/components/ProfileEditButton'
import ProfileEditModal from '~/components/ProfileEditModal'

export default {
  components: {
    Walkthrough,
    ProfileEditButton,
    ProfileEditModal
  },
  data() {
    return {
      uploadedImage: null,
      isNew: false,
      isEditProfile: false,
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
    onFileChange(e) {
      const files = e.target.files;
      if(files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    resetFile() {
      const input = this.$refs.file
      input.type = 'text'
      input.type = 'file'
      this.uploadedImage = ''
    },
    openProfileEditModal() {
      this.isEditProfile = true
    },
    closeProfileEditModal() {
      this.isEditProfile = false
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])

  },
  created() {
    if (this.$route.query.new === 'true') {
      this.isNew = true
    }
  },
  mounted() {
    setTimeout(() => {
      console.log(this.user) // ここだと取得できる
      // なにかしらの処理
    })
  }
}
</script>

<style lang="scss" scoped>

.profile {
  background: $light-gray-color;
}

.profile-inner {
  padding: 60px 0;
}

.profile-card {
  background-color: $white-color;
  border-radius: 20px;
  box-shadow: 4px 4px 8px $light-gray-color;
  margin: 0 auto;
  width: 560px;

  .profile-image {
    height: 350px;
    width: 100%;

    img {
      border-radius: 20px 20px 0px 0px / 20px 20px 0px 0px;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .profile-edit-button {
    position: relative;
  }

  .buttons {
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding: 30px 0 10px;

    input {
      width: 30%;
    }

    button {
      width: 30%;
    }
  }

  .profile-head {
    align-items: center;
    border-bottom: 1px solid rgba(50, 49, 48, .1);
    border-top: 1px solid rgba(50, 49, 48, .1);
    display: flex;
    padding: 30px 20px;

    .profile-icon {
      height: 60px;
      margin: 0 20px 0 0;
      width: 60px;

      img {
        border: 1px solid rgba(0, 0, 0, .1);
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
