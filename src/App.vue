<script>
export default {
  beforeMount() {
    this.getSystemInfo();
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          this.headGetUserInfo();
        }
      }
    });
  },
  methods: {
    // 获取设备名称
    getSystemInfo() {
      wx.getSystemInfo({
        success: res => {
          console.log('123')
          this.$store.dispatch("getSystemInfo", res);
        }
      });
    },
    headGetUserInfo() {
      wx.getUserInfo({
        success: res => {
          this.$store.dispatch("syncUserInfo", res.userInfo);
        }
      });
    },
  }
};
</script>

<style>
@import "../static/css/icon.css";
.w {
  width: 96%;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
</style>
