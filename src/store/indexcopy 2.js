import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';


Vue.use(Vuex);
// Vue.mixin(globalMixin);

export default new Vuex.Store({
  state: {
    loadedData: false,
    ordersVuex: [],
    count: 1,
  },
  actions: {
    GetUser(context) {
      axios
        .get("https://www.hsuanyi.org/workapi/ddtJson.json")
        .then(function(response) {
          console.log(response);

          // 在 actions 裡面，可以用 context.commit 來呼叫 mutations，
          // context.commit("MyMutations");
          console.log("load資料了");
          let rawData = response.data.orders;
             //整理資料
        //   for (let i = 0; i < rawData.length; i++) {
        //     rawData[i].sorTimestamp = _sortTimestamp(rawData[i].date);
        //     rawData[i].date = _formatTime(rawData[i].date);
        //   }
         
          context.commit("MyMutations", rawData);

        // 也可以用 context.dispatch 來呼叫另外一個 actions。
        //   context.dispatch("AnotherActions");

        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // AnotherActions() {
    //   console.log("Another Actions run!");
    // },
    incrementCount(context, counting) {
      //context 後方可以帶入要傳入的參數，如果沒有參數可以省略。
      context.commit("INCREMENT_COUNT", counting);
    },
  },
  mutations: {
    MyMutations(state , ordersVuex) {
        console.log('MyMutations run!');
        // 抓到user之後，將state的loaded改為true
        state.ordersVuex = ordersVuex;
        state.loadedData = true;
      },
    SetFalse(state) {
        state.loadedData = false;
    },
    INCREMENT_COUNT(state, counting) {
      //state 後方可以帶入要傳入的參數，如果沒有參數可以省略。
      state.count += counting;
    },
  },
});
