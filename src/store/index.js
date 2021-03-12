import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedData: false,
    ordersVuex: [],
    _formatTime: function (date) {
      let re = new Date(date.replace(/\//g, "-"));
      const year = re.getFullYear();
      const month = re.getMonth() + 1;
      const day = re.getDate();
    
      // 轉成字串，如果低於10，前面加上'0'
      const monthString = month < 10 ? "0" + month : "" + month;
      const dayString = day < 10 ? "0" + day : "" + day;
      let formatTime = `${year}/${monthString}/${dayString}`;
      return formatTime;
    },
    _sortTimestamp: function (date) {
      let timestamp = new Date(date.replace(/\//g, "-"));
      return timestamp.getTime();
    },
  },
  actions: {
    getVuexData(context) {
      axios
        .get("https://www.hsuanyi.org/workapi/ddtJson.json")
        .then(function(response) {
          //console.log(response);

          let rawData = response.data.orders;
         
          context.commit("transferData", rawData);


        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mutations: {
    transferData(state , ordersVuex) {
        for (let i = 0; i < ordersVuex.length; i++) {
          ordersVuex[i].sorTimestamp = state._sortTimestamp(ordersVuex[i].date);
          ordersVuex[i].date = state._formatTime(ordersVuex[i].date);
        }
        state.ordersVuex = ordersVuex;

        // 抓到user之後，將state的loaded改為true
        state.loadedData = true;
      },
    SetFalse(state) {
        state.loadedData = false;
    },
  },
});
