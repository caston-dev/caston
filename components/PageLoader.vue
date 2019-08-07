<template>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
</template>
<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isFullPage: true
        }
    }
}
</script>