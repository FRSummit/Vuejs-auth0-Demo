<template>
  <v-ons-page>
    
    <!-- <Navbar/> -->
    <div class="dashboard">
      <h1>This is a Dashboard</h1>


      <router-link to='/planandreports' class="router-link">
        <div class="dashboard-items_parent">
          <div class="dashboard-items_child_1">
            <i class="fas fa-file fa-2x"></i>
          </div>
          <div style="margin-top: 10px;">
            <span>Plan &amp; Reports</span>
          </div>
        </div>
      </router-link>

      <router-link to='/Support' class="router-link">
        <div class="dashboard-items_parent">
          <div class="dashboard-items_child_1">
            <i class="fas fa-tools fa-2x"></i>
          </div>
          <div style="margin-top: 10px;">
            <span>Support</span>
          </div>
        </div>
      </router-link>

    </div>
  </v-ons-page>
</template>

<script>
// import Navbar from '../components/Navbar.vue'

export default {
  components: {
    // Navbar
  },

  data () {
    return {
      drawer: false,
      group: null,
    }
  },
  created() {
    // let componentName = {'name': 'Dashboard'};
    // localStorage.setItem('ipdc_current_component_name', JSON.stringify(componentName));
  },
  methods:{
  },
  beforeCreate(){

  },
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
}
.router-link {
  text-decoration: none;
}
.dashboard-items_parent {
  width: 200px;
  padding: 20px 20px 10px 20px;
  background-color: #eee;
  margin: 10px auto;
  border: 1px solid #dedede;
  border-radius: 4px;
  cursor: pointer;
}
.dashboard-items_child_1 {
  color: #fff;
  width: 50%;
  padding: 20px;
  background: #0076FF;
  text-align: center;
  border-radius: 100px;
  margin: 0 auto;
}
.dashboard-items_parent span {
  color: #222;
}
</style>