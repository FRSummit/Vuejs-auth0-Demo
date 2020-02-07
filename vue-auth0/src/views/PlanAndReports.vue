<template>
  <v-ons-page>
    <div class="plan-and-reports">
      <!-- <p class="title">Plan &amp; Report</p> -->
      <h1>Plan &amp; Repors</h1>
        <div class="center search" style="text-align: right;">
            <div id="search-input" placeholder="Search">
                <input type="search" class="hh search-input search-input--material" placeholder="Search">
            </div>
        </div>
        
        <button class="waves-effect waves-light btn" @click="myClickEvent()">Create</button>

        <div class="report-unit-sec">
            <div class="row">
                <v-ons-card class="card-radius plan-card">
                    <div>
                        <router-link to='/report_landing_page'>
                            <div class="content">
                                <p class="report-card">2019_Dec-2019_Dec_Unit_Traning Unit</p>
                            </div>
                        </router-link>
                    </div>
                </v-ons-card>
            </div>
        </div>
    </div>
  </v-ons-page>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },
  created() {
    // let componentName = {'name': 'Plan & Reports'};
    // localStorage.setItem('ipdc_current_component_name', JSON.stringify(componentName));
  },
  methods:{
    myClickEvent() {
      console.log('myClickEvent');
    }
  },
  watch: {
  },
};
</script>

<style scoped>
.plan-and-reports {
    padding: 0 4px;
}
/* .title {
    text-align: left;
    font-size: 26px;
    margin: 10px;
    position: absolute;
    top: 0;
    background: #EE6E73;
    color: #fff;
    min-width: 35%;
} */
.search {
    text-align: right;
}
.search ons-search-input {
    margin-right: 10px;
}
.search input.search-input.search-input--material {
    height: 28px !important;
    background-size: 13px;
    background-position: 8px center;
    padding: 0 8px 0 28px !important;
    width: auto !important;
}
.report-unit-sec {
    padding: 0 12px;
}
.card-radius.plan-card {
    margin: 8px 0;
    width: 100%;
}
.card-radius.plan-card .report-card {
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, .54);
}
</style>