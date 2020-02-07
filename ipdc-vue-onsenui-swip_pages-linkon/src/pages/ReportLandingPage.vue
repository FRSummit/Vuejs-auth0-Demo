<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="left">
                <ons-back-button>Reports</ons-back-button>
                <div class="center">Report Landing Page</div>
                <ons-fab class="right cancel-fab">
                    <ons-icon icon="fa-close"></ons-icon>
                </ons-fab>
            </div>
        </v-ons-toolbar>

        <div class="submit-cancel">
            <ons-button class="btn submitBtn">Submit</ons-button>
        </div>

        <div class="report-des">
            <p><span class="report-label">Report : </span> <span class="report-text">2019_Nov-2019_Nov_Unit_Traning
                    Unit</span></p>
            <p><span class="report-label">Organization : </span> <span class="report-text">Test Unit</span></p>
            <p><span class="report-label">Status : </span> <span class="report-text">Plan Submitted, Report Not
                    Submitted</span></p>
        </div>

        <div class="personal-contact report-align">
            <ons-list-title class="heading-title">Manpower & Personal Contacts</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    @click="pushPage">
                    <div class="center">
                        Member
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    @click="pushPage">>
                    <div class="center">
                        Associate Member
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    @click="pushPage">>
                    <div class="center">
                        Preliminary Member
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    @click="pushPage">>
                    <div class="center">
                        Supporter Member
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
        <div class="meetings-programs report-align">
            <ons-list-title class="heading-title">Regular & Special Meetings/Programs</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        Worker Meetings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        CMS Meetings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        SM Meetings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        Member Meetings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        Dawah Meetings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        State Outing
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        Iftar Gatherings
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'meetings.html', 'title': 'meetings'})">
                    <div class="center">
                        Learning Meetings
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
        <div class="teaching-learning report-align">
            <ons-list-title class="heading-title">Teaching & Learning Program</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Group Study/Discussion
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Study Circle(AM)
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Study Circle
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Practice Dars/Speech
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Quran Study
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Hadith Study
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    <div class="center">
                        Quran Class
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
        <div class="dawah-material report-align">
            <ons-list-title class="heading-title">Dawah Material Distribution</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        Book Sale
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        Book Distribution
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        Email Distribution
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        IPDC Leaflet Distribution
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        Other Sale
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'dawah.html', 'title': 'dawah'})">
                    <div class="center">
                        Other Distribution
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
        <div class="finance report-align">
            <ons-list-title class="heading-title">Finance</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'finance.html', 'title': 'finance'})">
                    <div class="center">
                        Baitul-Mal
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'finance.html', 'title': 'finance'})">
                    <div class="center">
                        Masjid Project
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'finance.html', 'title': 'finance'})">
                    <div class="center">
                        Masjid Table Bank
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
        <div class="social-welfare report-align">
            <ons-list-title class="heading-title">Social Welfare</ons-list-title>
            <ons-list modifier="inset">
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Qard-e-Hasana
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Patient Visit
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Social Visit
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Transport
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Shifting
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Shopping
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Food Distribution
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Clean Up Australia
                    </div>
                </ons-list-item>
                <ons-list-item tappable modifier="longdivider"
                    onclick="fn.pushPage({'id': 'social.html', 'title': 'social'})">
                    <div class="center">
                        Other
                    </div>
                </ons-list-item>
            </ons-list>
        </div>
    </v-ons-page>
</template>

<script>
import Member from './Member.vue';
//import Meeetings from './Meetings.vue';

export default {
    data() {
        return {
            memberPages: [
                {
                    component: Member,
                    label: Member
                }
            ],
            meetingsPages: [

            ]
        }
    },
    methods: {
        pushPage() {
            this.$store.commit('navigator/push', Member);
        }
    }
}
</script>