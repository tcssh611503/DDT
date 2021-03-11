<template>
  <div class="box">
    <div class="progress-part">
      <div class="part-title">
        <div class="i"></div>
        <h1 class="title">進行中</h1>
      </div>
      <div class="card">
        <div class="card-left">
          <div class="img">
            <img
              src="https://static.oopocket.com/store/iconTreemall@3x.png"
              alt=""
            />
          </div>
        </div>
        <div class="card-right">
          <div class="right-top">
            <div class="type"><p>已送達</p></div>
            <div class="date"><p>預計出貨:108/3/02</p></div>
          </div>
          <div class="right-bottom">
            <div class="name">
              <p>Livi優活 抽取式衛生紙(100抽x10包x10串/箱)</p>
            </div>
          </div>
        </div>
        <div class="card-icon">
          <div class="arrow"><span>></span></div>
        </div>
      </div>
    </div>
    <div class="progress-part">
      <div class="part-title">
        <div class="i"></div>
        <h1 class="title">已完成</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      orders: [
        {
          name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 3,
            type: "已取消",
          },
          date: "107/6/12",
        },
        {
          name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 2,
            type: "已成立",
          },
          date: "108/7/21",
        },
        {
          name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 1,
            type: "處理中",
          },
          date: "108/6/2",
        },
        {
          name: "Apple AirPds 2",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 4,
            type: "已送達",
          },
          date: "108/3/02",
        },
      ],
    };
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}

.progress-part {
  width: 100%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #fff;
}

.part-title {
  height: 1.5rem;
  width: 100%;
  background-color: #a9acb8;
  /* border: 2px ridge #ffffff; */
  font-size: 0.1rem;
}

.i {
  height: 1.2rem;
  width: 0.5rem;
  margin-left: 0.8rem;
  margin-top: 0.1rem;
  border-left: solid 0.25rem #219315;
  /* display: inline-block; */
  position: absolute;
}

.title {
  /* display: inline-block; */
  height: 1.2rem;
  margin-left: 1.4rem;
  margin-top: 0.1rem;
  text-align: left;
  /* border-left: 0.5rem ridge #219315; */
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
  /* position: relative; */
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

.type{
  width: 20%;
  color: #46B035;
  font-weight: 400;
    display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.date{
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

.card-icon {
  width: 10%;
  height: 100%;
}

.arrow {
  width: 100%;
  height: 100%;
  /* padding: 1rem; */

  /* background-color: #e60012; */
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
