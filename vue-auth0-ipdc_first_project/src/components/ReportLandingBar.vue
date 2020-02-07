<template>
  <div>
    <ons-toolbar>
      <div class="left">
        <router-link to='/planandreports'>
          <ons-back-button>Reports</ons-back-button>
        </router-link>
      </div>
      <div class="center">Report Landing Page</div>
      <ons-fab class="right cancel-fab">
        <ons-icon icon="fa-close" class="ons-icon fa-close fa"></ons-icon>
      </ons-fab>
    </ons-toolbar>
  </div>
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
  },
  methods:{
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