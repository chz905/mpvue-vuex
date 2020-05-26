<template>
    <div>
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "@/api";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['openid','systemInfo'])
  },
  methods: {
    // ...mapActions(['getOpenId']),
    // 登录获取用户信息
    headGetUserInfo() {
      wx.getUserInfo({
        success: res => {
          this.$store.dispatch("syncUserInfo", res.userInfo);
          this.getOpenId();
          //   this.$store.dispatch("getOpenId");
        }
      });
    },
    getUserInfo(data) {
      if (data.mp.detail.rawData) {
        this.headGetUserInfo();
      }
    },
    getOpenId() {
      wx.login({
        success: res => {
          api.getOpenId({
              method: "POST",
              data: {
                jsCode: res.code
              }
            }).then(res => {
              let id = {
                openid: res.result.openid,
                unionid: res.result.unionid
              };
              this.$store.dispatch("getOpenId", id);
              this.getToken();
            });
        }
      });
    },
    //获取token
    async getToken() {
      const json = await api.thirdPartyLogin({
        method: "POST",
        data: {
            thirdPart: 'wx',
            openId: this.openid,
            deviceId: '',
            loginDevice: this.systemInfo.model
        }
      })
      if(json.returnCode == 0){
        let token = {
          mid: json.result.mid,
          token: json.result.token,
          user: json.result.user
        }
        this.$store.dispatch('getUserId',token)
      }
      
    }
  }
};
</script>

<style>
</style>
