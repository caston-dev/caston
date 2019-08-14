<template>
    <section class="section">
        <header class="modal-card-head has-background-primary is-centered">
            <p class="modal-card-title has-text-white is-size-5">{{ targetName }}を追加しますか？</p>
        </header>
        <div class="modal-card" style="max-height: 80vh; max-width: 400px; margin: 0 auto;">
            <div class="modal-card-body">
                <div v-if="target === 'career'">
                    <b-field label="Name">
                        <b-input v-model="target"></b-input>
                    </b-field>
                </div>
                <div v-else-if="target === 'appearance'">
                    <b-field label="Name">
                        <b-input v-model="targetItem"></b-input>
                    </b-field>
                </div>
                <div v-else-if="target === 'certification'">
                    <b-field label="Name">
                        <b-input v-model="targetItem"></b-input>
                    </b-field>
                </div>
                <div v-else-if="target === 'favorite'">
                    <b-field label="Name">
                        <b-input v-model="targetItem"></b-input>
                    </b-field>
                </div>
            </div>
        </div>
        <footer class="modal-card-foot">
            <div class="buttons is-centered" style="width: 100%;">
                <a class="button" type="button" @click="$parent.close()">キャンセル</a>
                <a 
                class="button is-info" 
                @click.prevent="updateTarget()"
                v-bind:class="{ 'is-loading': isClicked }"
                >
                    <span>保存する</span>
                </a>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    props: {
        target: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isClicked: false,
            targetItem: ''
        }
    },
    methods: {
        updateTarget() {

        }
    },
    computed: {
        targetName() {
        switch(this.target) {
            case 'career':
                return '経歴'
                break;
            case 'appearance':
                return '過去の出演作品'
                break;
            case 'certification':
                return '取得した資格'
                break;
            case 'favorite':
                return 'お気に入りの作品'
                break;
            default:
                // code block
            }
        }
    }
}
</script>