<template>
    <div class="container is-fluid">
        <b-modal :active.sync="isActive" has-modal-card full-screen :can-cancel="false">
            <div class="modal-card" style="max-width: 400px; margin: 0 auto;">
                <header class="modal-card-head">
                    <p class="modal-card-title">プロフィール編集</p>
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
                    <b-field 
                    grouped
                    label="経歴" 
                    :label-position="labelPosition" 
                    style="flex-direction: column;"
                    >
                        <b-input
                        v-for="career in profileObject.careers" 
                        :key="career.title"
                        v-model="career.title">
                        </b-input>
                        <div class="buttons">
                            <a class="button is-light is-small" @click.prevent="addItem('careers')">追加する</a>
                        </div>
                    </b-field>
                    <b-field 
                    grouped
                    label="出演作品" 
                    :label-position="labelPosition" 
                    style="flex-direction: column;"
                    >
                        <b-input
                        v-for="appearance in profileObject.appearances" 
                        :key="appearance.title"
                        v-model="appearances.title">
                        </b-input>
                        <div class="buttons">
                            <a class="button is-light is-small" @click.prevent="addItem('appearances')">追加する</a>
                        </div>
                    </b-field>
                    <b-field 
                    grouped
                    label="取得資格" 
                    :label-position="labelPosition" 
                    style="flex-direction: column;"
                    >
                        <b-input
                        v-for="certification in profileObject.certifications" 
                        :key="certification.title"
                        v-model="certifications.title">
                        </b-input>
                        <div class="buttons">
                            <a class="button is-light is-small" @click.prevent="addItem('certifications')">追加する</a>
                        </div>
                    </b-field>
                    <b-field 
                    grouped
                    label="お気に入りの作品" 
                    :label-position="labelPosition" 
                    style="flex-direction: column;"
                    >
                        <b-input
                        v-for="favorite in profileObject.favorites" 
                        :key="favorite.title"
                        v-model="favorites.title">
                        </b-input>
                        <div class="buttons">
                            <a class="button is-light is-small" @click.prevent="addItem('favorites')">追加する</a>
                        </div>
                    </b-field>
                </section>
                <footer class="modal-card-foot">
                    <div class="buttons is-centered">
                        <button class="button" type="button" @click="$parent.closeEditModal()">キャンセル</button>
                        <button class="button is-info">保存</button>
                    </div>
                </footer>
            </div>
        </b-modal>
    </div>
</template>  
<script>
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
            profileObject: Object
        }
    },
    methods: {
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedImage = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        addItem(key) {
            switch(key) {
                case 'careers':
                    break;
                case 'appearances':
                    
                    break;
                case 'certifications':
                    
                    
                    break;
                case 'favorites':
                    
                    break;
                default:
                    break;
            }
        }
    },
    updated() {
        this.profileObject = this.profile
        console.log(this.profileObject)
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
