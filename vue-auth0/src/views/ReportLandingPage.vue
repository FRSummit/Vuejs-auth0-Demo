<template>
  <v-ons-page class="report-landing-page">
      <ReportBar/>
        <!-- <h1>Report Landing Page</h1> -->
    <v-container class="head-container">
        <div class="submit-btn">
        <v-row class="submit-btn-sec">
            <v-col class="col-sm-4 btn-col">
                <v-btn center large class="blue white--text right">Submit</v-btn>
            </v-col>
        </v-row>
        </div>

        <hr />

        <div class="report-section">
        <v-row class="v-row">
            <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                <p class="report-txt">Reports:</p>
            </v-col>
            <v-col class="col-sm-9 parent-col" style="padding: 0;">
                <p class="report-txt">2019_Nov-2019_Nov_Unit_Traning Unit</p>
            </v-col>
        </v-row>

        <v-row class="v-row">
            <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                <p class="report-txt">Organization:</p>
            </v-col>
            <v-col class="col-sm-9 parent-col" style="padding: 0;">
                <p class="report-txt">Test Unit</p>
            </v-col>
        </v-row>

        <v-row class="v-row">
            <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                <p class="report-txt">Status:</p>
            </v-col>
            <v-col class="col-sm-9 parent-col" style="padding: 0;">
                <p class="report-txt">Plan Submitted, Report Not Submitted</p>
            </v-col>
        </v-row>
        </div>

        <hr />

        <div class="content-div">
        <div>
            <v-subheader class="content-header">Manpower &amp; Personal Contacts</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Member</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Associate Member</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Preliminary Member</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Supporter Member</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>

        <div>
            <v-subheader class="content-header">Regular &amp; Special Meetings/Programs</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Worker Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">CMS Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">SM Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Member Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Dawah Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">State Outing</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Iftar Gatherings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Learning Meetings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>

        <div>
            <v-subheader class="content-header">Teaching &amp; Learning Program</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Group Study/Discussion</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Study Circle(AM)</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Study Circle</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Practice Dars/Speech</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Quran Study</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Hadith Study</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Quran Class</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>

        <div>
            <v-subheader class="content-header">Dawah Material Distribution</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Book Sale</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Book Distribution</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Email Distribution</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">IPDC Leaflet Distribution</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Other Sale</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Other Distribution</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>

        <div>
            <v-subheader class="content-header">Finance</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Baitul-Mal</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Masjid Project</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Masjid Table Bank</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>

        <div>
            <v-subheader class="content-header">Social Welfare</v-subheader>
            <v-card class="mx-auto" max-width="500">
            <v-list class="list-box">
                <v-list-item-group>
                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Qard-e-Hasana</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Patient Visit</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Social Visit</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Transport</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Shifting</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Shopping</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Food Distribution</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Clean Up Australia</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-item-content">
                    <v-list-item-content>
                    <v-list-item-title class="content-item-title">Other</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>
        </div>
    </v-container>
  </v-ons-page>
</template>

<script>
import ReportBar from '../components/ReportLandingBar.vue'

export default {

  components: {
    ReportBar
  },
  created() {
  }
};
</script>

<style scoped>
.head-container {
  background-color: #efeff4 !important;
  padding: 0;
  padding-top: 56px;
}
.submit-btn {
  padding: 10px 0;
}
.btn-col {
  padding-top: 0;
  padding-bottom: 0;
}
.report-section {
  padding: 0 10px;
}
.report-col {
  max-width: 30%;
  padding: 0;
}
.parent-col {
  padding: 7px 12px;
  padding: 0;
}
.report-txt {
  margin: 0;
}
.content-div {
  padding: 0px 4px
}
.mx-auto {
  box-shadow: none;
}
.list-box {
  border: 1px solid #cccccc !important;
  padding: 0;
}
.content-header {
  font-size: 18px;
}
.list-item-content {
  border-bottom: 1px solid #cccccc !important;
}
.content-item-title {
  font-size: 18px;
}
/*----------*/
.report-landing-page {
    position: absolute;
    top: -56px;
    z-index: 5;
}
.v-row {
    margin: 0px;
}
.submit-btn-sec {
    margin: 0;
}
</style>
