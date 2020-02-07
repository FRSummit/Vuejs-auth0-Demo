<template>
  <div>
    <Navbar/>
    <!-- <v-content> -->
      <!-- {{ clientId }} -->
      <!-- <router-view></router-view> -->
    <!-- </v-content> -->
    
  </div>
</template>

<script>
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  },
  created() {
    /*console.info('App this router:', this.$router)
    console.info('App.vue main currentRoute : ' + this.$router.currentRoute);
    console.info('App.vue main currentRoute.name : ' + this.$router.currentRoute.name);
    console.info('App.vue main currentRoute.path : ' + this.$router.currentRoute.path);
    console.info('App.vue main currentRoute.component : ' + this.$router.currentRoute.component);*/
  }
};
</script>

<style>
.v-content__wrap {
  background: #EFEFF4;
}
.v-toolbar__content {
  background: #FFFFFF;
}
.mdi-menu::before {
  background: #fff;
  color: #dedede;
}
</style>
