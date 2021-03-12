<template>
  <div class="box">
      <div class="hello">
    <!-- <p>{{count}}</p>
    <button @click="increase">Click Me</button> -->
      <p>{{showData[0].name}}</p>
  </div>

  <!-- Way1 Vuex -->
  <div class="list">
      <div class="progress-part">
        <div class="part-title">
          <div class="i"></div>
          <h1 class="title">進行中</h1>
        </div>
        <div class="card" v-for="(item, index) in filterProgress" :key="index">
          <div class="card-left">
            <div class="img">
              <img :src="item.logo" alt="" />
            </div>
          </div>
          <div class="card-right">
            <div class="right-top">
              <div class="type">
                <p>{{ item.status.type }}</p>
              </div>
              <div class="date">
                <p>預計出貨:{{ item.date }}</p>
              </div>
            </div>
            <div class="right-bottom">
              <div class="name">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="card-icon">
            <div class="arrow"><span>></span></div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="progress-part">
          <div class="part-title">
            <div class="i"></div>
            <h1 class="title">已完成</h1>
          </div>
        </div>
        <div class="card" v-for="(item, index) in filterFinish" :key="index">
          <div class="card-left">
            <div class="img">
              <img :src="item.logo" alt="" />
            </div>
          </div>
          <div class="card-right">
            <div class="right-top">
              <div class="type">
                <p>{{ item.status.type }}</p>
              </div>
            </div>
            <div class="right-bottom">
              <div class="name">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="card-icon">
            <div class="arrow"><span>></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Way2  methods: getData()  -->
  <!-- <div class="list">
      <div class="progress-part">
        <div class="part-title">
          <div class="i"></div>
          <h1 class="title">進行中</h1>
        </div>
        <div class="card" v-for="(item, index) in filterProgress" :key="index">
          <div class="card-left">
            <div class="img">
              <img :src="item.logo" alt="" />
            </div>
          </div>
          <div class="card-right">
            <div class="right-top">
              <div class="type">
                <p>{{ item.status.type }}</p>
              </div>
              <div class="date">
                <p>預計出貨:{{ item.date }}</p>
              </div>
            </div>
            <div class="right-bottom">
              <div class="name">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="card-icon">
            <div class="arrow"><span>></span></div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="progress-part">
          <div class="part-title">
            <div class="i"></div>
            <h1 class="title">已完成</h1>
          </div>
        </div>
        <div class="card" v-for="(item, index) in filterFinish" :key="index">
          <div class="card-left">
            <div class="img">
              <img :src="item.logo" alt="" />
            </div>
          </div>
          <div class="card-right">
            <div class="right-top">
              <div class="type">
                <p>{{ item.status.type }}</p>
              </div>
            </div>
            <div class="right-bottom">
              <div class="name">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div class="card-icon">
            <div class="arrow"><span>></span></div>
          </div>
        </div>
      </div>
    </div>
  </div> -->



</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      orders: [],
      counting: 10
    };
  },
  created() {},
  mounted() {
    this.getData();
    // 1.  頁面讀取完成時，吃 randomuser API
    this.$store.dispatch("GetUser");
  },
  computed: { 
    //way1
    // 2. 將 state 中的 Loaded 用 computed 抓出來給 userLoaded 做使用
    userLoaded() {
      return this.$store.state.loadedData;
    },
    count() {
      return this.$store.state.count;
    },
    showData() {
      return this.$store.state.ordersVuex;
    },
    filterProgressVuex: function () {
      return this.showData
        .filter((item) => item.status.code == 1 || item.status.code == 2)
        .sort(function (a, b) {
          return a.sorTimestamp < b.sorTimestamp ? 1 : -1;
        });
    },
    filterFinishVuex: function () {
      return this.showData
        .filter((item) => item.status.code == 3 || item.status.code == 4)
        .sort(function (a, b) {
          return a.sorTimestamp < b.sorTimestamp ? 1 : -1;
        });
    },

    //way2
    filterProgress: function () {
      return this.orders
        .filter((item) => item.status.code == 1 || item.status.code == 2)
        .sort(function (a, b) {
          return a.sorTimestamp < b.sorTimestamp ? 1 : -1;
        });
    },
    filterFinish: function () {
      return this.orders
        .filter((item) => item.status.code == 3 || item.status.code == 4)
        .sort(function (a, b) {
          return a.sorTimestamp < b.sorTimestamp ? 1 : -1;
        });
    },
  },
  methods: {
    // 3. Reload 按鈕按下去的時候，把 state 的 Loaded 改回 false，然後再執行一次 GetUser 這個 actions
    Reload() {
      this.$store.commit("SetFalse");
      this.$store.dispatch("GetUser");
    },
    getData() {
      let _vm = this;
      this.$http
        .get("https://www.hsuanyi.org/workapi/ddtJson.json")
        .then((response) => {
          try {
            let rawData = response.data.orders;
            for (let i = 0; i < rawData.length; i++) {
              rawData[i].sorTimestamp = this.sortTimestamp(rawData[i].date);
              rawData[i].date = this.formatTime(rawData[i].date);
            }

            // this.$store.dispatch('incrementCount', ...rawData);
            _vm.orders.push(...rawData);

          } catch (error) {
            console.log(error);
          }
        });
    },
    formatTime(date) {
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
    sortTimestamp(date) {
      let timestamp = new Date(date.replace(/\//g, "-"));
      return timestamp.getTime();
    },
    increase() {
      this.$store.dispatch('incrementCount', this.counting)
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  /* 設定font-size用 1rem=10px */
  font-size: 10px;
}

.box {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.list {
  width: 100%;
}

.progress-part {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #fff;
}

.part-title {
  height: 1.5rem;
  width: 100%;
  background-color: #a9acb8;
  font-size: 0.1rem;
  position: relative;
}

.i {
  height: 1.2rem;
  width: 0.5rem;
  margin-left: 0.8rem;
  margin-top: 0.1rem;
  border-left: solid 0.25rem #219315;
  position: absolute;
}

.title {
  height: 1.2rem;
  margin-left: 1.4rem;
  margin-top: 0.1rem;
  text-align: left;
  position: absolute;
}

.card {
  width: 100%;
  height: 10rem;
  border: 1px solid #a9acb8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.card-left {
  width: 20%;
  height: 100%;
}

.img {
  height: 100%;
  width: 100%;
  padding: 2rem;
}

img {
  height: 6rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-right {
  margin: 1rem;
  width: 70%;
  height: 100%;
}

.right-top {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.type {
  width: 20%;
  color: #46b035;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.date {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.right-bottom {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.name {
  text-align: left;
}

.card-icon {
  width: 10%;
  height: 100%;
}

.arrow {
  width: 100%;
  height: 100%;
}

.arrow span {
  width: 100%;
  height: 100%;
  font-size: 3rem;
  color: #a9acb8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
