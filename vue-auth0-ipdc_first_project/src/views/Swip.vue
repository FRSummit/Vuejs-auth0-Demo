<template>
  <v-card color="basil">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow style="">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <!-- <v-tabs-items v-model="tab" style="position: absolute; top: 0; width: 100%;"> -->
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card color="basil" flat>
          <v-card-text>{{ text }}</v-card-text>
          <!-- <SwipPage1/> -->
          <div v-if="item == 'SwipPage1'"><SwipPage1/></div>
          <div v-if="item == 'SwipPage2'"><SwipPage2/></div>
          <!-- <div>{{item}}</div> -->
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>>

<script>
import SwipPage1 from './SwipPage1.vue';
import SwipPage2 from './SwipPage2.vue';
import SwipPage3 from './SwipPage3.vue';

const homePage = SwipPage1;
const newsPage = SwipPage2;
const settingsPage = SwipPage3;

export default {
  components: {
    SwipPage1,
    SwipPage2
  },
    data () {
      return {
        tab: null,
        items: [
          'SwipPage1', 'SwipPage2',
        ],
        page: [{SwipPage1, SwipPage2}],
        text: 'Lorem ipsum dolor sit amet, consece magna aliqua. Ut enim ad nisi ut aliquip ex ea commodo consequat.',
      }
    },
}
</script>

<style scoped>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}