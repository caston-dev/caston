<template>
    <div class="container is-fluid">
        <b-modal :active.sync="isActive" has-modal-card full-screen :can-cancel="false">
            <div class="modal-card" style="max-width: 400px; margin: 0 auto;">
                <header class="modal-card-head has-background-primary">
                    <p class="modal-card-title has-text-white is-size-5">プロフィール編集</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="プロフィール画像" :label-position="labelPosition">
                        <figure class="image">
                            <img v-if="uploadedImage" :src="uploadedImage">
                            <img v-else src="https://bulma.io/images/placeholders/480x480.png">
                            <input type="file" v-on:change="onFileChange" class="image-input" accept="image/*">
                        </figure>
                    </b-field>
                    <b-field label="お名前" :label-position="labelPosition">
                        <b-input v-model="profileObject.userName">
                        </b-input>
                    </b-field>
                    <b-field label="出身地" :label-position="labelPosition">
                        <b-input v-model="profileObject.birthPlace">
                        </b-input>
                    </b-field>
                    <b-field label="現在住んでいる地域" :label-position="labelPosition">
                        <b-input v-model="profileObject.livingPlace">
                        </b-input>
                    </b-field>

                    <!-- <b-field
                    grouped 
                    label="経歴" 
                    style="display: block;"
                    :label-position="labelPosition" 
                    >
                        <b-field                         
                        v-for="career in profileObject.careers" 
                        :key="career.title"
                        >
                            <b-input v-model="career.title"></b-input>
                        </b-field>
                        <div class="buttons">
                            <a class="button is-light" @click.prevent="addItem('careers')">追加する</a>
                        </div>
                    </b-field> -->
                </section>
                <footer class="modal-card-foot">
                    <div class="buttons is-centered" style="width: 100%;">
                        <a class="button" type="button" @click="$parent.closeEditModal()">キャンセル</a>
                        <a 
                        class="button is-info" 
                        @click.prevent="updateProfle()"
                        v-bind:class="{ 'is-loading': isClicked }"
                        >
                            <span>保存する</span>
                        </a>
                    </div>
                </footer>
            </div>
        </b-modal>
    </div>
</template>  
<script>
import firebase from 'firebase'
import { mapGetters, mapState } from 'vuex'

export default {
    props: {
        isActive: {
            require: true,
            type: Boolean
        },
        profile: {
            require: true,
            type: Object
        }
    },
    data() {
        return {
            uploadedImage: null,
            labelPosition: '',
            profileObject: Object,
            updated: false,
            isClicked: false
        }
    },
    methods: {
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files
            this.createImage(files[0])
        },
        createImage(file) {
            let reader = new FileReader()
            reader.onload = (e) => {
                this.uploadedImage = e.target.result
            };
            reader.readAsDataURL(file)
        },
        addItem(key) {
            
        },
        updateProfle() {
            this.isClicked = true
            console.log(this.user)
            var userRef = firebase.database().ref('/users/' + this.$route.query.id)
            userRef.update(this.profileObject, err => {
                if (err) {
                // The write failed...
                } else {
                    this.isClicked = false
                    this.$parent.closeEditModal()
                }
            });
        }
    },
    computed: {
        ...mapState(['user']),
    },
    updated() {
        if (!this.updated) {
            this.updated = true
            this.profileObject = this.profile
        }
    }
}
</script>
<style lang="scss" scoped>
.image {
    height: 300px;
    position: relative;
    width: 100%;

    .image-input {
        bottom: 20px;
        position: absolute;
        right: 20px;
    }

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
}
</style>
