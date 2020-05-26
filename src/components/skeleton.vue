<template>
    <div>
        <div
            class="wrap"
            :style="{'width':systemInfo.width+'px','height':systemInfo.height+'px', 'background-color':bgcolor}"
        >
            <div
                v-for="(item,index) in skeletonRectLists"
                :index="index"
                :key="item"
                class="chiaroscuro"
                :style="{'width':item.width+'px','height':item.height+'px','background-color':'rgba(233, 2, 233,1)','position':'absolute','left':item.left+'px','top':item.top+'px'}"
            ></div>
            <div
                v-for="(item,index) in skeletonCircleLists"
                :index="index"
                :key="item"
                class="chiaroscuro"
                :style="{'width':item.width+'px','height':item.height+'px','background-color':'rgba(233, , 233,1)','border-radius':item.width+'px','position':'absolute','left':item.left+'px','top':item.top+'px'}"
            ></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    bgcolor: { type: String, value: "#FFF" },
    selector: { type: String, value: "skeleton" }
  },
  data() {
    return {
      systemInfo: {},
      skeletonRectLists: [],
      skeletonCircleLists: []
    };
  },
  onLoad() {
    //默认的首屏宽高，防止内容闪现
    const systemInfo = wx.getSystemInfoSync();
    this.systemInfo = {
      width: systemInfo.windowWidth,
      height: systemInfo.windowHeight
    };
    //绘制背景
    // let query = wx.createSelectorQuery();
    // query.selectAll(`.${this.selector}`).boundingClientRect();
    // query.exec(res => {
    //   console.log(res, "123456");
    //   this.systemInfo.height = res[0][0].height + res[0][0].top || 0;
    // });

    //绘制矩形
    this.rectHandle();

    //绘制圆形
    this.radiusHandle();
  },
  methods: {
    rectHandle() {
      let query = wx.createSelectorQuery();
      //绘制不带样式的节点
      query.selectAll(`.${this.selector}-rect`).boundingClientRect();
      query.exec(res => {
        this.skeletonRectLists = res[0];
      });
    },

    radiusHandle() {
      let query = wx.createSelectorQuery();
      query.selectAll(`.${this.selector}-radius`).boundingClientRect();
      query.exec(res => {
        this.skeletonCircleLists = res[0];
      });
    }
  }
};
/* eslint-enable */
</script>

<style scoped>
.wrap {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9998;
  overflow: hidden;
}
.chiaroscuro {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 40px;
  position: relative;
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>