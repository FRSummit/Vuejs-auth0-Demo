<template>
  <v-app>
    <Navbar />
    <ParentCard/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import ParentCard from '@/components/ParentCard'

export default {
  name: 'App',
  components: { Navbar, ParentCard },
  data: () => ({
  }),
};
</script>
