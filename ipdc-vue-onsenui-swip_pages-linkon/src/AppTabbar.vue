<template>
    <v-ons-page>
        <h3>App Tabber</h3>
        <!-- <custom-toolbar modifier="white-content">
            {{ title }}
            <v-ons-toolbar-button slot="left" modifier="white-content"
                @click="$store.commit('splitter/toggle')">
                <v-ons-icon icon="md-menu" class="navIcon"></v-ons-icon>
            </v-ons-toolbar-button>
        </custom-toolbar> -->
        <v-ons-tabbar swipeable position="auto"
            :tabs="tabs"
            :index.sync="index">
        </v-ons-tabbar>
    </v-ons-page>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';
import PlanAndReports from './pages/PlanAndReports.vue';
import Support from './pages/Support.vue';

export default {
    data() {
        return {
            tabs: [
                {
                    label: 'Dashboard',
                    page: Dashboard
                },
                {
                    label: 'Plan & Reports',
                    page: PlanAndReports
                },
                {
                    label: 'Support',
                    page: Support
                }
            ]
        };
    },
    methods: {

    }/*,
    computed: {
        index: {
            get() {
                return this.$store.state.tabbar.index;
            },
            set(newValue) {
                this.$store.commit('tabbar/set', newValue)
            }
        },
        title() {
            return this.tabs[this.index].title || this.tabs[this.index].label;
        }
    }*/
}
</script>