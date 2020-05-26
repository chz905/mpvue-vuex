<template>
  <div>
    <!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
    <img :src="userInfo.avatarUrl" mode="widthFix" alt=""> -->
    <!-- 头部 -->
    <nav class="nav" :style="{ paddingTop: MenuButton.top + 'px',height: MenuButton.height + 'px'}">
      <div class="adress" @tap="map()">
        <i class="iconfont icon-dingwei"></i>
        <span>{{address}}</span>
        <i class="iconfont icon-xia"></i>
      </div>
      <div class="search">
        <a href="../index_cate/main">
          <i class="iconfont icon-Group-"></i>
          <span>请输入搜索关键词</span>
        </a>
      </div>
    </nav>
    <!-- 轮播 -->
    <div class="w">
      <div class="swiper-group">
        <swiper :indicator-dots="true" class="swiper_box">
          <block v-for="(item,index) in list" :key="index">
            <swiper-item>
              <img :src="item.url" alt="">
            </swiper-item>
          </block>
        </swiper>
      </div>
      <ul class="cate">
        <li v-for="(item,index) in cate" :key="index" @tap="to">
          <img :src="item.img" mode="widthFix" alt="">
          <p>{{ item.title }}</p>
        </li>
      </ul>
      <!-- 活动 -->
      <div class="activity">
        <h3>热门活动</h3>
        <div class="activity_img">
          <ul class="activity_img3">
            <li>
              <img src="../../../static/images/zk1@2x.jpg" alt="">
            </li>
            <!-- <li><img src="../../../static/images/zk1@2x.jpg" alt=""></li> -->
            <li>
              <img src="../../../static/images/zk2@2x.jpg" alt="">
            </li>
            <li>
              <img src="../../../static/images/zk2@2x.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="activity">
        <h3>热门活动</h3>
        <div class="activity_img">
          <ul class="activity_img4">
            <li>
              <img src="../../../static/images/zk1@2x.jpg" alt="">
            </li>
            <li>
              <img src="../../../static/images/zk1@2x.jpg" alt="">
            </li>
            <li>
              <img src="../../../static/images/zk2@2x.jpg" alt="">
            </li>
            <li>
              <img src="../../../static/images/zk2@2x.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "@/api";
let amapFile = require("@/utils/amap-wx.js");
export default {
  data() {
    return {
      Amap: null,
      motto: "Hello miniprograme",
      MenuButton: {},
      list: [
        {
          name: "pic",
          url:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/positionImg/advert_8b6e3b88f1d142afbae1230f55fe394e_80148.png"
        },
        {
          name: "pic",
          url:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/positionImg/advert_8b6e3b88f1d142afbae1230f55fe394e_80148.png"
        },
        {
          name: "pic",
          url:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/positionImg/advert_8b6e3b88f1d142afbae1230f55fe394e_80148.png"
        }
      ],
      cate: [
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        },
        {
          img:
            "https://xgdj-img.oss-cn-shenzhen.aliyuncs.com/platform/industry_category/industryCateImg_5f163c16c503412fbbb49b3c4dc8a577_80148.png",
          title: "美食饮品"
        }
      ],
      address: "未选择"
    };
  },
  beforeMount() {
    this.Amap = new amapFile.AMapWX({
      key: "3234d08486f1deaab4a7b80fa38c8b1e"
    })
    this.$nextTick(() => {
      this.MenuButton = wx.getMenuButtonBoundingClientRect();
    })
    wx.getLocation({
      success: res => {
        let location = res.longitude + "," + res.latitude;
        this.getRegeo(location);
      },
      fail: err => {
        console.log(err);
      }
    })
    this.find()
  },
  onPullDownRefresh() {
    console.log("用户下拉了");
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 2000);
  },
  computed: {
    ...mapState(["userInfo", "postsList"])
  },
  methods: {
    find() {
      api.readAdvertDetail({
          method: "POST",
          data: {
            posCodes: "['UMPA0001']",
            businessCode: "0755"
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    // findPosts() {
    //   api.posts({}).then(res => {
    //     this.$store.dispatch('postsList', res)
    //   })
    // },

    // 左上角地图
    map() {
      wx.chooseLocation({
        success: res => {
          console.log(res);
          this.address = res.name;
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    // 地理逆编码
    getRegeo(location) {
      this.Amap.getRegeo({
        location: location,
        success: res => {
          console.log(res);
        }
      });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  padding-bottom: 20rpx;
  background: #fff;
}
.adress {
  display: flex;
  margin-right: 20rpx;
  align-items: center;
}
.adress i:nth-child(1) {
  font-size: 26rpx;
}
.adress i:nth-child(3) {
  font-size: 18rpx;
}
.adress span {
  font-size: 30rpx;
  padding: 0 8rpx;
  display: block;
  box-sizing: border-box;
}
.search a {
  display: block;
  display: flex;
  align-items: center;
  padding: 16rpx 60rpx;
  background: #f1f5fa;
  border-radius: 200rpx;
  font-size: 24rpx;
  color: #999999;
  box-sizing: border-box;
}
.search i {
  font-size: 24rpx;
  color: #999999;
  margin-right: 12rpx;
}
.swiper-group {
  height: 196rpx;
  width: 100%;
  background: #eee;
  border-radius: 12rpx;
  overflow: hidden;
}
.swiper_box {
  height: 100%;
  width: 100%;
}
.cate {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0;
}
.cate li {
  width: 20%;
  text-align: center;
  margin-bottom: 20rpx;
}
.cate li p {
  font-size: 26rpx;
}
.cate li img {
  width: 80rpx;
}
.activity {
  padding: 20rpx 0;
}
.activity h3 {
  font-size: 40rpx;
  color: #222;
  font-weight: bold;
  text-indent: 20rpx;
  position: relative;
  margin-bottom: 20rpx;
}
.activity h3::after {
  content: "";
  clear: both;
  display: block;
  width: 8rpx;
  height: 36rpx;
  background: linear-gradient(0, #32a4fd, #0086e0);
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -14rpx;
}
.activity_img li {
  border-radius: 12rpx;
  overflow: hidden;
}
.activity_img1 li {
  width: 100%;
  height: 164rpx;
}
.activity_img2 {
  display: flex;
  justify-content: space-between;
}
.activity_img2 li {
  width: 340rpx;
  height: 164rpx;
  margin: 6rpx;
}
.activity_img3::after {
  clear: both;
  content: "";
  display: block;
}
.activity_img3 li {
  width: 340rpx;
  height: 164rpx;
  float: left;
  margin: 10rpx;
}
.activity_img3 li:nth-child(1) {
  width: 340rpx;
  height: 340rpx !important;
}
.activity_img4 {
  display: flex;
  justify-content: space-between;
}
.activity_img4 li {
  width: 25%;
  height: 212rpx;
  margin: 0 6rpx;
}
</style>
