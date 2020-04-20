<template>
  <div>
    <button @getuserinfo="btn" open-type="getUserInfo">获取用户信息</button>
    <p v-if="userInfo.nickName">
      <span>姓名：</span>
      {{ userInfo.nickName }}
    </p>
    <img :src="userInfo.avatarUrl" alt="" mode="widthFix">
    <div @tap="maop" class="mapp">
      <span @tap.stop="maopao1">测试冒泡不冒泡</span>
    </div>
    <button @tap="tiaozhuan">跳转</button>
    <ul>
      <li v-for="(item,index) in listTmp" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      motto: "Hello miniprograme",
      rawData: {}
    };
  },
  
  mounted() {
    this.handGetUserInfo();
    this.find();
    
  },
  computed: {
    ...mapState(['listTmp','userInfo']),
  },
  methods: {
    find() {
      wx.request({
        url: "https://jsonplaceholder.typicode.com/posts", //仅为示例，并非真实的接口地址
        success:res => {
          this.$store.dispatch('getList',res.data)  //分发action 修改状态
          // console.log(res.data);
        }
      });
    },
    handGetUserInfo() {
      wx.getUserInfo({
        success: e => {
          this.$store.dispatch('getUserInfo',e.userInfo)  //分发action 修改状态
        }
      });
    },
    btn(e) {
      if (e.mp.detail.rawData) {
        //用户授权
        this.handGetUserInfo();
      }
    },
    maop() {
      console.log(1);
    },
    maopao1() {
      console.log(2);
    },
    tiaozhuan() {
      wx.navigateTo({
        url: "../list/main?id=1",
        success: result => {}
      });
    }
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
.mapp {
  width: 50%;
  height: 60rpx;
  line-height: 60rpx;
  border: 1rpx solid red;
  margin: 0 auto;
}
</style>
