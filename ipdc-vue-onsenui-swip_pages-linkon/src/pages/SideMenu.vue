<template>
    <v-ons-page>
        <div class="profile-pic">
            <img class="ipdc-logo" src="../assets/ipdc.jpg" alt="IPDC Logo">
        </div>
        <v-ons-list>
            <v-ons-list-item v-for="(item, index) in menuItems" :key="item.title" @click="loadView(index)">
                <div class="left">
                    <v-ons-icon fixed-width class="dashboard-icon" :icon="item.icon"></v-ons-icon>
                </div>
                <div class="center list-border">
                    {{ item.title }}
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
export default {
    methods: {
        loadView(index) {
            this.$store.commit('tabbar/set', index);
            this.$store.commit('splitter/toggle');
        },
        loadLink(url) {
            window.open(url, '_blank');
        }
    },
    data() {
        return {
            menuItems: [
                {
                    title: 'Dashboard',
                    icon: 'ion-md-home'
                },
                {
                    title: 'Plan & Reports',
                    icon: 'ion-md-document'
                },
                {
                    title: 'Support',
                    icon: 'ion-md-construct'
                }
            ]
        }
    }
}
</script>