import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import storeLike from './store.js';
import CustomToolbar from './partials/CustomToolbar.vue';
import Vue from 'vue'
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSimpleAlert from "vue-simple-alert";
import AppNavigator from './AppNavigator.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueOnsen);
Vue.use(VueAxios, axios);
Vue.use(VueSimpleAlert);

Vue.component('custom-toolbar', CustomToolbar);

new Vue({
  render: h => h(AppNavigator),
  store: new Vuex.Store(storeLike)
}).$mount('#app')
