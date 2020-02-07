<template>
    <v-ons-navigator :page-stack="pageStack" :pop-page="storePop"></v-ons-navigator>
</template>

<script>
import AppTabbar from './AppTabbar';

export default {
    beforeCreate() {
        this.$store.commit('navigator/push', AppTabbar);
    },
    computed: {
        pageStack() {
            return this.$store.state.navigator.stack;
        }
    },
    methods: {
        storePop() {
            this.$store.commit('navigator/pop');
        }
    }
}
</script>