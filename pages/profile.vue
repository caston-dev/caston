<template>
  <div style="height: 100vh;">
    <div class="container is-fullhd" v-if="isShow">
      <profile-edit-modal :is-active="isProfileEdit" :profile="profile" />
      <breadcrumbs />
      <section class="section">
        <transition name="fade">
          <div class="box" style="max-width: 400px; margin: 0 auto; padding: 0;">
            <div class="media">
              <figure class="image">
                <img src="https://bulma.io/images/placeholders/480x480.png">
              </figure>
            </div>
            <div class="profile">
              <div class="profile-item">
                <h1>{{ this.profile.userName }}</h1>
              </div>
              <div class="profile-item profile-button columns is-centered" style="margin: 0;">
                <div v-if="this.isSelf" class="buttons has-addons is-centered column">
                  <a class="button is-rounded is-info is-fullwidth" @click="openEditModal">プロフィールを編集する</a>
                </div>
                <div v-else class="buttons column">
                  <a href="button is-rounded is-info">Follow</a>
                  <a href="button is-rounded is-info">Like</a>
                </div>
              </div>
              <div class="profile-item">
                <h2>出身地</h2>
                <p v-if="this.profile.birthPlace">{{ this.profile.birthPlace }}</p>
                <p v-else>???</p>
              </div>
              <div class="profile-item">
                <h2>現在住んでいる地域</h2>
                <p v-if="this.profile.livingPlace">{{ this.profile.livingPlace }}</p>
                <p v-else>???</p>
              </div>
              <div class="profile-item">
                <h2>経歴</h2>
                <ul>
                  <li v-for="career in this.profile.careers" :key="career.title">
                    {{ career.title }}
                  </li>
                </ul>
              </div>
              <div class="profile-item">
                <h2>過去の出演作品</h2>
                <ul>
                  <li v-for="appearance in this.profile.appearances" :key="appearance.title">
                    {{ appearance.title }}
                  </li>
                </ul>
              </div>
              <div class="profile-item">
                <h2>取得した資格</h2>
                <ul>
                  <li v-for="certification in this.profile.certifications" :key="certification.title">
                    {{ certification.title }}
                  </li>
                </ul>
              </div>
              <div class="profile-item">
                <h2>お気に入りの作品</h2>
                <ul>
                  <li v-for="career in this.profile.careers" :key="career.title">
                    {{ career.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </section>
    </div>
    <page-loader v-else :is-loading="!isShow"></page-loader>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'
import Status from '~/components/StatusCard'
import Walkthrough from '~/components/Walkthrough'
import Breadcrumbs from '~/components/Breadcrumbs'
import ProfileEditModal from '~/components/ProfileEditModal'
import PageLoader from '~/components/PageLoader'

export default {
  components: {
    Walkthrough,
    Breadcrumbs,
    ProfileEditModal,
    PageLoader
  },
  data() {
    return {
      isNew: false,
      isProfileEdit: false,
      isShow: false,
      isSelf: false,
      profile: {
        userName: '',
        birthPlace: '',
        livingPlace: '',
        careers: [],
        appearances: [],
        certifications: [],
        favorites: []
      }
    }
  },
  methods: {
    openEditModal() {
      this.isProfileEdit = true
    },
    closeEditModal() {
      this.isProfileEdit = false
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
    return firebase.database().ref('/users/' + this.$route.query.id).once('value').then((snapshot) => {
      if (snapshot.val()) {
        this.profile = snapshot.val()
        this.isShow = true
      }
    });
  },
  mounted() {
    setTimeout(() => {
      if (this.$route.query.id === this.user.uid) {
        this.isSelf = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
}

.image {
  height: 300px;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.profile-item {
  padding: 10px 0;
  text-align: left;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
}

.profile-button {
  
}
</style>
