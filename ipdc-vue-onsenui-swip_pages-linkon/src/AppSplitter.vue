<template>
    <v-ons-page>
        <v-ons-splitter>
            <h3>App Spliter</h3>
            <v-ons-splitter-side swipeable side="left" collapse="" width="260px" :open.sync="isOpen">
                <menu-page></menu-page>
            </v-ons-splitter-side>
            <v-ons-splitter-content>
                <app-tabbar></app-tabbar>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </v-ons-page>
</template>

<script>
import AppTabbar from './AppTabbar.vue';
// import MenuPage from './pages/SideMenu.vue';

export default {
    computed: {
        /*isOpen: {
            get() {
                return this.$store.state.splitter.open;
            },
            set(newValue) {
                this.$store.commit('splitter/toggle', newValue)
            }
        }*/
    },
    components: { AppTabbar}
}
</script>