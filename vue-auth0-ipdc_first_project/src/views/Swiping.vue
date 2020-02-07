<template>
        <v-ons-page>
            <!-- <v-ons-toolbar><div class="center">{{ title }}</div></v-ons-toolbar> -->
            <!-- <v-ons-tabbar swipeable position="auto" :tabs="tabs" :visible="true" :index.sync="index"></v-ons-tabbar> -->

<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<div id="app"></div>

        </v-ons-page>
</template>

<script>
import SwipPage1 from './SwipPage1.vue';
import SwipPage2 from './SwipPage2.vue';
import SwipPage3 from './SwipPage3.vue';
/*// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
// RGB colors
const red = [244, 67, 54];
const blue = [30, 136, 229];
const purple = [103, 58, 183];*/
/*const homePage = {
  template: '#home',
  props: ['myProp']
};

const newsPage = {
  template: '#news'
};

const settingsPage = {
  template: '#settings'
};*/
const homePage = SwipPage1;
const newsPage = SwipPage2;
const settingsPage = SwipPage3;

export default {
//   data () {
//     return {
//             tabs: [
//                 {
//                     label: 'SwipPage1',
//                     page: SwipPage1
//                 },
//                 {
//                     label: 'SwipPage2',
//                     page: SwipPage2
//                 },
//                 {
//                     label: 'SwipPage3',
//                     page: SwipPage3
//                 }
//             ]
//     };
//   },
//   computed: {
//     swipeTheme() {
//       return {
//         backgroundColor: `rgb(${this.colors.join(',')})`,
//         transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
//       }
//     }
//   },
//   methods: {
//     onSwipe(index, animationOptions) {
//       // Apply the same transition as v-ons-tabbar
//       this.animationOptions = animationOptions;
//       // Interpolate colors
//       const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
//       this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
//     }
//   }
  
  el: '#app',
  template: '#main',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
        //   icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: SwipPage1,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
        //   icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: SwipPage2,
          badge: 7,
          key: "newsPage"
        },
        {
        //   icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: SwipPage3,
          key: "settingsPage"
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }


};
</script>



<style scoped>

</style>