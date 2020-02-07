<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Member</div>
            <div class="left">
                <ons-back-button @click="goBack">Back</ons-back-button>
            </div>
        </v-ons-toolbar>
        <div>
            <v-ons-list>
                <v-ons-list-header class="heading-title">Member</v-ons-list-header>
                <v-ons-list-item class="input-items">
                    <ons-input class="input-field" modifier="material" placeholder="Last Period"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Target"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Actual"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Increased"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Decreased"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Member Contact"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Comment"></ons-input>
                </v-ons-list-item>

                <v-ons-button class="button-margin next-button"
                    @click="pushPage">
                    Save
                </v-ons-button>
            </v-ons-list>
        </div>
    </v-ons-page>
</template>

<script>
import Member from './Member.vue';
import ReportLandingPage from './ReportLandingPage.vue';

export default {
    methods: {
        pushPage() {
            this.$store.commit('navigator/push', Member);
        },
        goBack() {
            this.$store.commit('navigator/push', ReportLandingPage);
        }
    }
}
</script>