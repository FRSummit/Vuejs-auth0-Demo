<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="this.$store.state.userIsAuthorized">
      <!-- <v-app-bar color="deep-purple accent-4" dark prominent> -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="#dedede"></v-app-bar-nav-icon>
      <!-- </v-app-bar> -->
      <v-toolbar-title class="headline text-uppercase">
        <span> {{ componentName }} </span>
      </v-toolbar-title>

      <!-- <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn to="/dashboard" class="mr-2">Dashboard</v-btn>
      <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn> -->

          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on" style="position: absolute; right: 5%;">
                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
                <div style="width: 30px">
                    <v-img style="background-size: 100%;" src="../assets/images/user.png"></v-img>
                </div>
              </v-btn>
            </template>

            <v-list>
              <v-list-item class="mr-2">
                  <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title @click="logout" v-if="this.$store.state.userIsAuthorized">
                    Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </v-app-bar>

    

        <!-- <v-navigation-drawer v-model="drawer" absolute bottom temporary> -->
        <v-navigation-drawer v-model="drawer" absolute left temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
                <v-img style="background-size: 100%;" src="../assets/images/ipdc.jpg"></v-img>
            </v-list-item>

            <v-list-item to="/dashboard" class="mr-2">
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item to="/planandreports" class="mr-2">
                <v-list-item-title>Plan &amp; Reports</v-list-item-title>
            </v-list-item>

            <v-list-item to="/support" class="mr-2">
                <v-list-item-title>Support</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>


    
 

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      drawer: false,
      group: null,
      componentName: null
    }
  },
  created() {
    /*let data = localStorage.getItem("ipdc_current_component_name");
    console.log('Component name : ' + JSON.parse(data).name);
    this.componentName = JSON.parse(data).name;
    // localStorage.removeItem('ipdc_current_component_name');*/
  },
  methods:{
    logout(){
      this.$store.dispatch('auth0Logout');
      console.log('logging out');
    }
  },
  beforeCreate(){

  },
    watch: {
      group () {
        this.drawer = false
      }
    },
};
</script>

<style scoped>
.headline .text-uppercase {
  color: #222;
}
</style>