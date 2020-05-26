<template>
    <div>
        <skeleton selector="skeleton" bgcolor="#FFF" v-if="showSkeleton"></skeleton>
        <scroll-view
            class="nav skeleton-rect"
            :class="{ hide:isHide }"
            scroll-x="true"
            :scroll-left="navScrollLeft"
            scroll-with-animation="true"
        >
            <view
                v-for="(navItem,idx) in navData"
                :key="idx"
                class="nav-item hide_font"
                :class="{ active : currentTab == idx}"
                :data-current="idx"
                @tap="switchNav"
            >{{navItem.text}}</view>
        </scroll-view>
        <swiper class="tab-box skeleton-rect" :current="currentTab" duration="300" @change="switchTab">
            <swiper-item v-for="(tabItem,idx) in list" :key="idx" class="tab-content">{{tabItem}}</swiper-item>
        </swiper>
        
        <div style="height: 2000rpx">

        </div>
        
    </div>
</template>

<script>
import skeleton from '../../components/skeleton'
export default {
  components:{
    skeleton
  },
  data() {
    return {
      showSkeleton: true,
      motto: "Hello World",
      userInfo: {},
      hasUserInfo: false,
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      navData: [
        {
          text: "首页"
        },
        {
          text: "健康"
        },
        {
          text: "情感"
        },
        {
          text: "职场"
        },
        {
          text: "育儿"
        },
        {
          text: "纠纷"
        },
        {
          text: "青葱"
        },
        {
          text: "上课"
        },
        {
          text: "下课"
        }
      ],
      currentTab: 0,
      navScrollLeft: 0,
      isHide: false
    }
  },
  beforeMount() {
    wx.getSystemInfo({
      success: res => {
        this.pixelRatio = res.pixelRatio;
        this.windowHeight = res.windowHeight;
        this.windowWidth = res.windowWidth;
      }
    })
  },
  onPageScroll(e){
    if(e.scrollTop > 200){
      this.isHide = true
    }else{
      this.isHide = false
    }
  },
  methods: {
    switchNav(event) {
      var cur = event.currentTarget.dataset.current;
      //每个tab选项宽度占1/5
      console.log(this.windowWidth)
      var singleNavWidth = this.windowWidth / 5;
      //tab选项居中
      this.navScrollLeft = (cur - 2) * singleNavWidth;
      if (this.currentTab == cur) {
        return false;
      } else {
        this.currentTab = cur;
      }
    },
    switchTab(event) {
      var cur = event.target.current;
    //   console.log(event)
      var singleNavWidth = this.windowWidth / 5;
      this.currentTab = cur;
      this.navScrollLeft = (cur - 2) * singleNavWidth;
    },
    
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.nav {
  transition: all 0.2s linear;
  height: 80rpx;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 80rpx;
  background: #f7f7f7;
  font-size: 22rpx;
  white-space: nowrap;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.nav-item {
  width: 20%;
  display: inline-block;
  text-align: center;
  transition: all 0.2s linear;
  transform: scale(1)
}
.nav-item.active {
  color: red;
}
.tab-box {
  background: greenyellow;
  margin-top: 100rpx;
  height: 200rpx;
  box-sizing: border-box;
}
.tab-content {
  overflow-y: scroll;
}
.hide{
  transform: translateY(-40rpx);
  .hide_font{
    transform: scale(1.1)
  }
}
</style>

