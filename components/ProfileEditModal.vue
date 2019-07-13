<template>
  <transition name="modal">
    <div
    v-show="isOpen"
    class="profile-edit-modal"
    >
      <div class="modal-mask">
        <div class="profile-edit-modal-inner">
          <div class="profile-edit-modal-card">
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
              <div class="profile-image-buttons">
                <input
                type="file"
                ref="file"
                accept="image/*"
                @change="onFileChange($event)"
                >
                <button
                @click="resetFile()"
                class="remove-image-button"
                :class="{ active: uploadedImage }"
                >削除する</button>
              </div>
            </div>
            <div class="profile-body">

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>お名前</h3>
                </div>
                <div class="profile-body-item-body">
                  <b-field>
                    <b-input v-model="profile.name"></b-input>
                  </b-field>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>出身</h3>
                </div>
                <div class="profile-body-item-body">
                  <b-field>
                    <b-input v-model="profile.birthPlace"></b-input>
                  </b-field>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>現在住んでいる地域</h3>
                </div>
                <div class="profile-body-item-body">
                  <b-field>
                    <b-input v-model="profile.livingPlace"></b-input>
                  </b-field>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>経歴</h3>
                </div>
                <div class="profile-body-item-body">
                  <ul v-for="career in profile.careers" :key="career.title">
                    <li>
                      <b-field>
                        <b-input v-model="career.title"></b-input>
                      </b-field>
                    </li>
                  </ul>
                  <div class="form-button">
                    <button @click="onClickAddButton('career')">追加する</button>
                  </div>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>出演作品</h3>
                </div>
                <div class="profile-body-item-body">
                  <ul v-for="appearance in profile.appearances" :key="appearance.title">
                    <li>
                      <b-field>
                        <b-input v-model="appearance.title"></b-input>
                      </b-field>
                    </li>
                  </ul>
                  <div class="form-button">
                    <button @click="onClickAddButton('appearance')">追加する</button>
                  </div>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>資格・特技</h3>
                </div>
                <div class="profile-body-item-body">
                  <ul v-for="certification in profile.certifications" :key="certification.title">
                    <li>
                      <b-field>
                        <b-input v-model="certification.title"></b-input>
                      </b-field>
                    </li>
                  </ul>
                  <div class="form-button">
                    <button @click="onClickAddButton('certification')">追加する</button>
                  </div>
                </div>
              </div>

              <div class="profile-body-item">
                <div class="profile-body-item-head">
                  <h3>好きな映画や演劇</h3>
                </div>
                <div class="profile-body-item-body">
                  <ul v-for="favorite in profile.favorites" :key="favorite.title">
                    <li>
                      <b-field>
                        <b-input v-model="favorite.title"></b-input>
                      </b-field>
                    </li>
                  </ul>
                  <div class="form-button">
                    <button @click="onClickAddButton('favorite')">追加する</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-edit-buttons">
              <button @click.prevent="closeModal" class="cancel-button">
                キャンセル
              </button>
              <button href="#" class="save-button">
                保存する
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'
import Status from '~/components/StatusCard'



export default {
  props: {
    'isEditProfile': {
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      uploadedImage: null,
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
    onClickAddButton(key) {
      switch (key) {
        case 'career':

          break;
        case 'appearance':

          break;
        case 'certification':

          break;
        case 'favorite':

          break;
        default:
          break;
      }
    },
    closeModal() {
      this.$emit('close-profile-edit-modal')
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

    this.isOpen = this.isEditProfile
  },
  mounted() {
    setTimeout(() => {
      console.log(this.user) // ここだと取得できる
      // なにかしらの処理
      this.profile.name
    })
  },
  watch: {
    immediate: true,
    handler() {
      this.isOpen = this.isEditProfile
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

.profile-edit-modal {
  background: $white-color;
}

.profile-edit-modal-inner {
  display: table-cell;
  padding: 60px 0;
  vertical-align: middle;
}

.profile-edit-modal-card {
  background-color: $white-color;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  height: 100%;
  margin: 0 auto;
  overflow: scroll;
  transition: all .3s ease;
  width: 35%;
  z-index: 3;

  .profile-image {
    height: 350px;
    position: relative;
    width: 100%;

    .profile-image-buttons {
      align-items: center;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      padding: 30px 0 10px;
      position: absolute;
      width: 100%;

      .remove-image-button {
        background-color: $gray-color;
        border-radius: 5px;
        color: $white-color;
        cursor: not-allowed;
        font-size: 14px;
        opacity: .2;
        padding: 5px 10px;
      }

      .active {
        border: 0;
        cursor: pointer;
        opacity: 1;
      }
    }

    img {
      border-radius: 20px 20px 0px 0px / 20px 20px 0px 0px;
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .profile-body {
    border-bottom: 1px solid rgba(50, 49, 48, .1);
    border-top: 1px solid rgba(50, 49, 48, .1);
    padding: 60px 30px 0;

    .profile-body-item {
      margin: 0 0 40px;

      .profile-body-item-head {
        align-items: center;
        display: flex;
        justify-content: space-between;

        h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 10px;
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
          margin: 0 0 15px;
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

  .profile-edit-buttons {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    .cancel-button {
      background-color: $gray-color;
      border-radius: 0;
      border-radius: 5px;
      color: $white-color;
      cursor: pointer;
      font-size: 16px;
      margin: 0 20px;
      padding: 15px 30px;
    }

    .save-button {
      background-color: $blue-color;
      border-radius: 0;
      border-radius: 5px;
      color: $white-color;
      cursor: pointer;
      font-size: 16px;
      margin: 0 20px;
      padding: 15px 30px;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .profile-edit-modal-card,
.modal-leave-active .profile-edit-modal-card {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
