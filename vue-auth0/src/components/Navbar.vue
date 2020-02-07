<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="this.$store.state.userIsAuthorized">
      <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn>
    </v-app-bar>

    <v-content>
      {{ clientId }}
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {

  components: {
  },

  data: () => ({
    //
  }),

  data () {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('auth0Logout');
      console.log('logging out');
    }
  },
  beforeCreate(){

  }
};
</script>