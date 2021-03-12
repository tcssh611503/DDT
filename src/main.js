import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  Vuex,
  store,
  render: h => h(App),
}).$mount('#app')






