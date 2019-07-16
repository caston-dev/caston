<template>
  <div class="profile">
    <!-- <walkthrough v-show="isNew"></walkthrough> -->
    <div class="profile-inner">
      <div class="profile-card">
        <div class="profile-image">
          <!-- <img
          :src="uploadedImage"
          v-if="uploadedImage"
          />
          <img
          v-else
          src="~static/images/profile-icon.png"
          alt="プロフィール画像"
          /> -->
        </div>
        <div class="profile-head">
          <div class="profile-icon">
            <!-- <img
            :src="uploadedImage"
            v-if="uploadedImage"
            />
            <img
            v-else
            src="~static/images/profile-icon.png"
            alt="プロフィールアイコン画像"
            /> -->
          </div>
          <div class="profile-name">
            <h2>{{ profile.userName }}</h2>
            <p>{{ profile.userName }}</p>
          </div>
          <div class="profile-social-links">

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


      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'
import Status from '~/components/StatusCard'
import Walkthrough from '~/components/Walkthrough'

export default {
  components: {
    Walkthrough,
  },
  data() {
    return {
      uploadedImage: null,
      isNew: false,
      isEditProfile: false,
      profile: {
        userName: '',
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
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])

  },
  created() {
    if (this.$route.query.new === 'true') {
      this.isNew = true
    }

    return firebase.database().ref('/users/' + this.$route.query.id).once('value').then((snapshot) => {
      const user = snapshot.val()
      if (user) {
        this.profile.userName = user.userName
      } else {
        alert('ユーザーがいません')
      }
      this.profile = (snapshot.val() && snapshot.val());
    });
  },
  mounted() {
    setTimeout(() => {
      console.log(this.user) // mapStateのuser
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  background-color: $white-color;
}

.profile-inner {
  padding: 140px 0 60px;
}

.profile-card {
  background-color: $white-color;
  border-radius: 8px;
  margin: 0 auto;
  width: 560px;

  .profile-image {
    height: 350px;
    width: 100%;

    img {
      border-radius: 8px 8px 0px 0px / 8px 8px 0px 0px;
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
    display: flex;
    padding: 30px 20px 15px;

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
    padding: 0 20px;

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

      .profile-body-item-body {
        ul {
          list-style: none;
          padding: 0;
        }
      }

      p {
        color: $gray-color;
        font-size: 16px;
        margin: 15px 0 0;
        opacity: .5;
      }
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
