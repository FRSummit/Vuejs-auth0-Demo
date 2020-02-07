<template>
  <div>
    <Navbar/>
    <v-content>
      <!-- {{ clientId }} -->
      <router-view></router-view>
    </v-content>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  },
};
</script>

<style scoped>
</style>
