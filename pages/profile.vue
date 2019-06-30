<template>
  <div class="profile">
    <status v-show="isNew"></status>
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
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>

            <a href="#">
              <p>{{ profile.birthPlace }}</p>
            </a>
          </div>
          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>現在住んでいる地域</h3>
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <a href="#">
              <p>{{ profile.livingPlace }}</p>
            </a>
          </div>
          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>経歴</h3>
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <a v-for="career in profile.careers"  href="#" :key="career.title">
              <p>{{ career.title }}</p>
            </a>
          </div>
          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>出演作品</h3>
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <a v-for="appearance in profile.appearances" href="#" :key="appearance.title">
              <p>{{ appearance.title }}</p>
            </a>
          </div>
          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>資格・特技</h3>
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <a v-for="certification in profile.certifications"  href="#" :key="certification.title">
              <p>{{ certification.title }}</p>
            </a>
          </div>
          <div class="profile-body-item">
            <div class="profile-body-item-head">
              <h3>好きな映画や演劇</h3>
              <a href="#">
                <font-awesome-icon icon="edit"></font-awesome-icon>編集する
              </a>
            </div>
            <a v-for="favorite in profile.favorites" href="#" :key="favorite">
              <p>{{ favorite }}</p>
            </a>
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
import Status from '~/components/StatusCard.vue'

export default {
  components: {
    Status,
  },
  data() {
    return {
      isNew: false,
      profile: {
        name: 'お名前',
        birthPlace: '出身地',
        livingPlace: '現在住んでいる地域',
        careers: [
          {
            title: '経歴のタイトル',
            body: '経歴の内容'
          }
        ],
        appearances: [
          {
            title: '出演作',
            role: '役'
          }
        ],
        certifications: [
          {
            title: '資格名',
            acquisitionDate: '1993/12/31'
          }
        ],
        favorites: [
          'ダイハード'
        ]
      }
    }
  },
  created() {
    if (this.$route.query.new === 'true') {
      this.isNew = true
    }
  }
}
</script>

<style lang="scss">

.profile {
  background: $theme-color;
  height: 100%;
}

.profile-inner {
  padding: 100px 0;
}

.profile-card {
  background-color: $white-color;
  border-radius: 20px;
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
        }

        a {
          color: $gray-color;
          font-size: 12px;

          svg {
            margin: 0 2px 0 0;
          }
        }
      }

      a {
        text-decoration: none;
        color: $gray-color;

        p {
          font-size: 16px;
          opacity: .5;
        }
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
      margin: 30px auto 0;
      padding: 15px 30px;
      text-decoration: none;
      width: 80%;
    }
  }
}
</style>
