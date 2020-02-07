<template>
    <v-ons-page>
        <div class="dashboard-page-container">
            <div class="planReport" @click="loadView(1)">
                <ons-fab class="planReport-fab">
                    <ons-icon icon="fa-file"></ons-icon>
                </ons-fab>
                <div class="planReport-text">Plan &amp; Reports</div>
            </div>

            <div class="support-section" @click="loadView(2)">
                <ons-fab class="support-fab">
                    <i class="icon ion-md-construct"></i>
                </ons-fab>
                <div class="support-text">Support</div>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
export default {
    methods: {
        loadView(index) {
            this.$store.commit('tabbar/set', index);
        }
    }
}
</script>