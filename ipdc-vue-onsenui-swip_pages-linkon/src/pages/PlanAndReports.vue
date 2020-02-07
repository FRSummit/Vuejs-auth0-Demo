<template>
    <v-ons-page>
        <div class="center search">
            <v-ons-search-input id="search-input" v-model="search" placeholder="Search"></v-ons-search-input>
            <!-- <input id="search-input" v-model="search" placeholder="Search"> -->
        </div>
        <v-ons-card class="card-radius plan-card">
            <div class="content">
                <p class="report-card" v-for="report in filteredList" :key="report.uri" @click="pushPage">
                    {{ report.Title }}
                </p>
            </div>
        </v-ons-card>

        <!-- <v-ons-popover id="popover-dialog" class="pop-top" cancelable direction="down" cover-target target="#info-button">
            <v-ons-list id="popover-list">
                <v-ons-list-item class="more-options" tappable>
                    <div class="center list-border">State Name</div>
                </v-ons-list-item>
                <v-ons-list-item class="more-options" tappable>
                    <div class="center">Period</div>
                </v-ons-list-item>
            </v-ons-list>
        </v-ons-popover> -->

        <v-ons-popover class="pop-top" cancelable :visible.sync="popoverVisible" :target="popoverTarget"
        :direction="popoverDirection" :cover-target="coverTarget">
            <!-- <p style="text-align: center">Lorem ipsum</p> -->
            <v-ons-list>
                <v-ons-list-item class="input-items">
                    State Name
                    <ons-input class="input-field" modifier="material"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item class="input-items">
                    Period
                    <v-ons-select style="width: 50%" v-model="selectedItem">
                        <option v-for="item in items" :value="item.value" :key="item.value">
                            {{ item.text }}
                        </option>
                    </v-ons-select>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-button class="button-margin">Save</v-ons-button>            
                </v-ons-list-item>
            </v-ons-list>
        </v-ons-popover>

        <v-ons-button class="button-margin next-button" @click="showPopover($event, 'up')">
            Create
        </v-ons-button>
    </v-ons-page>
</template>

<script>
import axios from 'axios'
import ReportLandingPage from './ReportLandingPage.vue';

export default {
    data() {
        return {
            search: '',
            reports: null,
            popoverVisible: false,
            popoverTarget: null,
            popoverDirection: 'up',
            coverTarget: false,
            selectedItem: '',
            items: [
                { text: '2019 Jan-Apr', value: '2019 Jan-Apr' },
                { text: '2019 May-Aug', value: '2019 May-Aug' },
                { text: '2019 Sept-Dec', value: '2019 Sept-Dec' }
            ]
        }
    },
    mounted() {
        axios
            .get('https://localhost:44397/api/reports')
            .then(response => (this.reports = response.data))
    },
    computed: {
        filteredList() {
            var self = this;
            if(this.search == '') {
                return this.reports;
            }

            return this.reports.filter(report =>{
                return report.Title.indexOf(self.search) >= 0;
            })

            // return this.resources.filter(report => {
            //     return  report.Title.toLowerCase().includes(this.search.toLowerCase());
            //     //return report.control && report.control.toLowerCase()
            //     //return this.search.toLowerCase().split(' ').every(v => report.Title.toLowerCase().includes(v))
            // })
        }
    },
    methods: {
        pushPage() {
            this.$store.commit('navigator/push', ReportLandingPage);
        },
        showDialog(id) {
            var infoButton = document.getElementById('info-button');
            var elem = document.getElementById(id);
            elem.show(infoButton);
        },
        showPopover(event, direction, coverTarget = false) {
            this.popoverTarget = event;
            this.popoverDirection = direction;
            this.coverTarget = coverTarget;
            this.popoverVisible = true;
        }
    }    
}
</script>